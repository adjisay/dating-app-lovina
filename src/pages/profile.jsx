import Profile from "@/sections/Profile"
import BottomNav from "@/layouts/BottomNav"

export default function ProfilePage() {
  return (
    <>
      <Profile />
      <BottomNav url="/" />
    </>
  )
}

export const frontmatter = {
  props: {
    title: "Профиль",
    url: "/profile",
  },
}
