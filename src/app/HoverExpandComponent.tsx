import React from 'react'
import HoverExpand from "@/components/ui/hover-expand"

const HoverExpandComponent = () => {
  const hover_images = ["hover_images/1.webp", "hover_images/2.webp", "hover_images/3.jpg", "hover_images/4.jpg", "hover_images/5.jpeg", "hover_images/6.jpg", "hover_images/7.avif", "hover_images/8.avif"]

  return (
    <div className="text-center">
  <h1
    className="text-5xl font-extrabold mb-4 mt-9
    bg-gradient-to-r from-red-500 via-pink-500 to-purple-500
    bg-clip-text text-transparent
    bg-[length:300%_300%] animate-gradient
    drop-shadow-[0_0_15px_rgba(255,0,90,0.8)]"
  >
    Squid Game Hover
  </h1>


  <HoverExpand
    images={hover_images}
    initialSelectedIndex={0}
    maxThumbnails={11}
  />
</div>

  )
}

export default HoverExpandComponent