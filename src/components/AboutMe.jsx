import aboutMe from "../assets/aboutme.png";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="icon-container">
        <img src={aboutMe} alt="sa" />
        <h2>Hi, I'm Kyle</h2>
      </div>
      <h3>
        A 20-year-old Cebu-based student developer from Purok Paglaum, Ibabao,
        Cordova. I specialize in building clean, efficient software solutions
        with a focus on innovation and real-world impact in the local tech
        scene.
      </h3>
    </div>
  );
}

export default AboutMe;
