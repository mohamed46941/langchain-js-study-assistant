# LangChain.js AI Study Assistant

A simple and practical AI demo built with **LangChain.js**, **Node.js**, and **Ollama**.

This project demonstrates how to build an AI-powered study assistant that answers questions based on a predefined course context.  
The assistant uses a local open-source language model through Ollama, so it does not require an OpenAI API key.

---

## Project Overview

The goal of this project is to show how LangChain.js can be used to build AI applications in JavaScript.

The application allows the user to ask questions about a course, and the assistant answers using only the information provided in the context.

This makes the demo simple, clear, and suitable for academic presentation.

---

## Demo Idea

The demo is an **AI Study Assistant**.

It has a fixed context about a Web Development course, such as:

- Course topics
- Frontend technologies
- Backend technologies
- Final project
- Submission method
- Deadline
- Presentation requirements

The user asks a question, and the assistant generates an answer based on that context.

---

## Example Questions

```txt
What does the course teach?
````

```txt
What technologies are used in the backend part?
```

```txt
What is the final project?
```

```txt
Where should students submit the final project?
```

```txt
When is the deadline?
```

```txt
What should the presentation include?
```

If the answer is not available in the context, the assistant should respond with:

```txt
I don't know based on the given context.
```

---

## Technologies Used

* **JavaScript**
* **Node.js**
* **LangChain.js**
* **Ollama**
* **Llama 3.2**
* **readline-sync**

---

## Why LangChain.js?

LangChain.js is a framework used to build applications powered by language models.

Instead of sending a simple prompt directly to a model, LangChain helps organize the AI workflow using components such as:

* Prompt Templates
* Language Models
* Chains
* Output Parsers
* Retrieval systems

In this project, we use a simple chain to connect the prompt, model, and output parser.

---

## How the Project Works

The application follows this workflow:

```txt
User Question → Prompt Template → Ollama Model → Output Parser → Final Answer
```

### Step-by-step explanation

1. The user enters a question in the terminal.
2. The question is combined with a fixed course context.
3. LangChain.js formats the final prompt using a Prompt Template.
4. The prompt is sent to the Ollama language model.
5. The model generates an answer.
6. The Output Parser converts the model response into plain text.
7. The answer is displayed in the terminal.

---

## Main LangChain Components Used

### 1. Chat Model

The chat model is responsible for generating the answer.

In this project, the model is loaded through Ollama:

```js
const model = new ChatOllama({
  model: "llama3.2",
  temperature: 0
});
```

---

### 2. Prompt Template

The prompt template controls how the input is sent to the model.

It includes:

* System instruction
* Course context
* User question

```js
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
```

---

### 3. Output Parser

The output parser converts the model response into a clean text output.

```js
const parser = new StringOutputParser();
```

---

### 4. Chain

The chain connects the main parts together:

```js
const chain = prompt.pipe(model).pipe(parser);
```

This means:

```txt
Prompt Template → Model → Output Parser
```

---

## Project Features

* Simple terminal-based AI assistant
* Uses LangChain.js workflow
* Runs locally using Ollama
* No OpenAI API key required
* Answers based on a fixed context
* Handles unknown questions
* Easy to understand and explain
* Suitable for academic demo and presentation

---

## Installation

### 1. Install Node.js

Make sure Node.js is installed on your machine.

Check installation:

```bash
node -v
```

```bash
npm -v
```

---

### 2. Install Ollama

Install Ollama from the official website.

After installation, pull the model:

```bash
ollama pull llama3.2
```

If your device cannot run the full model, you can use the smaller version:

```bash
ollama pull llama3.2:1b
```

If you use the smaller model, update the model name in `index.js`:

```js
model: "llama3.2:1b"
```

---

### 3. Install Project Dependencies

Inside the project folder, run:

```bash
npm install
```

---

## How to Run

Start the application:

```bash
npm start
```

Then ask questions in the terminal.

To stop the program, type:

```txt
exit
```

---

## Project Structure

```txt
langchain-js-study-assistant/
│
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Important Notes

* This project runs locally using Ollama.
* It does not require an OpenAI API key.
* The assistant does not search the internet.
* The assistant answers only from the given context.
* If the answer is not found in the context, it should say that it does not know based on the provided context.

---

## Demo Output Example

```txt
AI Study Assistant using LangChain.js + Ollama
Ask a question about the course.
Type 'exit' to stop.

Your question: What is the final project?

Answer:
The final project is a full-stack web application.
--------------------------------------------------
```

---

## Academic Explanation

This project demonstrates a basic LangChain.js workflow.

LangChain.js helps developers build AI applications by connecting different components together.
In this demo, we use a Prompt Template to combine the user question with a predefined context.
Then, the formatted prompt is passed to a local language model through Ollama.
Finally, the response is converted into plain text using an Output Parser.

The main idea is to make the model answer based on provided information instead of relying only on its general knowledge.

---

## Limitations

* The context is fixed inside the code.
* The assistant cannot answer questions outside the provided context.
* The quality of answers depends on the local model used.
* It does not include a graphical user interface.
* It does not use a database or document retrieval system.

---

## Future Improvements

Possible improvements include:

* Adding a web interface
* Loading context from a text file or PDF
* Adding document retrieval
* Using vector databases
* Supporting multiple courses
* Building a full RAG system
* Adding chat history

---

## Conclusion

This project is a simple but effective demonstration of how LangChain.js can be used to build AI applications with JavaScript.

It shows the basic workflow of:

```txt
Prompt Template → Language Model → Output Parser
```

Using Ollama allows the project to run locally without needing cloud API credits, making it practical for student demos and academic presentations.

````
