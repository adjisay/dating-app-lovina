import "./Badge.scss"
import cn from "classnames"

function Badge({ count = 0, variant = "primary" }) {
  if (count <= 0) return null

  return (
    <span class={cn("badge", `badge--${variant}`)}>
      {count > 99 ? "99+" : count}
    </span>
  )
}

export default Badge
