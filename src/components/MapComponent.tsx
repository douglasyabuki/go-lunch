import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("./Map"), { ssr: false })

export default function MapComponent() {
  return <DynamicMap />
}
