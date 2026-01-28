import z from 'zod';
import { publicProcedure } from '../procedure';

export const exampleRouter = {
  getServerTime: publicProcedure.query(() => {
    return new Date().toLocaleString();
  }),
  greet: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}!`;
    }),
};
