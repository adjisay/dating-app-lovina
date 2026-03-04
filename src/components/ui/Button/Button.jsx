import "./Button.scss"
import cn from "classnames"
import Icon from "@/components/Icon"

function Button({
  label = "Кнопка",
  variant = "primary",
  size = "md",
  isDisabled = false,
  isFullWidth = false,
  icon,
  onClick,
}) {
  return (
    <button
      class={cn("button", `button--${variant}`, `button--${size}`, {
        "button--full-width": isFullWidth,
        "button--disabled": isDisabled,
      })}
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {icon && <Icon name={icon} size={size === "sm" ? 16 : size === "lg" ? 22 : 18} className="button__icon" />}
      {label && <span class="button__label">{label}</span>}
    </button>
  )
}

export default Button
