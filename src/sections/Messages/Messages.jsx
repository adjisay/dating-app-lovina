import "./Messages.scss"
import cn from "classnames"
import users from "@/constants/users"
import conversations from "@/constants/messages"
import TabBar from "@/components/ui/TabBar"
import MessageCard from "@/components/cards/MessageCard"
import ProBanner from "@/components/cards/ProBanner"
import RequestCard from "@/components/cards/RequestCard"
import { useState } from "react"

const tabs = [
  { id: "chats", label: "Чаты" },
  { id: "requests", label: "Заявки" },
]

const unreadCounts = [3, 0, 8, 1]

const requestUsers = users.filter((u) => u.gender === "male").slice(0, 3)

function Messages() {
  const [activeTab, setActiveTab] = useState("chats")

  return (
    <section class="messages">
      <div class="messages__tabs">
        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {activeTab === "chats" && (
        <div class="messages__chat-list">
          {conversations.map((conv, index) => {
            const user = users.find((u) => u.id === conv.userId)
            if (!user) return null
            const lastMsg = conv.messages[conv.messages.length - 1]

            return (
              <div
                key={conv.id}
                class="messages__card-wrapper"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <MessageCard
                  name={user.name}
                  photo={user.photo}
                  lastMessage={lastMsg.text}
                  time={lastMsg.time}
                  unreadCount={unreadCounts[index] || 0}
                  isOnline={user.isOnline}
                  onClick={() => (window.location.href = "/chat")}
                />
              </div>
            )
          })}
        </div>
      )}

      {activeTab === "requests" && (
        <div class="messages__requests-list">
          {requestUsers.map((user, index) => (
            <div
              key={user.id}
              class="messages__card-wrapper"
              style={{ animationDelay: `${index * 0.06}s` }}
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
      )}

      <div class="messages__banner">
        <ProBanner
          title="Получи Pro аккаунт"
          description="Читай сообщения и узнавай, кто тебя лайкнул"
          ctaLabel="Узнать больше"
        />
      </div>
    </section>
  )
}

export default Messages
