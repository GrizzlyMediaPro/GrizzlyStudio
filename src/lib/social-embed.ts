const TIKTOK_VIDEO_PATH_REGEX = /\/video\/(\d+)/i;

function extractTikTokVideoId(rawUrl: string): string | null {
  const trimmedUrl = rawUrl.trim();
  if (!trimmedUrl) {
    return null;
  }

  const directMatch = trimmedUrl.match(TIKTOK_VIDEO_PATH_REGEX);
  if (directMatch?.[1]) {
    return directMatch[1];
  }

  try {
    const parsed = new URL(trimmedUrl);
    const fromPath = parsed.pathname.match(TIKTOK_VIDEO_PATH_REGEX)?.[1];
    if (fromPath) {
      return fromPath;
    }
  } catch {
    return null;
  }

  return null;
}

function normalizeTikTokEmbedUrl(rawUrl: string): string | null {
  const videoId = extractTikTokVideoId(rawUrl);
  if (!videoId) {
    return null;
  }

  return `https://www.tiktok.com/embed/v2/${videoId}`;
}

export function normalizeSocialEmbedUrl(embedUrl: string | null | undefined): string | null {
  const trimmed = embedUrl?.trim();
  if (!trimmed) {
    return null;
  }

  // Keep already valid iframe embed links untouched.
  if (/\/embed\/v2\/\d+/i.test(trimmed)) {
    return trimmed;
  }

  if (/tiktok\.com/i.test(trimmed)) {
    return normalizeTikTokEmbedUrl(trimmed) ?? trimmed;
  }

  return trimmed;
}
