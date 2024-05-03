export interface INewsItem {
  id: number;
  slug: string;
  title: string;
  content: string;
  image_path: string;
  topics: Topic[];
  like_amount: number;
  comment_amount: number;
  created_at: Date;
  updated_at: Date;
  is_external: boolean;
  external_url: string;
  liked_by_user: boolean;
}

export interface Topic {
  id: number;
  name: string;
}

export interface IProps {
  item: INewsItem;
}
