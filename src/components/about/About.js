import "./About.css";
export default function About(props) {
  return (
    <>
      <div className="wrapper">
        <p className="about">
          Usuário assíduo de computadores desde a infância, vi na programação a
          oportunidade de trabalhar no ambiente que sempre me cativou, o mundo
          virtual. Domino HTML, CSS, Javascript, ReactJS e procuro sempre
          aprimorar minhas habilidades.
        </p>
        <div className="picture-decoration">
          <img
            alt="foto do Luiz"
            className="minha-foto"
            src={process.env.PUBLIC_URL + `/images/mypic/minhafoto.jpeg`}
          />
          <div className="rounded-forms top-right"></div>
          <div className="rounded-forms bottom-right"></div>
          <div className="rounded-forms mid-right"></div>
          <div className="rounded-forms top-left-bottom"></div>
          <div className="rounded-forms top-left-mid"></div>
          <div className="rounded-forms top-left-top"></div>
        </div>
      </div>
    </>
  );
}
