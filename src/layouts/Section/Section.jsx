import "./Section.scss"
import cn from "classnames"

function Section({ children, className }) {
  return <section class={cn("section", className)}>{children}</section>
}

export default Section
