import { Deal } from "../models/Deal";

export const resolvers = {
  getDeal: async ({ id }: { id: string }) => {
    return await Deal.findByPk(id);
  },
  createDeal: async ({ input }: { input: any }) => {
    return await Deal.create(input);
  },
  updateDeal: async ({ id, input }: { id: string; input: any }) => {
    const deal = await Deal.findByPk(id);
    if (!deal) {
      throw new Error("Deal not found");
    }
    await deal.update(input);
    return deal;
  },
};
