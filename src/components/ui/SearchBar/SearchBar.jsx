import "./SearchBar.scss"
import Icon from "@/components/Icon"

function SearchBar({ placeholder = "Поиск...", value, onChange }) {
  return (
    <div class="search-bar">
      <Icon name="search" size={20} className="search-bar__icon" />
      <input
        class="search-bar__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  )
}

export default SearchBar
