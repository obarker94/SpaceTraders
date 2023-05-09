import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "SpaceTraders/server/api/trpc";

export const CreateAgentSchema = z.object({
  agentName: z.string(),
  faction: z.string(),
});

export type TCreateAgentSchema = z.infer<typeof CreateAgentSchema>;

export const agentRouter = createTRPCRouter({
  create: publicProcedure
    .input(CreateAgentSchema)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session?.user.id;
      if (!userId) throw new Error("No user found")

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symbol: input.agentName,
          faction: input.faction,
        }),
      };

      const registerAgent: any = await fetch('https://api.spacetraders.io/v2/register', options)
        .then(response => response.json())
        .catch(err => console.error(err));

      console.log(registerAgent)

      const token = registerAgent.data.token

      return ctx.prisma.agent.create({
        data: {
          name: input.agentName,
          faction: input.faction,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId,
          token,

        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    const userId = ctx.session?.user.id;
    if (!userId) throw new Error("No user found")
    return ctx.prisma.agent.findMany({
      where: {
        userId
      }
    });
  }),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

