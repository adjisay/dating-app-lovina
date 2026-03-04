import "./Tag.scss"
import cn from "classnames"

function Tag({ label = "", isSelected = false, onClick }) {
  return (
    <button
      class={cn("tag", { "tag--selected": isSelected })}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Tag
