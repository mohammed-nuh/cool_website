import React from 'react'
import { CardCarousel } from "@/components/ui/card-carousel"

const CarouselComponent = () => {
      const images = [
    { src: "/card/1.png", alt: "Image 1" },
    { src: "/card/2.png", alt: "Image 2" },
    { src: "/card/3.png", alt: "Image 3" },
    { src: "/card/4.png", alt: "Image 4" }
  ]
  return (
    <div className="mb-3">
          <CardCarousel
            images={images}
            autoplayDelay={2000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
  )
}

export default CarouselComponent