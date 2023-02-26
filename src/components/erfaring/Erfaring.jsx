import React from 'react';
import { useInView } from 'react-intersection-observer';

import './erfaring.css';

const Erfaring = () => {
    const { ref, inView } = useInView();
 
  return (
    <div id="erfaring" className='erfaring'>
        <h1 ref={ref} className={inView ? 'fade-up' : ''}>Erfaring</h1>
    </div>
  )
}

export default Erfaring