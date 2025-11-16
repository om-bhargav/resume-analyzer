"use server";
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
interface Request {
    file: string
}
const GenAI = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})
export async function POST(req: NextRequest){
  const {file}:Request = await req.json();
  const contents = [
        { text: "Analyze this resume and return the ats score out of 100 and provide strengths,weaknesses,recommendations,grammer,conclusion in json format and strictly follow field names ats_score,strengths,weaknesses,recommendations,grammar,summary field represents conclusion do not provide anything else other than json data in response" },
        {
            inlineData: {
                mimeType: 'application/pdf',
                data: file
            }
        }
    ];

  const response = await GenAI.models.generateContent({
    model:"gemini-2.5-flash-lite",
    contents: contents
  });
  const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
  return NextResponse.json({"message":"this response was successful",data:result});
};
