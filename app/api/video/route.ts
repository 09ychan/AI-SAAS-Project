
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!
});

export async function POST(
    req: Request,
){
    try{
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;
        const input = {
            fps: 24,
            width: 1024,
            height: 576,
            prompt: prompt,
            guidance_scale: 17.5,
        };
         
        if (!userId){
            return new NextResponse("Unauthorised", {status:400});
        }

        if (!prompt) {
            return new NextResponse("Prompt are required", {status:400});
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();
        if (!freeTrial && !isPro){
         return new NextResponse("Free trail has expired.", {status: 403})
        }

        const response = await replicate.run("anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351", { input });


        if (!isPro){
           await increaseApiLimit(); 
        };
        
        return NextResponse.json(response);

    }catch(error: unknown){
        console.log("[VIDEO_ERROR]", error);
        return new NextResponse("Internal Error", {status:500});
        //Make internal error error.message to get error message
    }
}