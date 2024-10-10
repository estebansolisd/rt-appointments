import Deal from "../models/deal";

export const resolvers = {
  getDeal: async ({ id }: { id: string }) => {
    return await Deal.findByPk(id);
  },
  recentDeals: async ({ limit }: { limit: number }) => {
    return await Deal.findAll({
      order: [['appointmentDate', 'DESC']],
      limit,
    });
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
