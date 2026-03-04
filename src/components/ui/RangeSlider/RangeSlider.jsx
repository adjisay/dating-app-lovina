import "./RangeSlider.scss"
import { useState, useRef, useEffect, useCallback } from "react"

function RangeSlider({
  label = "",
  min = 0,
  max = 100,
  value = [20, 80],
  unit = "",
  onChange,
}) {
  const [localValue, setLocalValue] = useState(value)
  const trackRef = useRef(null)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const getPercent = useCallback(
    (val) => ((val - min) / (max - min)) * 100,
    [min, max]
  )

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), localValue[1] - 1)
    const newValue = [newMin, localValue[1]]
    setLocalValue(newValue)
    onChange && onChange(newValue)
  }

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), localValue[0] + 1)
    const newValue = [localValue[0], newMax]
    setLocalValue(newValue)
    onChange && onChange(newValue)
  }

  const leftPercent = getPercent(localValue[0])
  const rightPercent = getPercent(localValue[1])

  return (
    <div class="range-slider">
      {label && (
        <div class="range-slider__header">
          <span class="range-slider__label">{label}</span>
          <span class="range-slider__value">
            {localValue[0]}–{localValue[1]} {unit}
          </span>
        </div>
      )}
      <div class="range-slider__track-wrapper">
        <div class="range-slider__track" ref={trackRef}>
          <div
            class="range-slider__fill"
            style={{
              left: `${leftPercent}%`,
              width: `${rightPercent - leftPercent}%`,
            }}
          />
        </div>
        <input
          class="range-slider__input range-slider__input--min"
          type="range"
          min={min}
          max={max}
          value={localValue[0]}
          onInput={handleMinChange}
        />
        <input
          class="range-slider__input range-slider__input--max"
          type="range"
          min={min}
          max={max}
          value={localValue[1]}
          onInput={handleMaxChange}
        />
      </div>
    </div>
  )
}

export default RangeSlider
