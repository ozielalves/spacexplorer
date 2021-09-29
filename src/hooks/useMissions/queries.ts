import { gql } from "@apollo/client";

export const GET_ALL_MISSIONS = gql`
  query GetAllMissions($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset, sort: "launch_date_local", order: "DESC") {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;
