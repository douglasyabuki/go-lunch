import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex w-screen min-h-screen flex-col items-center justify-between p-24 dark:bg-background-black dark:text-not-so-white transform-gpu transition-colors duration-300`}>
      <h1>You are authenticated!</h1>
    </main>
  );
}
