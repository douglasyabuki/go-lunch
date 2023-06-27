import Image from "next/image";
export interface LogoProps {}

export default function Logo(props: LogoProps) {
  return (
    <div className="flex text-xl text-not-so-white items-center align-middle h-16">
      <Image
        src="./plate-white.svg"
        alt="SVG from w3"
        width={64}
        height={64}
        className="mr-1"
      />
      <h1 className="text-not-so-white text-4xl font-extrabold mr-1">go</h1>
      <h1 className="text-primary-green text-4xl font-extrabold">lunch</h1>
    </div>
  );
}
