import readlineSync from "readline-sync";
import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const courseContext = `
The Web Development course teaches students how to build modern web applications.
The course starts with HTML, CSS, and JavaScript fundamentals.
After that, students learn React for building user interfaces.
The backend part covers Node.js, Express.js, and MongoDB.
The final project is a full-stack web application.
Students must submit the final project on GitHub.
The project deadline is next Thursday.
The presentation should include the project idea, tools used, main features, and a short demo.
`;

const model = new ChatOllama({
    model: "llama3.2",
    temperature: 0
});

const prompt = ChatPromptTemplate.fromTemplate(`
You are an AI Study Assistant.

Answer the user's question using only the context below.
If the answer is not found in the context, say:
"I don't know based on the given context."

Context:
{context}

Question:
{question}

Answer:
`);

const parser = new StringOutputParser();

const chain = prompt.pipe(model).pipe(parser);

console.log("AI Study Assistant using LangChain.js + Ollama");
console.log("Ask a question about the course.");
console.log("Type 'exit' to stop.\n");

while (true) {
    const question = readlineSync.question("Your question: ");

    if (question.toLowerCase() === "exit") {
        console.log("Goodbye!");
        break;
    }

    const answer = await chain.invoke({
        context: courseContext,
        question: question
    });

    console.log("\nAnswer:");
    console.log(answer);
    console.log("-".repeat(50));
}