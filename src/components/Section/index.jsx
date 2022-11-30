import { useRef } from 'react';

import { Container, Slider } from './styles';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Card } from '../../components/Card';


export function Section({ title }) {
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
      <h2>{title}</h2>
      <Slider className="content"> 
        <button 
          className="arrow-back"
          onClick={handleLeftArrowClick}
          >
          <IoIosArrowBack />
        </button>  
        <div ref={slider}>
          <Card data={{
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            price: 25.97,
            }}
          />
          <Card data={{
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            price: 25.97,
            }}
          />
          <Card data={{
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            price: 25.97,
            }}
          />
          <Card data={{
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            price: 25.97,
            }}
          />
        </div>
        <button 
          className="arrow-forward"
          onClick={handleRightArrowClick}
          >
          <IoIosArrowForward />
        </button>
      </Slider>
    </Container>
  );
}