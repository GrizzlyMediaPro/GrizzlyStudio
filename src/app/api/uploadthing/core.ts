import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { requireAdminUser } from "@/lib/admin-access";

const f = createUploadthing();

export const uploadRouter = {
  portfolioImage: f({
    image: {
      maxFileCount: 1,
      maxFileSize: "8MB",
    },
  })
    .middleware(async () => {
      const { userId, isAdmin } = await requireAdminUser();

      if (!userId || !isAdmin) {
        throw new UploadThingError("Unauthorized");
      }

      return { userId };
    })
    .onUploadComplete(async ({ file }) => {
      return {
        url: file.ufsUrl,
        name: file.name,
      };
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
