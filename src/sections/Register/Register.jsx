import "./Register.scss"
import cn from "classnames"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Icon from "@/components/Icon"

const steps = [
  { id: 0, label: "Имя", icon: "profile" },
  { id: 1, label: "Фото", icon: "heart" },
  { id: 2, label: "Локация", icon: "map-pin-line" },
]

const avatarPreviews = [
  "/src/assets/images/avatars/women/woman-2.jpg",
  "/src/assets/images/avatars/women/woman-3.jpg",
  "/src/assets/images/avatars/women/woman-4.jpg",
  "/src/assets/images/avatars/women/woman-5.jpg",
]

function Register() {
  return (
    <section class="register">
      {/* Header with welcome text */}
      <div class="register__header">
        <div class="register__header-inner">
          <h2 class="register__title">
            Добро пожаловать! Создай свой аккаунт{" "}
            <span class="register__heart" aria-hidden="true">
              <Icon name="heart" size={20} className="register__heart-icon" />
            </span>
          </h2>

          {/* Step indicators */}
          <div class="register__steps">
            {steps.map((step, i) => (
              <div
                key={step.id}
                class="register__indicator"
                data-step-indicator
              >
                <div class="register__indicator-circle">
                  <Icon
                    name={step.icon}
                    size={18}
                    className="register__indicator-icon"
                  />
                </div>
                <span class="register__indicator-label">{step.label}</span>
              </div>
            ))}
          </div>

          {/* Avatar previews row */}
          <div class="register__avatars">
            {avatarPreviews.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                class="register__avatar-preview"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Form steps */}
      <div class="register__body">
        <div class="register__form-wrapper">
          {/* Step 1: Name */}
          <div class="register__step register__step--active" data-step>
            <h3 class="register__step-title">Как тебя зовут?</h3>
            <p class="register__step-description">
              Введи свое имя, чтобы другие пользователи могли тебя найти
            </p>
            <div class="register__step-fields">
              <Input
                type="text"
                placeholder="Имя"
                icon="profile"
                name="name"
              />
              <Input
                type="text"
                placeholder="Фамилия"
                icon="profile"
                name="surname"
              />
            </div>
            <div class="register__step-actions">
              <Button
                label="Далее"
                variant="primary"
                size="lg"
                isFullWidth={true}
                data-step-next
              />
            </div>
          </div>

          {/* Step 2: Photos */}
          <div class="register__step" data-step>
            <h3 class="register__step-title">Добавь фотографии</h3>
            <p class="register__step-description">
              Загрузи свои лучшие фотографии, чтобы привлечь внимание
            </p>
            <div class="register__photo-grid">
              {[...Array(6)].map((_, i) => (
                <button
                  key={i}
                  class={cn("register__photo-cell", {
                    "register__photo-cell--main": i === 0,
                  })}
                  type="button"
                >
                  <Icon
                    name="heart-straight-plus"
                    size={24}
                    className="register__photo-cell-icon"
                  />
                </button>
              ))}
            </div>
            <div class="register__step-actions">
              <Button
                label="Назад"
                variant="outline"
                size="md"
                data-step-prev
              />
              <Button
                label="Далее"
                variant="primary"
                size="lg"
                isFullWidth={true}
                data-step-next
              />
            </div>
          </div>

          {/* Step 3: Location */}
          <div class="register__step" data-step>
            <h3 class="register__step-title">Укажи локацию</h3>
            <p class="register__step-description">
              Мы подберем людей рядом с тобой
            </p>
            <div class="register__step-fields">
              <Input
                type="text"
                placeholder="Город"
                icon="map-pin-line"
                name="city"
              />
            </div>
            <div class="register__step-actions">
              <Button
                label="Назад"
                variant="outline"
                size="md"
                data-step-prev
              />
              <Button
                label="Завершить"
                variant="primary"
                size="lg"
                isFullWidth={true}
              />
            </div>
          </div>

          {/* Sign in link */}
          <p class="register__signin-link">
            Уже есть аккаунт?{" "}
            <a href="/sign-in" class="register__signin-anchor">
              Войти
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register
