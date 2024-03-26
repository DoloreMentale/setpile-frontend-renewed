export interface ISearchInput {
  id: string;
  placeholder: string;
  label: string;
}

export interface IProps {
  inputs: Array<ISearchInput>;
}
