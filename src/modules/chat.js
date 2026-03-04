import BaseComponent from "@/modules/generic/BaseComponent"
import randomReply from "@/utils/randomReply"

class Chat extends BaseComponent {
  constructor() {
    super()
    this.state = this.getProxyState({
      messages: [],
      isTyping: false,
    })
    this.init()
  }

  init() {
    this.bindChatForm()
  }

  bindChatForm() {
    const form = document.querySelector("[data-chat-form]")
    if (!form) return

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const input = form.querySelector("[data-chat-input]")
      const text = input.value.trim()

      if (!text) return

      this.addMessage(text, true)
      input.value = ""
      this.simulateReply()
    })
  }

  addMessage(text, fromMe = false) {
    const container = document.querySelector("[data-chat-messages]")
    if (!container) return

    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`

    const messageEl = document.createElement("div")
    messageEl.className = `chat__message chat__message--${fromMe ? "sent" : "received"}`
    messageEl.innerHTML = `
      <div class="chat__bubble">${text}</div>
      <span class="chat__time">${time}</span>
    `

    container.appendChild(messageEl)
    container.scrollTop = container.scrollHeight
  }

  simulateReply() {
    const indicator = document.querySelector("[data-typing-indicator]")
    if (indicator) {
      indicator.style.display = ""
      this.state.isTyping = true
    }

    const delay = 1000 + Math.random() * 2000

    setTimeout(() => {
      if (indicator) {
        indicator.style.display = "none"
        this.state.isTyping = false
      }
      this.addMessage(randomReply(), false)
    }, delay)
  }

  updateUI() {
    // State-driven updates handled inline
  }
}

export default Chat
