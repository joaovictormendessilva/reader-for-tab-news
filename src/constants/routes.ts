import type { Href } from "expo-router";

export const routes = {
  relevant: "/relevant",
  recent: "/recent",
} as const satisfies Record<string, Href>;
