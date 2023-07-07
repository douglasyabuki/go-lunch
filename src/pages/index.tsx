import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex w-screen min-h-screen flex-col items-center justify-between p-24 bg-background-black text-not-so-white`}>
      <h1>You are authenticated!</h1>
    </main>
  );
}
