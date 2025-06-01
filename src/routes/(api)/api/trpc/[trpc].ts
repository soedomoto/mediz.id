import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { type APIEvent } from "@solidjs/start/server";
import { createContext } from './context';
import { appRouter } from './router';

const handler = (event: APIEvent) => (
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req: event.request,
    router: appRouter,
    createContext,
  })
)

export const GET = handler;
export const POST = handler;