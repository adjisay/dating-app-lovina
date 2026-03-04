import "./SwipeCard.scss"
import cn from "classnames"
import Icon from "@/components/Icon"
import Tag from "@/components/ui/Tag"
import Button from "@/components/ui/Button"

function SwipeCard({
  name = "Имя",
  age = 0,
  distance = "0 км",
  photo = "",
  bio = "",
  interests = [],
  onLike,
  onDislike,
  onSuperLike,
}) {
  return (
    <div class="swipe-card">
      <div class="swipe-card__photo-wrapper">
        <img
          class="swipe-card__photo"
          src={photo}
          alt={name}
          loading="lazy"
        />
        <div class="swipe-card__overlay" />
        <div class="swipe-card__info">
          <h3 class="swipe-card__name">
            {name}, {age}
          </h3>
          <div class="swipe-card__distance">
            <Icon name="map-pin" size={14} className="swipe-card__pin-icon" />
            <span>{distance}</span>
          </div>
        </div>
      </div>

      {bio && <p class="swipe-card__bio">{bio}</p>}

      {interests.length > 0 && (
        <div class="swipe-card__interests">
          {interests.map((interest, index) => (
            <Tag key={index} label={interest} />
          ))}
        </div>
      )}

      <div class="swipe-card__actions">
        <Button
          label="Отправить заявку"
          variant="outline"
          size="md"
          onClick={onDislike}
        />
        <Button
          label="Лайк"
          variant="accent"
          size="md"
          icon="heart"
          onClick={onLike}
        />
      </div>
    </div>
  )
}

export default SwipeCard
