import { useEffect, useRef, useState } from "react"

const ImageResizer = () => {
  const widthRangerRef = useRef(null)
  const heightRangerRef = useRef(null)

  const [size, setSize] = useState({ width: 200, height: 300 })
  const [prevSize, setPrevSize] = useState(size)

  const [objectUrl, setObjectUrl] = useState(null)
  const url = `https://picsum.photos//${size.width}/${size.height}`

  const [pending, setPending] = useState(false)

  useEffect(() => {
    const widthRanger = widthRangerRef.current
    const heightRanger = heightRangerRef.current

    // TODO1: range 선택 element가 존재하지 않을 경우 return
    // TODO2: `addEventListener`를 사용하여 이미지 크기 업데이트
    // TODO3: `removeEventLisenter`를 사용하여 이벤트 리스너 제거
  }, [])

  useEffect(() => {
    // TODO4: 
    //    이미지를 로드 중이거나 ,
    //    prevSize와 size가 동일한 객체일 경우 return

    // TODO5: 이미지 크기를 롤백할 수 있도록 임시 저장
    // TODO6: 이미지 로드중임을 나타내는 상태 업데이트

    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob)
        setObjectUrl(objectUrl)
        setPending(false)
      })
      .catch(() => {
        alert(`일시적인 오류가 발생했습니다 (${size.width} x ${size.height})`)

        // TODO7: 이미지 크기 롤백
      })

  }, []) // TODO8: 이미지 크기가 변할 때마다 effect 실행

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
      <img style={{ width: "fit-content" }} src={objectUrl} />
    </div>
  )
}

export default ImageResizer
