export type SnsLinkLabel = 
  | "twitter"
  | "discord"
  | "youtube"
  | "steam"
  | "itch"
  | "github"
  | "twitch"
  | "spotify";

export type SnsLinkType = {
  label: string;
  url: string;
}

export type ProjectMemberType = {
  name: string;
  asset: string;
  link?: string;
  image?: string;
}

export type ProjectType = {
  active: boolean;
  title: string;
  category: string;
  series?: string;
  capsule?: string;
  releaseDate?: string;
  links?: SnsLinkType[];
  tags?: string[];
  members?: ProjectMemberType[];
}
