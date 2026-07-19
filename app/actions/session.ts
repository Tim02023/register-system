import { connectionDB } from "../lib/db";
import { Session } from "../models/session";

export async function createSessionInDB({ userId, expiresAt }: { userId: string; expiresAt: Date }) {
    await connectionDB()
    if(!userId || !expiresAt) {
        return { error: "All fields are required to create a session." };
    }
    const create = await Session.create({
      userId: userId,
      expiresAt: expiresAt,
    })
    return create
}