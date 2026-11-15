import type { Href } from "expo-router";

export const routes = {
  relevant: "/relevant",
  recent: "/recent",
} as const satisfies Record<string, Href>;

export const postReaderHref = ({ username, slug }: { username: string; slug: string }): Href => ({
  pathname: "/[user]/[slug]",
  params: { user: username, slug },
});
