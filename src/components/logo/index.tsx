import Image from "next/image";
export interface LogoProps {}

export default function Logo(props: LogoProps) {
  return (
    <div className="flex text-4xl  text-not-so-white items-center align-middle h-16">
      <div className="relative h-16 w-16 mr-2">
        <Image
          src="./plate-white.svg"
          alt="SVG from w3"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className="text-not-so-white  font-extrabold mr-[2px]">go</h1>
      <h1 className="text-primary-green  font-extrabold">lunch</h1>
    </div>
  );
}
