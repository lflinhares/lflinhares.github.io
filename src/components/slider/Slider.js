import "./Slide.css";
export default function Slider(props) {
  return (
    <div className="slider-container" onClick={props.onClick}>
      <div className={"slider " + props.className}>
        <img
          className="slider-icon"
          src={require(`../../assets/images/theme-icons/${props.iconChange}.png`)}
        />
      </div>
    </div>
  );
}
