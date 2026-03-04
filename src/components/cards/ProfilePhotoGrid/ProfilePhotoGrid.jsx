import "./ProfilePhotoGrid.scss"
import cn from "classnames"
import Icon from "@/components/Icon"

function ProfilePhotoGrid({ photos = [] }) {
  const slots = 6
  const items = Array.from({ length: slots }, (_, i) => photos[i] || null)

  return (
    <div class="photo-grid">
      {items.map((photo, index) => (
        <div
          key={index}
          class={cn("photo-grid__item", {
            "photo-grid__item--main": index === 0,
            "photo-grid__item--empty": !photo,
          })}
        >
          {photo ? (
            <img src={photo} alt={`Фото ${index + 1}`} class="photo-grid__image" />
          ) : (
            <div class="photo-grid__placeholder">
              <Icon name="heart-straight-plus" size={24} className="photo-grid__placeholder-icon" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProfilePhotoGrid
