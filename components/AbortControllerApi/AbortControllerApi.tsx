"use client";

import { FC } from "react";

import AbortControllerApiLayout from "./AbortControllerApiLayout";
import { useClickListener } from "./hooks";

const AbortControllerApi: FC = () => {
  const controller = new AbortController();

  useClickListener();

  return (
    <AbortControllerApiLayout
      onClick={() => {
        console.log("btn click");
        controller.abort();
      }}
    />
  );
};

export default AbortControllerApi;
