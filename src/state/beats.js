import * as React from "react";
import { useCounter, useNumber } from "react-use";

const Context = React.createContext();

export const BarsProvider = props => {
  const bars = useBeatsState();

  return <Context.Provider value={bars}>{props.children}</Context.Provider>;
};

const useBeatsState = () => {
  const [count, setCount] = useNumber(16);

  const incrementBarCount = React.useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const decrementBarCount = React.useCallback(() => {
    setCount(count - 1);
  }, [count, setCount]);

  return {
    count,
    incrementBarCount,
    decrementBarCount
  };
};

export const useBars = () => {
  return React.useContext(Context);
};
