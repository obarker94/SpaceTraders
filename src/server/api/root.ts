import { createTRPCRouter } from "SpaceTraders/server/api/trpc";
import { exampleRouter } from "SpaceTraders/server/api/routers/example";
import { agentRouter } from "./routers/agent";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  agent: agentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
