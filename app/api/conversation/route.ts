
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from 'openai';
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req: Request,
){
    try{
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;
         
        if (!userId){
            return new NextResponse("Unauthorised", {status:400});
        }
        
        if (!openai.apiKey){
            return new NextResponse("OpenAI API Key not configured", {status: 500});
        }

        if (!messages) {
            return new NextResponse("Messages are rquired", {status:400});
        }

       const freeTrial = await checkApiLimit();
       const isPro = await checkSubscription();
       if (!freeTrial && !isPro){
        return new NextResponse("Free trail has expired.", {status: 403})
       }


        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        });

        if (!isPro){
            await increaseApiLimit();
        };

        return NextResponse.json(response.choices[0],messages);

    }catch(error: unknown){
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal Error", {status:500});
        //Make internal error error.message to get error message
    }
}