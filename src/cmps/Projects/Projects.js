import React, { useEffect, useState } from "react";
import ViewProjects from "./ViewProjects";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const Projects = () => {
  const [state, setState] = useState([
    {
      projectName: "Project1",
      fromDate: "2023-04-10",
      toDate: "2023-04-10",
      projectDescription: "desc1",
      projectImg: "http://imgurl1.com",
      projectLiveLink: "livelink1",
      projectGithubLink: "ghublink1",
      techStack: [
        {
          title: "st1",
          link: "link1",
        },
      ],
      projectPitcherPage: [
        {
          title: "title",
          link: "title1",
        },
        {
          title: "subtitle",
          link: "subtitle1",
        },
        {
          title: "imgurl",
          link: "http://imgurl.com",
        },
        {
          title: "text",
          link: "text1",
        },
        {
          title: "listitem",
          link: "listitem1",
        },
        {
          title: "link",
          link: "http://link1.com",
        },
      ],
    },
  ]);
  const [newCert, setNewCert] = useState({
    projectName: "",
    fromDate: "",
    toDate: "",
    projectDescription: "",
    projectImg: "",
    projectLiveLink: "",
    projectGithubLink: "",
    techStack: [],
    projectPitcherPage: [],
  });
  const [projectTheme, setProjectTheme] = useState({
    theme: {
      projectCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#ffffff",
      titleColor: "#ffccff",
    },
    ui: "projectCompUI1",
  });
  const addNewCert = () => {
    let new_state = [...state];
    new_state.push({
      ...newCert,
    });
    setState(new_state);
    setNewCert({
      projectName: "",
      fromDate: "",
      toDate: "",
      projectDescription: "",
      projectImg: "",
      projectLiveLink: "",
      projectGithubLink: "",
      techStack: [],
      projectPitcherPage: [],
    });
  };

  const projectsCompCollectionRef = collection(db, "projectsComponent");
  const getProjectsComp = async () => {
    try {
      const data = await getDocs(projectsCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0].compData);
      setProjectTheme(filteredData[0].compTheme);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProjectsComp();
  }, []);
  return <ViewProjects data={state} state={projectTheme} />;
};

export default Projects;
