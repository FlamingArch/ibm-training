import { Link } from "react-router-dom"

type ButtonProps = {
  children?: React.ReactNode
  primary?: boolean
  asLink?: boolean
  path?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, primary, ...props }: ButtonProps) {

  const classes = ""
    + "text-white font-semibold "
    + "rounded-full py-2 px-4 flex gap-3 items-center transition-colors "
    + (primary ? "bg-red-950 hover:bg-red-900" : "bg-red-800 hover:bg-red-700")
    + " disabled:bg-gray-400 disabled:cursor-not-allowed"

  if (props.asLink && props.path)
    return <Link to={props.path} className={classes}>{children}</Link>

  return (
    <button className={classes} {...props} >{children}</button>
  )
}
