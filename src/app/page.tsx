import Image from "next/image";

import HoverExpand from "@/components/ui/hover-expand"
import ImageCursorTrail from "@/components/ui/image-cursortrail"

import CarouselComponent from "./CarouselComponent";
import CardSwipeComponent from "./CardSwipeComponent";
import HoverExpandComponent from "./HoverExpandComponent";
import ImageCursorTrailComponent from "./ImageCursorTrailComponent";
 
export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-center my-3">Cool Website</h1>
      <CarouselComponent/>
      <CardSwipeComponent />
      <HoverExpandComponent />
      <ImageCursorTrailComponent />
    </div>
  );
}
