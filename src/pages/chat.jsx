import Chat from "@/sections/Chat"

export default function ChatPage() {
  return <Chat />
}

export const frontmatter = {
  props: {
    title: "Чат",
    url: "/chat",
  },
}
