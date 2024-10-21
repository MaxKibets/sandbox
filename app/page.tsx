import Image from "next/image";

import Carousel from "@/components/carousel";

import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import image4 from "@/public/4.jpg";
import image5 from "@/public/5.jpg";

// const mockData = {
//   title: "Lorem ipsum",
//   description:
//     "Deleniti debitis consequuntur pariatur. Esse aut itaque necessitatibus porro perferendis dignissimos? Aperiam porro quos labore recusandae voluptate voluptatem molestias dolore fugit omnis.",
// };

export default function Home() {
  return (
    <div>
      <Carousel>
        <Image src={image1} alt="Image 1" fill />
        <Image src={image2} alt="Image 2" fill />
        <Image src={image3} alt="Image 3" fill />
        <Image src={image4} alt="Image 4" fill />
        <Image src={image5} alt="Image 5" fill />

        {/* {Array(3)
          .fill(mockData)
          .map(({ title, description }, index) => (
            <div key={index}>
              <h1>{`${title} ${index}`}</h1>
              <p>{description}</p>
            </div>
          ))} */}
      </Carousel>
    </div>
  );
}
