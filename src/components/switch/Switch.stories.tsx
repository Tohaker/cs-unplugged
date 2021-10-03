import { useState } from "react";
import { Panel } from "./Switch.styles";
import { Switch } from "./Switch";

export default {
  title: "Switch",
  component: Switch,
};

export const Default = () => {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  const s1props = { on: switch1, onChange: setSwitch1 };
  const s2props = { on: switch2, onChange: setSwitch2 };

  return (
    <Panel>
      <Switch {...s1props} />
      <Switch {...s2props} />
    </Panel>
  );
};
