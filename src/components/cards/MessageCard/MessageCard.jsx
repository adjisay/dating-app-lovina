import "./MessageCard.scss"
import cn from "classnames"
import Avatar from "@/components/ui/Avatar"

function MessageCard({
  name = "Пользователь",
  photo,
  lastMessage = "",
  time = "",
  unreadCount = 0,
  isOnline = false,
  onClick,
}) {
  const hasUnread = unreadCount > 0

  return (
    <div class={cn("message-card", { "message-card--unread": hasUnread })} onClick={onClick}>
      <div class="message-card__avatar">
        <Avatar src={photo} alt={name} size="md" isOnline={isOnline} />
      </div>
      <div class="message-card__content">
        <span class={cn("message-card__name", { "message-card__name--bold": hasUnread })}>
          {name}
        </span>
        <p class="message-card__text">{lastMessage}</p>
      </div>
      <div class="message-card__meta">
        <span class="message-card__time">{time}</span>
        {hasUnread && (
          <span class="message-card__badge">{unreadCount > 99 ? "99+" : unreadCount}</span>
        )}
      </div>
    </div>
  )
}

export default MessageCard
