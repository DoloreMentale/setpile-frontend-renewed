export interface AvailabilityInStores {
  amount: number;
  city: string;
  distance_from_user: number;
  latitude: number;
  longitude: number;
  price: number;
  state: string;
  store_id: number;
  updated_at: string;
  vendor_id: number;
  vendor_name: string;
  vendor_website_url: string
}

export interface CategoryPath {
  id: number;
  level: number;
  name: string;
  slug: string;
}

export interface Images {
  image_path: string;
}

export interface ILiveInventoriesItem {
  availability_in_stores: AvailabilityInStores[];
  category_path: CategoryPath[];
  closest_store_distance_from_user: number;
  description: string;
  id: number;
  images: Images[];
  manufacturer_id: number;
  manufacturer_part_number: string;
  minimum_price_in_stores: number;
  name: string;
  short_description: number;
  slug: string;
}

export interface IProps {
  item: ILiveInventoriesItem;
}

export interface LiveInventoriesCategories extends ChildrenPodCategories {
  children: ChildrenCategories[];
}

export interface ChildrenCategories {
  children: ChildrenPodCategories[];
}

export interface ChildrenPodCategories {
  id: number;
  slug: string;
  name: string;
  image_path: string;
  total_products_count: number;
}