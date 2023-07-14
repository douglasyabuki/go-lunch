import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex h-16 items-center align-middle text-4xl text-not-so-white">
      <div className="relative mr-2 h-16 w-16">
        <Image src="./plate-white.svg" alt="SVG from w3" fill className="object-cover" />
      </div>
      <h1 className="mr-[2px] font-extrabold text-not-so-white">go</h1>
      <h1 className="font-extrabold text-primary-green">lunch</h1>
    </div>
  )
}
