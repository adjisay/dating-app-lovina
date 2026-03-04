import Discover from "@/sections/Discover"
import BottomNav from "@/layouts/BottomNav"

export default function DiscoverPage() {
  return (
    <>
      <Discover />
      <BottomNav url="/discover" />
    </>
  )
}

export const frontmatter = {
  props: {
    title: "Поиск",
    url: "/discover",
  },
}
