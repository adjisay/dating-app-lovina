import Register from "@/sections/Register"

export default function RegisterPage() {
  return <Register />
}

export const frontmatter = {
  props: {
    title: "Регистрация",
    url: "/register",
  },
}
