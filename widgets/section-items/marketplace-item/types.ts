import { type GeoPlace } from "../projects-item/types";

export interface IMarketItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  model_name: string;
  description: string;
  is_hot_deal: boolean;
  status: string;
  is_available: boolean;
  category: Category;
  manufacturer: Manufacturer;
  price_value: number;
  price_unit_type: PriceType;
  quantity: number;
  min_order_quantity: number;
  allow_offers: boolean;
  package_weight: number;
  package_width: number;
  package_height: number;
  package_length: number;
  is_package_irregular: boolean;
  tags: string[];
  volume_pricing: VolumePricing[];
  delivery_method_type: DeliveryMethodType;
  condition_type: ConditionType;
  application_type: ApplicationType;
  return_policy_type: ReturnPolicyType;
  payment_method_types: PaymentMethodTypes[];
  images: Images[];
  geo_place: GeoPlace;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at: Date;
  can_edit: boolean;
  unread_responses_count: number;
  total_responses_count: number;
  email: string;
  phone: number;
}

export type Identifiable = {
  id: number;
  name: string;
}

export interface Category extends Identifiable {
  slug: string;
  image_path: string;
}

export interface Manufacturer extends Identifiable {}
export interface PriceType extends Identifiable {}
export interface DeliveryMethodType extends Identifiable {}
export interface ConditionType extends Identifiable {}
export interface ApplicationType extends Identifiable {}
export interface ReturnPolicyType extends Identifiable {}
export interface PaymentMethodTypes extends Identifiable {}

export interface Images {
  id: number;
  image_path: string;
}

export interface VolumePricing {
  from: number;
  to: number;
  price: number;
}

export interface IProps {
  item: IMarketItem;
}
