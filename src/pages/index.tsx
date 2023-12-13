import MapComponent from "@/components/MapComponent"

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen transform-gpu flex-col items-center justify-between overflow-hidden p-24 transition-colors duration-300 dark:bg-background-black dark:text-not-so-white">
      <MapComponent />
    </main>
  )
}
