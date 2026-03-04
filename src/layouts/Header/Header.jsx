import "./Header.scss"
import cn from "classnames"
import Icon from "@/components/Icon"
import logoSvg from "@/assets/images/lovina-logo.svg"

function Header({ url, isFixed = false, title, showBack = false, onBack }) {
  const isAuthPage = url === "/sign-in" || url === "/register"

  return (
    <header
      class={cn("header", {
        "header--fixed": isFixed,
        "header--auth": isAuthPage,
      })}
    >
      <div class="header__inner">
        {showBack ? (
          <a href="/" class="header__back" onClick={onBack}>
            <Icon name="arrow-left" size={20} />
          </a>
        ) : (
          <div class="header__location">
            <Icon
              name="map-pin-line"
              size={18}
              className="header__location-icon"
            />
            <span class="header__location-text">Лондон</span>
          </div>
        )}

        {title ? (
          <h1 class="header__title">{title}</h1>
        ) : (
          <a href="/" class="header__logo">
            <Icon name="heart" size={22} className="header__logo-heart" />
            <span class="header__logo-text">Lovina</span>
          </a>
        )}

        <div class="header__right">
          <a href="/my-profile" class="header__avatar-link">
            <img
              src="/src/assets/images/avatars/women/woman-1.jpg"
              alt="Профиль"
              class="header__avatar"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
