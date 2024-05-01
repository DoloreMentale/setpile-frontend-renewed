import type { ButtonType } from "ant-design-vue/lib/button";
import type { ISearchInput } from "~/widgets/search/types";
import type { TSection } from "~/shared";

export interface IProps {
  section: TSection;
}

interface IActionBtn {
  text: string;
  type: ButtonType;
  link: string;
}

export interface ISection {
  title: string;
  search: Array<ISearchInput>;
  benefits: Array<string>;
  actions: Array<IActionBtn>;
  initialReqUrl: string;
}
