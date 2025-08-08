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
