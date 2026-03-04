import Settings from "@/sections/Settings"
import BottomNav from "@/layouts/BottomNav"

export default function SettingsPage() {
  return (
    <>
      <Settings />
      <BottomNav url="/settings" />
    </>
  )
}

export const frontmatter = {
  props: {
    title: "Настройки",
    url: "/settings",
  },
}
