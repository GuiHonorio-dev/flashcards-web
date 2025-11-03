import "server-only"
import { cert } from 'firebase-admin/app'

const decodedKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY!, "base64").toString("utf-8")

export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: decodedKey
})