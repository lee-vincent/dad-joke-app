import createAgent from ".";

export const twitterAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are a helpful writer and assistant that generates 'Dad Jokes' based on user input.",
      },
      {
        role: "user",
        content: `Create a dad joke about ${context.url}.`,
      },
    ],
    max_tokens: 350,
  };
});
