import "./MatchCard.scss"
import cn from "classnames"
import Avatar from "@/components/ui/Avatar"
import Icon from "@/components/Icon"

function MatchCard({
  name = "Имя",
  age = 0,
  distance = "0 км",
  photo = "",
  onLike,
}) {
  return (
    <div class="match-card">
      <div class="match-card__left">
        <Avatar src={photo} alt={name} size="md" />
      </div>
      <div class="match-card__content">
        <span class="match-card__name">
          {name}, {age}
        </span>
        <span class="match-card__distance">{distance}</span>
      </div>
      <button
        class="match-card__like-btn"
        type="button"
        onClick={onLike}
        aria-label="Лайк"
      >
        <Icon name="heart" size={18} className="match-card__heart-icon" />
      </button>
    </div>
  )
}

export default MatchCard
