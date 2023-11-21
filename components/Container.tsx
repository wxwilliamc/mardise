import { cn } from "@/lib/utils"

interface ContainerProps {
    className?: string
    children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn(`mx-auto w-full max-w-screen-xl px-2.5 md:px-20`, className)}>
        {children}
    </div>
  )
}

export default Container