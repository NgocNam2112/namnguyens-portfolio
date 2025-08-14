import * as React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 backdrop-blur z-[9999]">
    <div className={styles['lds-spinner']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
export default Loading;
