import * as React from 'react'

export const createContextualStore = (useState) => {
  const Context = React.createContext()

  const Provider = (props) => {
    const value = useState()

    return <Context.Provider value={value}>{props.children}</Context.Provider>
  }

  const useStore = () => {
    return React.useContext(Context)
  }

  return {
    Context,
    Provider,
    useStore,
  }
}
