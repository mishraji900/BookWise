import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: config.env.imagekit.publicKey as string,
  privateKey: config.env.imagekit.privateKey as string,
  urlEndpoint: config.env.imagekit.urlEndpoint as string,
});
const allowedOrigin = "https://book-wise-9qsnfgwo9-mishraji900s-projects.vercel.app";

export async function GET() {
  const authParams = imagekit.getAuthenticationParameters();

  // Add CORS headers
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", allowedOrigin); // Replace "*" with a specific domain if needed
  headers.append("Access-Control-Allow-Methods", "GET, OPTIONS");
  headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return NextResponse.json(authParams, { headers });
}

// Handle OPTIONS preflight requests
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin, // Replace "*" with your frontend domain
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
