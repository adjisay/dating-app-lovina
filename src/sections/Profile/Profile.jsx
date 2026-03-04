import "./Profile.scss"
import cn from "classnames"
import users from "@/constants/users"
import Icon from "@/components/Icon"
import Tag from "@/components/ui/Tag"
import Button from "@/components/ui/Button"

const defaultUser = users[1]

function Profile({ user = defaultUser }) {
  return (
    <section class="profile">
      <div class="profile__photo-wrapper">
        <img
          class="profile__photo"
          src={user.photo}
          alt={user.name}
          loading="lazy"
        />
        <div class="profile__photo-overlay" />
      </div>

      <div class="profile__body">
        <h2 class="profile__name">
          {user.name}, {user.age}
        </h2>

        <div class="profile__location">
          <Icon name="map-pin" size={16} className="profile__location-icon" />
          <span class="profile__location-text">{user.distance}</span>
        </div>

        <p class="profile__bio">{user.bio}</p>

        {user.interests && user.interests.length > 0 && (
          <div class="profile__interests">
            {user.interests.map((interest) => (
              <Tag key={interest} label={interest} />
            ))}
          </div>
        )}

        <div class="profile__actions">
          <Button
            label="Отправить заявку"
            variant="outline"
            size="lg"
            isFullWidth
          />
          <Button
            label="Лайк"
            variant="primary"
            size="lg"
            icon="heart"
            isFullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Profile
