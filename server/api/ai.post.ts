import { Configuration, OpenAIApi } from "openai";

export default defineEventHandler(async (event) => {
  
  const { OPENAI_API_KEY } = useRuntimeConfig();

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Send me any 5 digit prime number." }],
    temperature: 0.7,
    n: 2,
  });

  return completion.data;

});
