import { auth, currentUser } from "@clerk/nextjs/server";

function hasAdminFlag(value: unknown) {
  if (value === true) return true;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "true" || normalized === "1" || normalized === "yes";
  }
  if (typeof value === "number") {
    return value === 1;
  }
  return false;
}

export async function requireAdminUser() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return { userId: null, isAdmin: false };
  }

  const user = await currentUser();
  const metadataCandidates: Array<Record<string, unknown> | null | undefined> = [
    (sessionClaims?.metadata as Record<string, unknown> | undefined) ?? undefined,
    (sessionClaims?.public_metadata as Record<string, unknown> | undefined) ?? undefined,
    (sessionClaims?.private_metadata as Record<string, unknown> | undefined) ?? undefined,
    (user?.publicMetadata as Record<string, unknown> | undefined) ?? undefined,
    (user?.privateMetadata as Record<string, unknown> | undefined) ?? undefined,
    (user?.unsafeMetadata as Record<string, unknown> | undefined) ?? undefined,
  ];

  const isAdmin = metadataCandidates.some(
    (metadata) => metadata && hasAdminFlag(metadata.isAdmin)
  );

  return {
    userId,
    isAdmin,
  };
}
