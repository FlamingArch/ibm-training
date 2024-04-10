type ButtonProps = {
  children?: React.ReactNode
  primary?: boolean
}

export default function Button({ children, primary }: ButtonProps) {

  const classes = "rounded-full py-3 px-6 flex gap-3 items-center " +
    (primary ? "bg-red-950" : "bg-red-800")

  return (
    <button className={classes}>{children}</button>
  )
}
