import React from 'react'
import Typed from 'react-typed';
import { useInView } from 'react-intersection-observer';

import './header.css';

const Header = () => {
  const { ref, inView } = useInView();

  return (
    <div className='header'>
      <h1 ref={ref}>Jeg er{' '} 
        {inView && (
          <Typed 
            strings={[
              "Kasper Høg", 
              "Web Udvikler",
              "App Udvikler",
            ]}
            typeSpeed={150}
            backDelay={1000}
            backSpeed={100}
            loop={true}
          />
        )}
      </h1>
      <h2>Datatekniker Programmør</h2>
    </div>
  )
}

export default Header