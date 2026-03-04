import "./ProBanner.scss"
import Button from "@/components/ui/Button"

function ProBanner({
  title = "Бесплатные суперлайки",
  description = "Сегодня только — получи Pro аккаунт бесплатно",
  ctaLabel = "Узнать больше",
  onClick,
}) {
  return (
    <div class="pro-banner">
      <div class="pro-banner__content">
        <h3 class="pro-banner__title">{title}</h3>
        <p class="pro-banner__description">{description}</p>
      </div>
      <Button label={ctaLabel} variant="outline" size="sm" onClick={onClick} />
    </div>
  )
}

export default ProBanner
