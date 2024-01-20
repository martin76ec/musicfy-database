import type { Album } from "../../../plugins/types";
import { Prisma, PrismaClient } from "@prisma/client";

export class AlbumDS {
  static async find_one(prisma: PrismaClient, album_id: Album["id"]): Promise<Partial<Album> | null> {
    return prisma.album.findUnique({
      where: {
        id: album_id
      },
      select: {
        id: true,
        name: true,
      }
    });
  }

  static async find_many(prisma: PrismaClient, skip: number, take: number): Promise<Partial<Album>[]> {
    return prisma.album.findMany({
      where: {
        body: {
          search: "asdasd"
        }
      }
    });
  }
}
