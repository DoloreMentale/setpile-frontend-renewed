import type { TItemComponents } from "~/base/page-content/types";

import {
  ProjectsItem,
  LiveInventoriesItem,
  MarketplaceItem,
  NewsItem,
} from "~/widgets";

export const itemComponents: TItemComponents = {
  projects: ProjectsItem,
  "live-inventories": LiveInventoriesItem,
  marketplace: MarketplaceItem,
  news: NewsItem,
};
