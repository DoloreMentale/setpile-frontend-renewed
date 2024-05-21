import useApiClient from "~/composables/use-api-client";
import type { IProjectItem } from "~/widgets/section-items/projects-item/types";
import type { INewsItem } from "~/widgets/section-items/news-item/types";
import type { ILiveInventoriesItem, LiveInventoriesCategories } from "~/widgets/section-items/live-inventories-item/types";
import type { TMeta } from "~/base/page-content/types";
import type { IMarketItem, MarketCategories } from "~/widgets/section-items/marketplace-item/types";
import type { User } from "~/shared/types";

export const useApi = {
  PROJECTS: (key: string) =>
    useApiClient<{
      data: Array<IProjectItem>;
      meta: TMeta;
    }>(
      "get",
      "/v3/jobs?type=project&page=1&sort_field=created_at&per_page=20&sort_direction=desc&search_longitude=30.2618&search_latitude=59.8983",
      key,
    ),
  LIVE_INVENTORIES: (key: string) =>
    useApiClient<{
      data: Array<ILiveInventoriesItem>;
      meta: TMeta;
    }>(
      "get",
      "/v3/products?page=1&sort_field=distance_from_user&per_page=20&sort_direction=desc&search_longitude=30.2618&search_latitude=59.8983",
      key,
    ),
  MARKETPLACE: (key: string) =>
    useApiClient<{
      data: Array<IMarketItem>;
      meta: TMeta;
    }>(
      "get",
      "/v4/listings?page=1&sort_field=updated_at&per_page=20&sort_direction=desc&post_type=listing&search_longitude=30.2618&search_latitude=59.8983",
      key,
    ),
  NEWS: (key: string) =>
    useApiClient<{
      data: Array<INewsItem>;
      meta: TMeta;
    }>(
      "get",
      "/v3/news/posts?page=1&sort_direction=desc&sort_field=created_at",
      key,
    ),
  PRODUCT_CATEGORIES: (key: string) =>
    useApiClient<{ data: LiveInventoriesCategories }>(
      "get",
      "/v3/products/categories",
      key,
    ),
  MARKETPLACE_CATEGORIES: (key: string) =>
    useApiClient<{ data: MarketCategories }>(
      "get",
      "/v4/listings/categories",
      key,
    ),
  USER: (key: string) =>
    useApiClient<{ data: User }>(
      "get",
      "/v4/auth/user",
      key,
    ),
};
