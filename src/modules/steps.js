import BaseComponent from "@/modules/generic/BaseComponent"

class Steps extends BaseComponent {
  constructor() {
    super()
    this.state = this.getProxyState({
      currentStep: 0,
      totalSteps: 3,
    })
    this.init()
  }

  init() {
    this.bindNavigation()
  }

  bindNavigation() {
    document.addEventListener("click", (e) => {
      const nextBtn = e.target.closest("[data-step-next]")
      const prevBtn = e.target.closest("[data-step-prev]")

      if (nextBtn && this.state.currentStep < this.state.totalSteps - 1) {
        this.state.currentStep++
      }

      if (prevBtn && this.state.currentStep > 0) {
        this.state.currentStep--
      }
    })
  }

  updateUI() {
    const steps = document.querySelectorAll("[data-step]")
    const indicators = document.querySelectorAll("[data-step-indicator]")

    steps.forEach((step, index) => {
      const isActive = index === this.state.currentStep
      const isPast = index < this.state.currentStep

      step.classList.toggle("register__step--active", isActive)
      step.classList.toggle("register__step--past", isPast)
      step.style.display = isActive ? "" : "none"
    })

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle(
        "register__indicator--active",
        index === this.state.currentStep,
      )
      indicator.classList.toggle(
        "register__indicator--done",
        index < this.state.currentStep,
      )
    })
  }
}

export default Steps
