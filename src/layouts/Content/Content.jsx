import "./Content.scss"
import cn from "classnames"

function Content({ children, isResetPaddingTop = false, isAuthPage = false }) {
  return (
    <main
      class={cn("content", {
        "content--no-padding-top": isResetPaddingTop,
        "content--auth": isAuthPage,
      })}
    >
      {children}
    </main>
  )
}

export default Content
