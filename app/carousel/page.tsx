import Image from "next/image";

import Carousel from "@/components/Carousel";
import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import image4 from "@/public/4.jpg";
import image5 from "@/public/5.jpg";

const CarouselPage = () => (
  <Carousel>
    <Image src={image1} alt="Image 1" fill />
    <Image src={image2} alt="Image 2" fill />
    <Image src={image3} alt="Image 3" fill />
    <Image src={image4} alt="Image 4" fill />
    <Image src={image5} alt="Image 5" fill />
  </Carousel>
);

export default CarouselPage;
