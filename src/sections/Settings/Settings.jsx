import "./Settings.scss"
import cn from "classnames"
import { useState } from "react"
import RangeSlider from "@/components/ui/RangeSlider"
import Toggle from "@/components/ui/Toggle"
import SettingsItem from "@/components/ui/SettingsItem"
import Button from "@/components/ui/Button"

function Settings() {
  const [ageRange, setAgeRange] = useState([21, 30])
  const [distanceRange, setDistanceRange] = useState([1, 50])
  const [notifications, setNotifications] = useState(true)

  return (
    <section class="settings">
      <div class="settings__sliders">
        <div class="settings__slider-item">
          <RangeSlider
            label="Возраст"
            min={18}
            max={60}
            value={ageRange}
            unit="лет"
            onChange={setAgeRange}
          />
        </div>
        <div class="settings__slider-item">
          <RangeSlider
            label="Расстояние"
            min={1}
            max={100}
            value={distanceRange}
            unit="км"
            onChange={setDistanceRange}
          />
        </div>
      </div>

      <div class="settings__toggle-row">
        <Toggle
          label="Уведомления"
          isChecked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </div>

      <hr class="settings__divider" />

      <div class="settings__manage">
        <h3 class="settings__section-title">Управление аккаунтом</h3>
        <div class="settings__manage-list">
          <SettingsItem
            label="Изменить профиль"
            icon="edit"
            hasArrow
            onClick={() => (window.location.href = "/my-profile")}
          />
          <SettingsItem
            label="Изменить email"
            icon="mail"
            hasArrow
          />
          <SettingsItem
            label="Изменить пароль"
            icon="lock"
            hasArrow
          />
        </div>
      </div>

      <div class="settings__logout" data-logout>
        <Button
          label="Выйти"
          variant="danger"
          size="lg"
          isFullWidth
        />
      </div>
    </section>
  )
}

export default Settings
