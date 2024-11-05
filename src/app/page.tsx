"use client";
import Head from "next/head";
import TodoList from "../app/components/todolist";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="A simple To-Do List app built with Next.js and Tailwind CSS" />
      </Head>
      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default Home;
