import "./Discover.scss"
import users from "@/constants/users"
import SwipeCard from "@/components/cards/SwipeCard"

const discoverUsers = users.filter((u) => u.gender === "female")

function Discover() {
  return (
    <section class="discover">
      <div class="discover__cards">
        {discoverUsers.map((user, index) => (
          <div
            key={user.id}
            class="discover__card-item"
            data-swipe-card
            data-user-id={user.id}
            style={{ zIndex: discoverUsers.length - index }}
          >
            <SwipeCard
              name={user.name}
              age={user.age}
              distance={user.distance}
              photo={user.photo}
              bio={user.bio}
              interests={user.interests}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Discover
