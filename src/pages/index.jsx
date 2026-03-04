import Dashboard from "@/sections/Dashboard"
import BottomNav from "@/layouts/BottomNav"

export default function DashboardPage() {
  return (
    <>
      <Dashboard />
      <BottomNav url="/" />
    </>
  )
}

export const frontmatter = {
  props: {
    title: "Главная",
    url: "/",
  },
}
