type AppBarProps = {
  children?: React.ReactNode
  title?: string
}

export default function AppBar({
  children,
  title
}: AppBarProps) {
  return <div className="flex p-4 items-center justify-between bg-red-800 shadow-2xl">
    <p className="text-2xl font-bold">{title}</p>
    {children}
  </div>
}
