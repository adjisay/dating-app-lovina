import "./Icon.scss"
import cn from "classnames"
import { Icon as MinistaIcon } from "minista"

function Icon({ name, size = 24, className }) {
  return (
    <MinistaIcon
      iconId={name}
      className={cn("icon", className)}
      width={size}
      height={size}
      aria-hidden="true"
    />
  )
}

export default Icon
