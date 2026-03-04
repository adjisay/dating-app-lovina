import "./Input.scss"
import cn from "classnames"
import Icon from "@/components/Icon"

function Input({
  type = "text",
  placeholder = "",
  value,
  icon,
  isError = false,
  errorMessage = "",
  onChange,
  name,
}) {
  return (
    <div class={cn("input-field", { "input-field--error": isError })}>
      <div class="input-field__wrapper">
        {icon && (
          <Icon name={icon} size={20} className="input-field__icon" />
        )}
        <input
          class={cn("input-field__input", {
            "input-field__input--with-icon": !!icon,
          })}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete="off"
        />
      </div>
      {isError && errorMessage && (
        <span class="input-field__error">{errorMessage}</span>
      )}
    </div>
  )
}

export default Input
