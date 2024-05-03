import type { Component } from "vue";
import type { TSection } from "~/shared";
import type { IProjectItem } from "~/widgets/section-items/projects-item/types";
import type { INewsItem } from "~/widgets/section-items/news-item/types";
import type { IMarketItem } from "~/widgets/section-items/marketplace-item/types";
import type { ILiveInventoriesItem } from "~/widgets/section-items/live-inventories-item/types";

export type TMeta = {
  currentPage: number;
  from: number;
  lastPage: number;
  path: string;
  perPage: number;
  to: number;
  total: number;
};

export interface IProps {
  section: TSection;
  items: Array<IProjectItem | INewsItem | IMarketItem | ILiveInventoriesItem> | undefined;
  meta: TMeta | undefined;
}

export type TItemComponents = {
  [key in TSection]: Component;
};
