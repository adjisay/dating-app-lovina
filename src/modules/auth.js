import BaseComponent from "@/modules/generic/BaseComponent"
import { getAuth, setAuth, clearAuth } from "@/modules/storage"

class Auth extends BaseComponent {
  constructor() {
    super()
    this.state = this.getProxyState({
      isLoggedIn: !!getAuth(),
      user: getAuth(),
    })
    this.init()
  }

  init() {
    this.bindSignInForm()
    this.bindLogout()
  }

  bindSignInForm() {
    const form = document.querySelector("[data-auth-form]")
    if (!form) return

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const username = formData.get("username")
      const password = formData.get("password")

      if (username && password) {
        this.signIn({ username })
      }
    })
  }

  bindLogout() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-logout]")
      if (btn) {
        e.preventDefault()
        this.signOut()
      }
    })
  }

  signIn(userData) {
    setAuth(userData)
    this.state.isLoggedIn = true
    this.state.user = userData
    window.location.href = "/"
  }

  signOut() {
    clearAuth()
    this.state.isLoggedIn = false
    this.state.user = null
    window.location.href = "/sign-in"
  }

  updateUI() {
    const authElements = document.querySelectorAll("[data-auth-visible]")
    authElements.forEach((el) => {
      const shouldShow = el.dataset.authVisible === "true"
      el.style.display = shouldShow === this.state.isLoggedIn ? "" : "none"
    })
  }
}

export default Auth
