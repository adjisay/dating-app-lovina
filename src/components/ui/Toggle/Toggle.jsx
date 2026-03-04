import "./Toggle.scss"
import cn from "classnames"

function Toggle({ isChecked = false, label = "", onChange }) {
  return (
    <label class="toggle">
      <input
        class="toggle__input"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span class={cn("toggle__track", { "toggle__track--active": isChecked })}>
        <span class="toggle__thumb" />
      </span>
      {label && <span class="toggle__label">{label}</span>}
    </label>
  )
}

export default Toggle
