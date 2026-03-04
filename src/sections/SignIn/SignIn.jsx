import "./SignIn.scss"
import cn from "classnames"
import cloud from "@/assets/images/illustration/cloud.svg"
import balloon from "@/assets/images/illustration/balloon.svg"
import mask from "@/assets/images/illustration/mask.svg"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Toggle from "@/components/ui/Toggle"
import Icon from "@/components/Icon"

const clouds = [
  { width: 80, top: "10%", left: "5%", flipX: false, delay: "0s" },
  { width: 55, top: "20%", left: "70%", flipX: true, delay: "1.2s" },
  { width: 65, top: "35%", left: "20%", flipX: false, delay: "0.6s" },
  { width: 45, top: "15%", left: "50%", flipX: true, delay: "2s" },
  { width: 70, top: "40%", left: "75%", flipX: false, delay: "0.8s" },
  { width: 50, top: "5%", left: "35%", flipX: true, delay: "1.6s" },
]

const socialLinks = [
  { icon: "facebook-logo", label: "Facebook" },
  { icon: "telegram-logo", label: "Telegram" },
]

function SignIn() {
  return (
    <section class="sign-in">
      <div class="sign-in__hero">
        {clouds.map((c, i) => (
          <img
            key={i}
            src={cloud}
            class="sign-in__cloud"
            alt=""
            aria-hidden="true"
            style={{
              width: c.width + "px",
              top: c.top,
              left: c.left,
              transform: c.flipX ? "scaleX(-1)" : "none",
              animationDelay: c.delay,
            }}
          />
        ))}

        <div class="sign-in__balloon-wrapper">
          <img
            src={balloon}
            class="sign-in__balloon"
            alt=""
            aria-hidden="true"
          />
        </div>

        <img
          src={mask}
          class="sign-in__mask"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div class="sign-in__body">
        <div class="sign-in__content">
          <h2 class="sign-in__title">Войти</h2>
          <p class="sign-in__subtitle">Добро пожаловать</p>

          <div class="sign-in__social">
            {socialLinks.map((s, i) => (
              <button
                key={i}
                class="sign-in__social-btn"
                type="button"
                aria-label={s.label}
              >
                <Icon name={s.icon} size={24} />
              </button>
            ))}
          </div>

          <form class="sign-in__form" data-auth-form>
            <div class="sign-in__fields">
              <Input
                type="text"
                placeholder="Имя пользователя"
                icon="profile"
                name="username"
              />
              <Input
                type="password"
                placeholder="Пароль"
                icon="heart"
                name="password"
              />
            </div>

            <div class="sign-in__options">
              <Toggle label="Запомнить" />
              <a href="#" class="sign-in__forgot">
                Забыли пароль?
              </a>
            </div>

            <Button
              label="Войти"
              variant="primary"
              size="lg"
              isFullWidth={true}
            />
          </form>

          <p class="sign-in__register-link">
            Нет аккаунта?{" "}
            <a href="/register" class="sign-in__register-anchor">
              Зарегистрируйся
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignIn
