import "./Matches.scss"
import cn from "classnames"
import users from "@/constants/users"
import Icon from "@/components/Icon"

const matchedUsers = users.slice(0, 6)

function Matches() {
  return (
    <section class="matches">
      <div class="matches__grid">
        {matchedUsers.map((user, index) => (
          <a
            key={user.id}
            href="/profile"
            class="matches__card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div class="matches__card-photo">
              <img
                class="matches__card-image"
                src={user.photo}
                alt={user.name}
                loading="lazy"
              />
              <div class="matches__card-overlay" />
              <button
                class="matches__card-heart"
                type="button"
                aria-label="Лайк"
                onClick={(e) => e.preventDefault()}
              >
                <Icon name="heart" size={16} className="matches__heart-icon" />
              </button>
            </div>
            <div class="matches__card-info">
              <span class="matches__card-name">
                {user.name}, {user.age}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Matches
