import Matches from "@/sections/Matches"
import BottomNav from "@/layouts/BottomNav"

export default function MatchesPage() {
  return (
    <>
      <Matches />
      <BottomNav url="/matches" />
    </>
  )
}

export const frontmatter = {
  props: {
    title: "Лайки",
    url: "/matches",
  },
}
