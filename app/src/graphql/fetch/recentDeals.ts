import { Deal } from "@/types/deal";
import { client } from "@/utils/urql-client";
import { recentDealsQuery } from "../queries/recenDealsQueries";

export async function fetchRecentDeals(limit: number): Promise<Deal[]> {
    const result = await client.query(recentDealsQuery, { limit }).toPromise();
    return result.data?.recentDeals || [];
  }