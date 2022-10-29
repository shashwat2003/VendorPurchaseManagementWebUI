import React from 'react';
import loader from '../../assets/loader.svg';

const Loader = (props) => {
  return (
    <div
      className="absolute top-0 bg-black/50 w-full h-full flex justify-center items-center"
      style={{ display: props.visible ? 'flex' : 'none' }}
    >
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
