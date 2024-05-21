import type { GeoPlace } from "~/widgets/section-items/projects-item/types";

export type TSection = "projects" | "live-inventories" | "marketplace" | "news";
export type TModalType = "login" | "register" | "sign-up" | "tariffs" | "forgot-password" | "send-offer" |undefined;

export interface User {
  id: number;
  email: string;
  email_verified_at: string;
  phone: number;
  first_name: string;
  last_name: string;
  avatar_image_path: string;
  company_name: string;
  has_free_subscription: boolean;
  billing_portal_url: string;
  subscription: UserSubscription;
  latitude: number;
  longitude: number;
  geo_place: GeoPlace;
  sas_cpa: SasCpa;
}

export interface UserSubscription {
  status: string;
  trial_ends_at: string;
  will_be_canceled_at: string;
  created_at: string;
  current_period_end: string;
  billing_period: string;
  billing_period_price: number;
}

export interface SasCpa {
  sscid: string;
  events: SasCpaEvents;
  created_at: string;
  updated_at: string;
}

export interface SasCpaEvents {
  event_id: number;
  is_triggered_at_backend: boolean;
  is_dispatched_at_frontend: boolean;
  triggered_at: string;
  dispatched_at: string;
}