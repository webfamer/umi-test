import React, { createContext, useReducer } from 'react';

type Dispatch<ActionType> = (value: ActionType) => void;
interface ActionType {
  type: string;
  color: string;
}
interface Component {
  route?: any;
  match?: any;
  location?: any;
  computedMatch?: any;
  children?: any;
  staticContext?: any;
}

const colorDispatch: Dispatch<ActionType> = (value: ActionType) => value;
export const ColorContext = createContext({
  color: '',
  dispatch: colorDispatch,
});
export const UPDATE_COLOR = 'UPDATE_COLOR';
const reducers = (state: string, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE_COLOR':
      return action.color;
    default:
      return state;
  }
};

export const Color = (props: Component) => {
  const [color, dispatch] = useReducer(reducers, 'blue');
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
