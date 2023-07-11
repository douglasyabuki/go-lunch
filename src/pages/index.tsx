import MapComponent from "@/components/MapComponent";

export default function Home() {
  return (
    <main
      className={`flex w-screen min-h-screen flex-col items-center justify-between p-24 dark:bg-background-black dark:text-not-so-white transform-gpu transition-colors duration-300`}
    >
      <MapComponent></MapComponent>
    </main>
  );
}
