import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <pre title="Luiz Linhares" aria-label="Luiz Linhares">
        <div className="logo-container">
          <span
            className="logo-lt-gt"
            dangerouslySetInnerHTML={{ __html: "&lt" }}
          ></span>
          <span className="logo-text">lu</span>
          <span className="bar"></span>
          <span className="logo-text">z l</span>
          <span className="lastname-i"></span>
          <span className="logo-text">nhares</span>
          <span
            className="logo-lt-gt"
            dangerouslySetInnerHTML={{ __html: "&gt" }}
          ></span>
        </div>
      </pre>
      <div className="contact-container">
        <a className="contact-link" href="https://github.com/lflinhares">
          <img
            className="contact-icon "
            src={process.env.PUBLIC_URL + `/images/contact-icons/git-hub.png`}
            alt="git-hub"
          />
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/lflinhares"
        >
          <img
            className="contact-icon linkedin"
            src={process.env.PUBLIC_URL + `/images/contact-icons/linkedin.png`}
            alt="linkedin"
          />
        </a>
      </div>
    </header>
  );
}
