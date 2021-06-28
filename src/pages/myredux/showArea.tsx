import React, { useContext } from 'react';
import { ColorContext } from './color';
interface colorContext {
  color: string;
}
const Area = () => {
  const { color } = useContext(ColorContext);
  return (
    <div>
      <p style={{ color: color }}>这是一段适配文字</p>
    </div>
  );
};

export default Area;
