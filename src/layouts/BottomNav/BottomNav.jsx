import "./BottomNav.scss"
import cn from "classnames"
import Icon from "@/components/Icon"

const NAV_ITEMS = [
  { href: "/", icon: "home", label: "Главная" },
  { href: "/discover", icon: "discover", label: "Поиск" },
  { href: "/messages", icon: "message", label: "Сообщения" },
  { href: "/matches", icon: "heart-straight", label: "Лайки" },
  { href: "/my-profile", icon: "profile", label: "Профиль" },
]

function BottomNav({ url = "/" }) {
  const isActive = (href) => {
    if (href === "/") return url === "/"
    return url.startsWith(href)
  }

  return (
    <nav class="bottom-nav">
      <ul class="bottom-nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.href} class="bottom-nav__item">
            <a
              href={item.href}
              class={cn("bottom-nav__link", {
                "bottom-nav__link--active": isActive(item.href),
              })}
            >
              <Icon
                name={item.icon}
                size={22}
                className="bottom-nav__icon"
              />
              <span class="bottom-nav__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BottomNav
