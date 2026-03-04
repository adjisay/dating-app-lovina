import "./SettingsItem.scss"
import cn from "classnames"
import Icon from "@/components/Icon"

function SettingsItem({
  label = "",
  icon,
  value,
  onClick,
  hasArrow = true,
}) {
  return (
    <button class="settings-item" type="button" onClick={onClick}>
      {icon && (
        <span class="settings-item__icon">
          <Icon name={icon} size={22} />
        </span>
      )}
      <span class="settings-item__label">{label}</span>
      {value && <span class="settings-item__value">{value}</span>}
      {hasArrow && (
        <Icon name="chevron-right" size={18} className="settings-item__arrow" />
      )}
    </button>
  )
}

export default SettingsItem
