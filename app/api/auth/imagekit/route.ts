import config from "@/lib/config";
import ImageKit from "imagekit"
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
    publicKey: config.env.imagekit.publicKey as string,
    privateKey:config.env.imagekit.privateKey as string,
    urlEndpoint:config.env.imagekit.urlEndpoint as string,
});


export async function GET(){
    return NextResponse.json(imagekit.getAuthenticationParameters());
}