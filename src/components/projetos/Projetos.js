import { useState, useRef, useEffect } from "react";
import "./Projetos.css";
export default function Projetos() {
  const [carouselIndex, setIndex] = useState(0);

  const projetos = [
    {
      name: "calculadora",
      link: "https://lflinhares.github.io/calculator/",
      id: 1,
    },
    {
      name: "filtros",
      link: "https://lflinhares.github.io/Ecommerce/",
      id: 2,
    },
    {
      name: "filmes",
      link: "https://lflinhares.github.io/filmes/",
      id: 3,
    },
  ];

  function increase() {
    if (carouselIndex >= projetos.length - 1) {
      return;
    } else {
      setIndex(carouselIndex + 1);
    }
  }
  function decrease() {
    if (carouselIndex === 0) {
      return;
    } else {
      setIndex(carouselIndex - 1);
    }
  }

  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (carouselRef) {
      carouselRef.current.addEventListener("touchstart", (e) =>
        setTouchStart(e.changedTouches[0].screenX)
      );
      carouselRef.current.addEventListener("touchend", (e) =>
        setTouchEnd(e.changedTouches[0].screenX)
      );
    }
  }, [carouselRef]);

  useEffect(() => {
    if (touchEnd) {
      if (touchStart > touchEnd) {
        increase();
      } else decrease();
    }
  }, [touchEnd]);

  return (
    <>
      <div className="amortecedor">
        <button className="buttons" onClick={decrease}>
          {"<"}
        </button>
      </div>
      <div className="projetos-carousel">
        <div className="caroussel-arrows left">{"<"}</div>
        <div className="caroussel-arrows right">{">"}</div>
        <div
          ref={carouselRef}
          className="projetos-container"
          style={{
            transform: `translateX(${
              (-100 / projetos.length) * carouselIndex
            }%)`,
          }}
        >
          {projetos.map((projeto) => (
            <div key={projeto.id} className={"projeto"}>
              <a target="_blank" href={projeto.link}>
                <img
                  draggable="false"
                  alt={projeto.name}
                  className="projeto-img"
                  src={
                    process.env.PUBLIC_URL +
                    `/images/projetos/` +
                    projeto.name +
                    ".png"
                  }
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="amortecedor">
        <button className="buttons" onClick={increase}>
          {">"}
        </button>
      </div>
    </>
  );
}
