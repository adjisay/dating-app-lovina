import "./Avatar.scss"
import cn from "classnames"
import Badge from "@/components/ui/Badge"

function Avatar({
  src,
  alt = "",
  size = "md",
  hasBadge = false,
  badgeCount,
  isOnline = false,
}) {
  return (
    <div class={cn("avatar", `avatar--${size}`)}>
      <img class="avatar__image" src={src} alt={alt} loading="lazy" />
      {hasBadge && badgeCount > 0 && (
        <div class="avatar__badge">
          <Badge count={badgeCount} variant="primary" />
        </div>
      )}
      {isOnline && <span class="avatar__online" />}
    </div>
  )
}

export default Avatar
