import Navbar from "../components/navbar"

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative h-screen w-screen min-w-[400px] overflow-hidden bg-grey-5 dark:bg-grey-80 dark:text-white">
      <Navbar />
      {children}
    </div>
  )
}
