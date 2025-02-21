import Heading from "@/components/ui/Heading";
import AbortControllerApi from "@/components/AbortControllerApi/AbortControllerApi";

const AbortControllerPage = () => {
  return (
    <>
      <Heading>AbortController API</Heading>
      <p>Click somewhere on page to trigger click event</p>
      <AbortControllerApi />
    </>
  );
};

export default AbortControllerPage;
