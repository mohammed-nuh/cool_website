import React from 'react'
import HoverExpand from "@/components/ui/hover-expand"

const HoverExpandComponent = () => {
  const hover_images = ["hover_images/1.webp", "hover_images/2.webp", "hover_images/3.jpg", "hover_images/4.jpg", "hover_images/5.jpeg", "hover_images/6.jpg", "hover_images/7.avif", "hover_images/8.avif"]

  return (
    <div>
        <HoverExpand
              images={hover_images}
              initialSelectedIndex={0}
              thumbnailHeight={200}
              modalImageSize={400}
              maxThumbnails={11}
        />
    </div>
  )
}

export default HoverExpandComponent