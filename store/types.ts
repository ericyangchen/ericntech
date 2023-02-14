import { Database } from "@/supabase/types/database";

export enum tabType {
  Recent = "Recent",
  MostLiked = "Most Liked",
  Featured = "Featured",
}
export const tabTypes = [tabType.Recent, tabType.Featured, tabType.MostLiked];

export type PostInfo = Database["public"]["Tables"]["post"]["Row"];
