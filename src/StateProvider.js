// React context API is like a creating global variables that can be passed around a react app instead of passing prop from grandparent to parent to child and so on!
//Setup data layer
// We need this to track the basket
import React, {createContext, useContext, useReducer} from "react";

//This is the Data Layer
export const StateContext = createContext();

//Now we need a provider so that we can wrap entire app into this data layer

//BUILD A PROVIDER
//initialState= how the data looks like|| Children is referring to
export const StateProvider=({reducer, initialState, children}) => (
<StateContext.Provider value = {useReducer(reducer, initialState)}>
  {children} 
  </StateContext.Provider>
);

//This is how we use it inside of a component

export const useStateValue = () => useContext(StateContext);
