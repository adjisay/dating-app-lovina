import "./TabBar.scss"
import cn from "classnames"

function TabBar({ tabs = [], activeTab = "", onTabChange }) {
  return (
    <div class="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          class={cn("tab-bar__tab", {
            "tab-bar__tab--active": activeTab === tab.id,
          })}
          type="button"
          onClick={() => onTabChange && onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default TabBar
