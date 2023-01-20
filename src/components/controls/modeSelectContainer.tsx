import React, { ReactNode } from "react";
import CustomLocalSelect from "../custom-input-fields/customLocalSelect";

type ModeSelectContainerProp = {
  modes: { id: number; val: string }[];
};

export default function ModeSelectContainer(props: ModeSelectContainerProp) {
  return <CustomLocalSelect />;
}
