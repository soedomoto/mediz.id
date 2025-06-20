FROM minio/mc AS s3-init-dev
ADD docker/s3-init-dev /
RUN chmod +x /startup.sh

FROM node:20-alpine AS base


FROM base AS deps
RUN apk add --no-cache libc6-compat build-base bash
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --no-frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi


FROM base AS base-prod
WORKDIR /app
COPY --from=deps /app/package.json /app/yarn.lock* /app/package-lock.json* /app/pnpm-lock.yaml* ./
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn prisma generate 


FROM base-prod AS migrate-prod


FROM base-prod AS app-prod
RUN yarn build


FROM scratch AS export-stage
COPY --from=app-prod /app/dist/ .
