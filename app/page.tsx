import Image from "next/image";

import AnimatedFrame from "@/components/AnimatedFrame/AnimatedFrame";
import image5 from "@/public/5.jpg";
import image4 from "@/public/4.jpg";

import { DIRECTION } from "@/constants/shared";

export default function Home() {
  return (
    <div>
      <AnimatedFrame direction={DIRECTION.RIGHT}>
        <Image src={image5} alt="Image 5" width={500} height={500} />
      </AnimatedFrame>
      <Image src={image4} alt="Image 4" width={500} height={500} />
    </div>
  );
}
