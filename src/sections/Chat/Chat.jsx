import "./Chat.scss"
import cn from "classnames"
import users from "@/constants/users"
import conversations from "@/constants/messages"
import Avatar from "@/components/ui/Avatar"
import Icon from "@/components/Icon"

const chatUser = users[0]
const chatMessages = conversations[0].messages

function Chat() {
  return (
    <section class="chat">
      <div class="chat__header">
        <a href="/messages" class="chat__back" aria-label="Назад">
          <Icon name="chevron-left" size={22} />
        </a>
        <Avatar
          src={chatUser.photo}
          alt={chatUser.name}
          size="sm"
          isOnline={chatUser.isOnline}
        />
        <div class="chat__header-info">
          <span class="chat__header-name">{chatUser.name}</span>
          <span class="chat__header-status">
            {chatUser.isOnline ? "В сети" : "Не в сети"}
          </span>
        </div>
      </div>

      <div class="chat__messages" data-chat-messages>
        {chatMessages.map((msg, index) => (
          <div
            key={msg.id}
            class={cn("chat__bubble", {
              "chat__bubble--sent": msg.fromMe,
              "chat__bubble--received": !msg.fromMe,
            })}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <p class="chat__bubble-text">{msg.text}</p>
            <span class="chat__bubble-time">{msg.time}</span>
          </div>
        ))}

        <div class="chat__typing" data-typing-indicator style={{ display: "none" }}>
          <div class="chat__typing-dots">
            <span class="chat__typing-dot" />
            <span class="chat__typing-dot" />
            <span class="chat__typing-dot" />
          </div>
        </div>
      </div>

      <form class="chat__form" data-chat-form>
        <input
          class="chat__input"
          type="text"
          placeholder="Написать сообщение..."
          data-chat-input
          autoComplete="off"
        />
        <button class="chat__send" type="submit" aria-label="Отправить">
          <Icon name="arrow-right" size={20} className="chat__send-icon" />
        </button>
      </form>
    </section>
  )
}

export default Chat
