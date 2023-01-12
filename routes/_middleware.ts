import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 456,
  site: "segundo-site",
  domains: ["deco-sites-segundo-site.deno.dev"],
});