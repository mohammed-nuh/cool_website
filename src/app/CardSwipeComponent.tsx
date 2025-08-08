import React from 'react'
import { CardSwipe } from "@/components/ui/card-swipe"

const CardSwipeComponent = () => {
      const images = [
    { src: "/card/1.png", alt: "Image 1" },
    { src: "/card/2.png", alt: "Image 2" },
    { src: "/card/3.png", alt: "Image 3" },
    { src: "/card/4.png", alt: "Image 4" }
  ]
  return (
        <div className="w-full">
          <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
        </div>
  )
}

export default CardSwipeComponent