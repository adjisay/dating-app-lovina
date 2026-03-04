import "./RequestCard.scss"
import cn from "classnames"
import Avatar from "@/components/ui/Avatar"
import Button from "@/components/ui/Button"

function RequestCard({
  name = "Имя",
  distance = "0 км",
  photo = "",
  timeAgo = "",
  onAccept,
  onDelete,
}) {
  return (
    <div class="request-card">
      <div class="request-card__left">
        <Avatar src={photo} alt={name} size="md" />
      </div>
      <div class="request-card__content">
        <span class="request-card__name">{name}</span>
        <span class="request-card__meta">
          {distance}
          {timeAgo && <> &middot; {timeAgo}</>}
        </span>
      </div>
      <div class="request-card__actions">
        <Button
          label="Принять"
          variant="accent"
          size="sm"
          onClick={onAccept}
        />
        <Button
          label="Удалить"
          variant="danger-outline"
          size="sm"
          onClick={onDelete}
        />
      </div>
    </div>
  )
}

export default RequestCard
