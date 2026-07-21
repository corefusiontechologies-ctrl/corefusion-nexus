const LOVABLE_ASSET_ORIGIN = "https://project--c7648d37-939a-4be5-b821-2da3a242d047-dev.lovable.app";

export function assetUrl(url: string) {
  if (url.startsWith("/__l5e/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }

  return url;
}