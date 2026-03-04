import MyProfile from "@/sections/MyProfile"
import BottomNav from "@/layouts/BottomNav"

export default function MyProfilePage() {
  return (
    <>
      <MyProfile />
      <BottomNav url="/my-profile" />
    </>
  )
}

export const frontmatter = {
  props: {
    title: "Мой профиль",
    url: "/my-profile",
  },
}
