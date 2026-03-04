import "./MyProfile.scss"
import cn from "classnames"
import { useState } from "react"
import ProfilePhotoGrid from "@/components/cards/ProfilePhotoGrid"
import Tag from "@/components/ui/Tag"
import Button from "@/components/ui/Button"

const defaultPhotos = [
  "/src/assets/images/avatars/women/woman-1.jpg",
  "/src/assets/images/avatars/women/woman-2.jpg",
  "/src/assets/images/avatars/women/woman-3.jpg",
  "/src/assets/images/avatars/women/woman-4.jpg",
  "/src/assets/images/avatars/women/woman-5.jpg",
  "/src/assets/images/avatars/women/woman-6.jpg",
]

const allInterests = [
  "Фотография",
  "Путешествия",
  "Музыка",
  "Кулинария",
  "Йога",
  "Книги",
  "Кино",
  "Спорт",
  "Танцы",
  "Дизайн",
  "Кошки",
  "Кофе",
]

const defaultSelected = ["Фотография", "Путешествия", "Музыка"]

function MyProfile() {
  const [selected, setSelected] = useState(defaultSelected)

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <section class="my-profile">
      <div class="my-profile__photos">
        <ProfilePhotoGrid photos={defaultPhotos} />
      </div>

      <div class="my-profile__interests">
        <h3 class="my-profile__section-title">Интересы</h3>
        <div class="my-profile__tags">
          {allInterests.map((interest, index) => (
            <div
              key={interest}
              class="my-profile__tag-wrapper"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <Tag
                label={interest}
                isSelected={selected.includes(interest)}
                onClick={() => toggleInterest(interest)}
              />
            </div>
          ))}
        </div>
      </div>

      <div class="my-profile__action">
        <Button label="Сохранить" variant="primary" size="lg" isFullWidth />
      </div>
    </section>
  )
}

export default MyProfile
