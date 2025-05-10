import { systemPrompt } from "@/lib/data";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";

// Initialize the Google Generative AI client
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

// Convert message format for Gemini API
// function convertMessagesToGeminiFormat(messages: Message[]) {
//   // Start with the system prompt
//   const result: any[] = [];
  
//   // Add system prompt as a user message (since Gemini doesn't have system role)
//   result.push({
//     role: "user",
//     parts: [{ text: systemPrompt.content }],
//   });

//   // Process the rest of the messages
//   messages.forEach((message) => {
//     // Map the roles from OpenAI format to Gemini format
//     const role = message.role === "assistant" ? "model" : "user";
    
//     result.push({
//       role,
//       parts: [{ text: message.content }],
//     });
//   });

//   return result;
// }

export async function POST(req: Request) {
  try {
    // Extract the messages from the body
    const { messages } = await req.json();

    // Use the streamText function from @ai-sdk/google
    const stream = await streamText({
      model: google("gemini-1.5-flash"),
      messages: [
        {
          role: "system",
          content: systemPrompt.content,
        },
        ...messages
      ],
      temperature: 0.7,
      maxTokens: 1000,
    });
    
    return stream.toDataStreamResponse();
  } catch (error: unknown) {
    console.error("Error in Gemini API route:", error);
    const errorMessage = error instanceof Error ? error.message : "An error occurred during the request";
    return new Response(
      JSON.stringify({
        error: errorMessage,
      }),
      { status: 500 }
    );
  }
}