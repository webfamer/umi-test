import React from 'react';
import Button from './buttons';
import Area from './showArea';
import { Color } from './color';
const myreduxPage = () => {
  return (
    <React.Fragment>
      <Color>
        <Area />
        <Button />
      </Color>
    </React.Fragment>
  );
};
export default myreduxPage;
