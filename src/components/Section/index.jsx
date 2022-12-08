import { useRef } from 'react';

import { Container, Slider } from './styles';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export function Section({ title, children }) {
  const slider = useRef(null);

  function handleLeftArrowClick(){
    event.preventDefault();

    slider.current.scrollLeft -= slider.current.offsetWidth;
  }

  function handleRightArrowClick(){
    event.preventDefault();

    slider.current.scrollLeft += slider.current.offsetWidth;
  }

  return(
    <Container>
      <div className="desktop">
        <h2>{title}</h2>
        <Slider className="content"> 
          <button 
            className="arrow-back"
            onClick={handleLeftArrowClick}
            >
            <IoIosArrowBack />
          </button>  
          <div ref={slider}>
            {children}
          </div>
          <button 
            className="arrow-forward"
            onClick={handleRightArrowClick}
            >
            <IoIosArrowForward />
          </button>
        </Slider>
      </div>

      <div className="mobile">
        <h2>{title}</h2>
        {children}
      </div>

    </Container>
  );
}