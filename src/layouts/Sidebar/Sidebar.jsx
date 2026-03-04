import "./Sidebar.scss"
import cn from "classnames"
import Icon from "@/components/Icon"

const NAV_ITEMS = [
  { href: "/", icon: "home", label: "Главная" },
  { href: "/discover", icon: "discover", label: "Поиск" },
  { href: "/messages", icon: "message", label: "Сообщения" },
  { href: "/matches", icon: "heart-straight", label: "Лайки" },
  { href: "/my-profile", icon: "profile", label: "Профиль" },
]

function Sidebar({ url = "/" }) {
  const isActive = (href) => {
    if (href === "/") return url === "/"
    return url.startsWith(href)
  }

  return (
    <aside class="sidebar">
      <div class="sidebar__logo">
        <Icon name="heart" size={28} className="sidebar__logo-icon" />
      </div>

      <nav class="sidebar__nav">
        <ul class="sidebar__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} class="sidebar__item">
              <a
                href={item.href}
                class={cn("sidebar__link", {
                  "sidebar__link--active": isActive(item.href),
                })}
                title={item.label}
              >
                <Icon
                  name={item.icon}
                  size={24}
                  className="sidebar__icon"
                />
                <span class="sidebar__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
