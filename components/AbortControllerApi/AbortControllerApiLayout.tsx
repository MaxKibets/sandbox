import { FC } from "react";

const AbortControllerApiLayout: FC<{ onClick: () => void }> = ({ onClick }) => (
  <div>
    <button onClick={onClick}>Abort</button>
  </div>
);

export default AbortControllerApiLayout;
