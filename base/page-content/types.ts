import type { Component } from "vue";
import type { TSection } from "~/shared";
import type { IProjectItem } from "~/widgets/section-items/projects-item/types";

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
  items: Array<IProjectItem> | undefined;
  meta: TMeta | undefined;
}

export type TItemComponents = {
  [key in TSection]: Component;
};
