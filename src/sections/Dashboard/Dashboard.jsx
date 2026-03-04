import "./Dashboard.scss"
import cn from "classnames"
import users from "@/constants/users"
import SearchBar from "@/components/ui/SearchBar"
import ProBanner from "@/components/cards/ProBanner"
import MatchCard from "@/components/cards/MatchCard"
import RequestCard from "@/components/cards/RequestCard"

const femaleUsers = users.filter((u) => u.gender === "female").slice(0, 4)
const maleUsers = users.filter((u) => u.gender === "male").slice(0, 2)

function Dashboard() {
  return (
    <section class="dashboard">
      <div class="dashboard__search">
        <SearchBar placeholder="Поиск..." />
      </div>

      <div class="dashboard__banner">
        <ProBanner
          title="Суперлайки доступны бесплатно"
          description="Только сегодня — попробуй Pro аккаунт бесплатно"
          ctaLabel="Узнать"
        />
      </div>

      <div class="dashboard__section">
        <div class="dashboard__section-header">
          <h3 class="dashboard__section-title">Недавние совпадения</h3>
          <a href="#" class="dashboard__filter-link">
            Фильтр
          </a>
        </div>
        <div class="dashboard__matches">
          {femaleUsers.map((user, index) => (
            <div
              key={user.id}
              class="dashboard__card-wrapper"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <MatchCard
                name={user.name}
                age={user.age}
                distance={user.distance}
                photo={user.photo}
              />
            </div>
          ))}
        </div>
      </div>

      <div class="dashboard__section">
        <div class="dashboard__section-header">
          <h3 class="dashboard__section-title">Последние заявки</h3>
          <a href="#" class="dashboard__filter-link">
            Фильтр
          </a>
        </div>
        <div class="dashboard__requests">
          {maleUsers.map((user, index) => (
            <div
              key={user.id}
              class="dashboard__card-wrapper"
              style={{ animationDelay: `${(femaleUsers.length + index) * 0.08}s` }}
            >
              <RequestCard
                name={user.name}
                distance={user.distance}
                photo={user.photo}
                timeAgo="3 часа назад"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
