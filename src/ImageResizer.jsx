import { useEffect, useRef, useState } from "react"

const ImageResizer = () => {
  const widthRangerRef = useRef(null)
  const heightRangerRef = useRef(null)

  const [size, setSize] = useState({ width: 200, height: 300})
  const [prevSize, setPrevSize] = useState(size)

  const [objectUrl, setObjectUrl] = useState(null)
  const url = `https://picsum.photos//${size.width}/${size.height}`
  
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const widthRanger = widthRangerRef.current
    const heightRanger = heightRangerRef.current

    if (!widthRanger || ! heightRanger) {
      return
    }

    widthRanger.addEventListener("change", (e) => {
      setSize(prev => ({ ...prev, width: e.target.value }))
    })

    heightRanger.addEventListener("change", (e) => {
      setSize(prev => ({ ...prev, height: e.target.value }))
    })

  }, [])

  useEffect(() => {
    if (pending || size === prevSize) {
      return
    }

    setPrevSize(size)
    setPending(true)

    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob)
        setObjectUrl(objectUrl)
        setPending(false)
      })
      .catch(() => {
        alert(`일시적인 오류가 발생했습니다 (${size.width} x ${size.height})`)
        setSize(prevSize)
        setPending(false)

        widthRangerRef.current.value = prevSize.width
        heightRangerRef.current.value = prevSize.height
      })

  }, [size])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Width ({size.width}):
        <input
          ref={widthRangerRef}
          type="range"
          defaultValue={300}
          disabled={pending}
          step={100}
          min={100}
          max={1000}
          className="border rounded px-2 py-1 mt-1 w-24"
        />
      </label>
      <label>
        Height ({size.height}):
        <input
          ref={heightRangerRef}
          type="range"
          defaultValue={400}
          disabled={pending}
          step={100}
          min={100}
          max={1000}
          className="border rounded px-2 py-1 mt-1 w-24"
        />
      </label>
      <p>Image:</p>
      <img style={{width: "fit-content"}} src={objectUrl} />
    </div>
  )
}

export default ImageResizer
