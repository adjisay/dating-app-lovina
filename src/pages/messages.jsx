import Messages from "@/sections/Messages"
import BottomNav from "@/layouts/BottomNav"

export default function MessagesPage() {
  return (
    <>
      <Messages />
      <BottomNav url="/messages" />
    </>
  )
}

export const frontmatter = {
  props: {
    title: "Сообщения",
    url: "/messages",
  },
}
