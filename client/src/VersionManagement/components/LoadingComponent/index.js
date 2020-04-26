import React from 'react';
import * as s from './style';

class LoadingComponent extends React.Component {
  render() {
    return <div className={s.container}><div className={s.ldsRipple}><div></div><div></div></div>Loading...</div>;
  }
}

export default LoadingComponent;