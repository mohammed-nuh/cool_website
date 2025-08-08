import React from 'react'
import ImageCursorTrail from "@/components/ui/image-cursortrail"

const ImageCursorTrailComponent = () => {
    const scroll_images = [
  { src: "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Beautiful landscape from Pexels" },
  { src: "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Nature scene from Unsplash" },
  { src: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format", alt: "Urban city view" },
  { src: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format", alt: "Cute animal close-up" },
  { src: "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Mountain view with clear sky" },
  { src: "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Beautiful landscape from Pexels" },
  { src: "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500", alt: "Abstract AI art" },
  { src: "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format", alt: "Snowy mountain scenery" },
  { src: "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500", alt: "Creative AI generated scene" },
  { src: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format", alt: "Sunset beach view" }
];

  return (
    <div className='flex items-center justify-center mb-10'>
        <ImageCursorTrail
        items={scroll_images.map(img => ({ src: img.src, alt: img.alt }))}
        maxNumberOfImages={5}
        distance={25}
        imgClass="sm:w-40 w-28 sm:h-48 h-36  "
        className="max-w-4xl border border-black rounded-lg"
        >
          <article className="relative z-50 flex flex-col items-center justify-center ">
            <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
              Images That Follow the Cursor Cooool Right
            </h1>
          </article>
        </ImageCursorTrail>
    </div>
  )
}

export default ImageCursorTrailComponent