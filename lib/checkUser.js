import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // Check if user already exists in your database
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id, // 🔁 Make sure field name matches your Prisma model (case sensitive)
      },
    });

    if (existingUser) {
      return existingUser;
    }

    // Create full name safely (handle null values)
    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

    // Create a new user in your database
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id, // 🔁 Match schema field name
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error checking/creating user:", error);
    return null;
  }
};
