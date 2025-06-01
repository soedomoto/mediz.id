#! /usr/bin/env node

import chalk from 'chalk';
import { exec } from 'child_process';
import { program } from 'commander';
import dayjs from 'dayjs';
import { mkdirSync, readdirSync, writeFileSync } from 'fs';
import util from 'node:util';
import prismaClient from '~/lib/db';

program
  .command('make:seed')
  .description('make:seed')
  .option('--name <name>', 'name of seeder', 'faskes')
  .action(function ({ name }) {
    const dir = `./prisma/seeders/${dayjs().format('YYYYMMDDHHmmss')}_${name}`;
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      `${dir}/seed.ts`,
      `/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {});
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
`
    );
  });

program
  .command('db:seed')
  .description('db:seed')
  .action(async () => {
    const execp = util.promisify(exec);
    await prismaClient.$transaction(
      async (tx) => {
        const mig_names = readdirSync('./prisma/seeders', {
          withFileTypes: true,
        })
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name);

        for (const name of mig_names) {
          const started_at = dayjs().format();
          console.log(chalk.blue(`${started_at} - Running seeder ${name}`));

          const c = await tx.seeders.count({
            where: { seeder_name: name },
          });

          if (c > 0) {
            console.log(chalk.green(`${started_at} - Exists`));
            continue;
          }

          const { stderr, stdout } = await execp(
            `npx tsx ./prisma/seeders/${name}/seed.ts`
          );

          console.log(chalk.black(stdout));
          console.log(chalk.red(stderr));

          await tx.seeders.create({
            data: {
              seeder_name: name,
              started_at: started_at,
              finished_at: dayjs().format(),
            },
          });
        }
      },
      { timeout: 30 * 60 * 1000 }
    );
  });

program.parse();
