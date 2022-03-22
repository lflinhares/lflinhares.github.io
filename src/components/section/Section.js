import "./Section.css";
export default function Section({ children, title, size }) {
  return (
    <section className={size}>
      <h2>{title}</h2>
      <div className="container">{children}</div>
    </section>
  );
}
