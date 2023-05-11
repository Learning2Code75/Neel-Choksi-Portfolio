import React, { useEffect, useState } from "react";
import AboutTheme from "./AboutTheme";
import AboutUpdate from "./AboutUpdate";
import AboutView from "./AboutView";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const About = () => {
  const [state, setState] = useState({
    desc: "Desc1",
    currPos: "Full Stack Developer",
    skills: [
      {
        title: "Dev Languages",
        values: ["java", "javascript"],
      },
      {
        title: "Dev Frameworks",
        values: ["NodeJS", "ReactJS", "Apollo GraphQL"],
      },
      {
        title: "Database",
        values: ["Firebase", "MongoDB", "PostgreSQL"],
      },
    ],
    theme: {
      aboutCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "aboutCompUI1",
  });
  const aboutCompCollectionRef = collection(db, "aboutComponent");
  const getAboutComp = async () => {
    try {
      const data = await getDocs(aboutCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0]);
    } catch (err) {
      console.error(err);
    }
  };
  const editAboutCompData = async () => {
    const aboutDoc = doc(db, "aboutComponent", state?.id);
    await updateDoc(aboutDoc, state);
    await getAboutComp();
  };
  useEffect(() => {
    getAboutComp();
  }, []);
  return <AboutView state={state} setState={setState} />;
};

export default About;
