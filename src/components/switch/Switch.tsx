import { Dispatch, SetStateAction } from "react";
import {
  Panel,
  Button,
  Light,
  Dots,
  Characters,
  Shine,
  Shadow,
} from "./Switch.styles";

export type SwitchProps = {
  on: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
};

export const Switch = ({ on, onChange }: SwitchProps) => {
  return (
    <Panel>
      <input type={"checkbox"} checked={on} onChange={() => onChange(!on)} />
      <Button>
        <Light />
        <Dots />
        <Characters />
        <Shine />
        <Shadow />
      </Button>
    </Panel>
  );
};
