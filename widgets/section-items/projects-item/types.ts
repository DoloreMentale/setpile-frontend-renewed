export interface Attributes {
  Match_addr: string;
  LongLabel: string;
  ShortLabel: string;
  Addr_type: string;
  City: string;
  MetroArea: string;
  Subregion: string;
  Region: string;
  RegionAbbr: string;
  Country: string;
  CntryName: string;
}

export interface GeoPlace {
  attributes: Attributes;
  location: { x: number; y: number };
}

export interface IProjectItem {
  id: number;
  slug: string;
  week_rate_from: number;
  week_rate_to: number;
  experience_level: string;
  employment_type: string;
  payment_rate_type: string;
  license_required: boolean;
  title: string;
  description: string;
  geo_place: GeoPlace;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at: Date;
  is_external: boolean;
  type: string;
  tags: Array<string>;
  can_edit: boolean;
}

export interface IProps {
  item: IProjectItem;
}
