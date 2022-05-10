export interface Launch {
  auto_update: boolean;
  capuseles: any;
  cores: any;
  crew: any;
  date_local: string;
  date_precision: string;
  date_unix: number;
  date_utc: string;
  details: string;
  failures: any;
  flight_number: number;
  id: string;
  launch_library_id: string;
  launchpad: string;
  links: Links;
  name: string;
  net: boolean;
  payload: string[];
  rocket: string;
  ships: any;
  static_fire_date_unix: number;
  static_fire_date_utc: string;
  success: boolean;
  tbd: boolean;
  upcomnig: boolean;
  window: number;
}
interface Links {
  patch: {
    small: string;
    large: string;
  };
}
