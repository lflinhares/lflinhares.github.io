import "./Habilidades.css";
export default function Habilidades() {
  const techs = [
    { name: "html", id: 1 },
    { name: "css", id: 2 },
    { name: "javascript", id: 3 },
    { name: "react", id: 4 },
    { name: "git", id: 5 },
  ];
  return (
    <>
      <div className="habilidades-container">
        {techs.map((tech) => (
          <div key={tech.id} className={"habilidade"}>
            <img
              draggable="false"
              alt={tech.name}
              className="item-img"
              src={
                process.env.PUBLIC_URL + `/images/logos/` + tech.name + ".png"
              }
            />
            {tech.name.toUpperCase()}
          </div>
        ))}
      </div>
    </>
  );
}
