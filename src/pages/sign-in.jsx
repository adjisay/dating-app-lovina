import SignIn from "@/sections/SignIn"

export default function SignInPage() {
  return <SignIn />
}

export const frontmatter = {
  props: {
    title: "Вход",
    url: "/sign-in",
  },
}
