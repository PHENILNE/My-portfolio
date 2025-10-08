import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <h1>Pheniline Jerono | Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://avatars.githubusercontent.com/u/176487529?v=4"
          alt="Profile"
        />
        <h2>Hi, I'm Pheniline Jerono </h2>
        <p>
          A passionate web developer & design enthusiast. I enjoy building clean
          and user-friendly websites that solve real-world problems.
        </p>
        <div className="buttons">
          <a href="#projects">View My Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <p>
          I’m a creative developer who loves combining design and technology.
          Skilled in HTML, CSS, JavaScript, and engineering tools like
          SolidWorks and AutoCAD.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          <div className="project">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio website showcasing my skills and projects.</p>
          </div>
          <div className="project">
            <h3>Engineering CAD Model</h3>
            <p>
              3D CAD design created using SolidWorks for mechanical
              visualization.
            </p>
          </div>
          <div className="project">
            <h3>Circuit Design App</h3>
            <p>
              A mini web app to visualize basic electrical circuit connections.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact Me</h2>
        <p>
          {" "}
          Email:<a href="mailto:phennyjer@gmail.com">phennyjer@gmail.com</a>
        </p>
        <p>
          {" "}
          GitHub:
          <a href="https://github.com/PHENILNE">https://github.com/PHENILNE</a>
        </p>
      </section>

      {/* Footer */}
      <footer>© 2025 Pheniline Jerono | All rights reserved</footer>
    </>
  );
}

export default App;
