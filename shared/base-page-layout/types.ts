import type { ISearchInput } from "~/widgets/search/types";

export interface IProps {
  section: "projects" | "live-inventories" | "marketplace" | "news";
}

interface IActionBtn {
  text: string;
  type: string;
  link: string;
}

export interface IPageHeader {
  title: string;
  search: Array<ISearchInput>;
  benefits: Array<string>;
  actions: Array<IActionBtn>;
}
