import * as React from "react";
import { useCounter, useNumber } from "react-use";

const Context = React.createContext();

export const BPMProvider = props => {
  const bars = useBPMState();

  return <Context.Provider value={bars}>{props.children}</Context.Provider>;
};

const useBPMState = () => {
  const [bpm, updateBPM] = useNumber(120);

  const setBPM = React.useCallback(
    (bpm = 120) => {
      updateBPM(bpm);
    },
    [updateBPM]
  );

  return {
    bpm,
    setBPM
  };
};

export const useBPM = () => {
  return React.useContext(Context);
};
