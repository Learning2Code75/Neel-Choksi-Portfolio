import React from "react";
import HomeAdd from "../cmps/Home/HomeAdd";
import ImageAdd from "../cmps/Images/ImagesAdd";
import ImageView from "../cmps/Images/ImagesView";
import CreateHeader from "../cmps/CreateHeader";
import ContactUpdate from "../cmps/Contact/ContactUpdate";
import About from "../cmps/About/About";
import Certificate from "../cmps/Certificate/Certificate";
import Languages from "../cmps/Languages/Languages";
import Interests from "../cmps/Interests/Interests";
import Education from "../cmps/Education/Education";
import WorkExperience from "../cmps/WorkExperience/WorkExperience";
import Projects from "../cmps/Projects/Projects";

function CreatePost({ setActive }) {
  return (
    <div>
      {/* <h1>Update and Preview Components</h1> */}
      {/* <CreateHeader content="Home Component" /> */}
      <section className="home" id="home" onMouseEnter={() => setActive(1)}>
        <HomeAdd />
      </section>

      {/* <h1>Add,Update,Delete and Preview Components</h1> */}
      {/* <CreateHeader content="About Component" /> */}
      <section className="about" id="about" onMouseEnter={() => setActive(2)}>
        <About />
      </section>

      {/* <CreateHeader content="Certificates Component" /> */}
      <section
        className="certification"
        id="certification"
        onMouseEnter={() => setActive(3)}
      >
        <Certificate />
      </section>

      {/* <CreateHeader content="Language Component" /> */}
      <section
        className="languages"
        id="languages"
        onMouseEnter={() => setActive(4)}
      >
        <Languages />
      </section>

      {/* <CreateHeader content="Interests Component" /> */}
      <section
        className="interests"
        id="interests"
        onMouseEnter={() => setActive(5)}
      >
        <Interests />
      </section>

      {/* <CreateHeader content="Education" /> */}
      <section
        className="education"
        id="education"
        onMouseEnter={() => setActive(6)}
      >
        <Education />
      </section>
      {/* <CreateHeader content="Work Experience" /> */}
      <section
        className="workexp"
        id="workexp"
        onMouseEnter={() => setActive(7)}
      >
        <WorkExperience />
      </section>
      {/* <CreateHeader content="Project Component" /> */}
      <section
        className="projects"
        id="projects"
        onMouseEnter={() => setActive(8)}
      >
        <Projects />
      </section>
      {/* <CreateHeader content="Contact Component" /> */}
      <section
        className="contact"
        id="contact"
        onMouseEnter={() => setActive(9)}
      >
        <ContactUpdate />
      </section>
    </div>
  );
}

export default CreatePost;
