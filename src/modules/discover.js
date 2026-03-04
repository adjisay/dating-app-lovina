import BaseComponent from "@/modules/generic/BaseComponent"
import { addLike, addRequest } from "@/modules/storage"

class Discover extends BaseComponent {
  constructor() {
    super()
    this.state = this.getProxyState({
      currentIndex: 0,
      isAnimating: false,
    })
    this.init()
  }

  init() {
    this.bindSwipeActions()
  }

  bindSwipeActions() {
    document.addEventListener("click", (e) => {
      if (this.state.isAnimating) return

      const likeBtn = e.target.closest("[data-action='like']")
      const dislikeBtn = e.target.closest("[data-action='dislike']")
      const superLikeBtn = e.target.closest("[data-action='super-like']")

      if (likeBtn) this.handleLike()
      if (dislikeBtn) this.handleDislike()
      if (superLikeBtn) this.handleSuperLike()
    })
  }

  handleLike() {
    const card = document.querySelector("[data-swipe-card]")
    if (!card) return

    const userId = Number(card.dataset.userId)
    addLike(userId)
    this.animateSwipe(card, "right")
  }

  handleDislike() {
    const card = document.querySelector("[data-swipe-card]")
    if (!card) return

    this.animateSwipe(card, "left")
  }

  handleSuperLike() {
    const card = document.querySelector("[data-swipe-card]")
    if (!card) return

    const userId = Number(card.dataset.userId)
    addLike(userId)
    addRequest(userId)
    this.animateSwipe(card, "up")
  }

  animateSwipe(card, direction) {
    this.state.isAnimating = true

    const animations = {
      left: "swipe-card--swipe-left",
      right: "swipe-card--swipe-right",
      up: "swipe-card--swipe-up",
    }

    card.classList.add(animations[direction])

    card.addEventListener(
      "animationend",
      () => {
        this.state.currentIndex++
        this.state.isAnimating = false
      },
      { once: true },
    )
  }

  updateUI() {
    const cards = document.querySelectorAll("[data-swipe-card]")
    cards.forEach((card, index) => {
      if (index < this.state.currentIndex) {
        card.style.display = "none"
      } else if (index === this.state.currentIndex) {
        card.style.display = ""
        card.classList.remove(
          "swipe-card--swipe-left",
          "swipe-card--swipe-right",
          "swipe-card--swipe-up",
        )
      } else {
        card.style.display = "none"
      }
    })
  }
}

export default Discover
