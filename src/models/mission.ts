export interface Mission {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_site: LaunchSite;
  links: Links;
  rocket: Rocket;
}

interface LaunchSite {
  site_name_long: string;
}

interface Links {
  article_link: string | null;
  flickr_images: any[];
}

interface Rocket {
  rocket_name: string;
}
