import "./App.css";
import About from "./components/about/About";
import Habilidades from "./components/habilidades/Habilidades";
import Projetos from "./components/projetos/Projetos";
import Header from "./components/header/Header";
import Certificados from "./components/certificados/Certificados";
import Section from "./components/section/Section";
function App() {
  return (
    <>
      <Header />
      <Section size="about-section">
        <About />
      </Section>
      <Section title="Projetos" size="projetos-section">
        <Projetos />
      </Section>
      <Section title="Habilidades" size="habilidades">
        <Habilidades />
      </Section>
      <Section title="Certificados" size="certificados">
        <Certificados />
      </Section>
    </>
  );
}

export default App;
