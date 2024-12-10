import { FC } from "react";

import Heading from "@/components/ui/Heading";
import VirtualizedList from "@/components/VirtualizedList";

const VirtualizationPage: FC = () => {
  return (
    <>
      <Heading>Virtualization</Heading>
      <p>This page demonstrates the virtualization of a long list of items.</p>
      <VirtualizedList />
    </>
  );
};

export default VirtualizationPage;
