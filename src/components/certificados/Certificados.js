import "./Certificados.css";
import { useState } from "react";
export default function Certificados() {
  const [certificadoState, setCertificado] = useState(null);
  const certificados = [
    { name: "javascript-fcc", id: 1 },
    { name: "javascript-basic-hackerrank", id: 2 },
    { name: "javascript-essencial", id: 3 },
    { name: "javascript-avancado", id: 4 },
    { name: "introducao-git", id: 5 },
    { name: "react-componentes", id: 6 },
    { name: "react-encadeados", id: 7 },
    { name: "react-hooks", id: 8 },
  ];

  return (
    <>
      <div className="certificados-container">
        {certificados.map((certificado) => (
          <div className="certificado-amortecedor" key={certificado.id}>
            <div>
              <div
                className={"certificado-class"}
                onClick={() =>
                  setCertificado(
                    certificadoState === null ? certificado.id : null
                  )
                }
              >
                <img
                  draggable="false"
                  alt={"Certificado " + certificado.name}
                  className={"certificado-pic"}
                  src={
                    process.env.PUBLIC_URL +
                    `/images/certificados/` +
                    certificado.name +
                    ".png"
                  }
                />
              </div>
            </div>
            <div
              onClick={() =>
                setCertificado(
                  certificadoState === null ? certificado.id : null
                )
              }
              className={
                "certificado " +
                (certificadoState === certificado.id ? "showed" : "hidden")
              }
            >
              <img
                draggable="false"
                alt={certificado.name}
                className={
                  "certificado-pic-full " +
                  (certificadoState === certificado.id
                    ? "pic-grow"
                    : "pic-shrink")
                }
                src={"/images/certificados/" + certificado.name + ".png"}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
