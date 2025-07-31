import backendIcon from "../assets/backend.png";

function Skills() {
  return (
    <div className="skills-container">
      <div className="icon-container">
        <img src={backendIcon} alt="" />
        <h1>Skills</h1>
      </div>
      <div>
        <div>
          <h3>Frontend</h3>
          <div className="skill-bento">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>TypeScript</p>
            <p>TailwindCSS</p>
            <p>DaisyUI</p>
          </div>
        </div>

        <div>
          <h3>Backend</h3>
          <div className="skill-bento">
            <p>NodeJs</p>
            <p>ExpressJs</p>
            <p>PHP</p>
            <p>MySQL</p>
          </div>
        </div>

        <div>
          <h3>Others</h3>
          <div className="skill-bento">
            <p>Git</p>
            <p>GitHub</p>
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
