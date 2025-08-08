import CarouselComponent from "./CarouselComponent";
import CardSwipeComponent from "./CardSwipeComponent";
import HoverExpandComponent from "./HoverExpandComponent";
import ImageCursorTrailComponent from "./ImageCursorTrailComponent";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center my-8 gradient-glow">
        Cool Website By Nuh
        </h1>
       <CarouselComponent />
      <CardSwipeComponent />
      <HoverExpandComponent />
      <ImageCursorTrailComponent />

    </div>
  );
}
