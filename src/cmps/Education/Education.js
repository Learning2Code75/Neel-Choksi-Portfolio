import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
import EducationTheme from "./EducationTheme";
import EducationView from "./EducationView";

import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const Education = () => {
  const [state, setState] = useState([
    {
      name: "VIT",
      degree: "B.Tech CSE",
      link: "https://vit.ac.in",
      score: "CGPA : 8.78",
      from: "02/12/2021",
      to: "01/01/2022",
    },
  ]);
  const [eduTheme, setEduTheme] = useState({
    theme: {
      eduCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "eduCompUI1",
  });
  const [newCert, setNewCert] = useState({
    name: "",
    degree: "",
    link: "",
    score: "",
    from: "",
    to: "",
  });
  const addNewCert = () => {
    let new_state = [...state];
    new_state.push({
      ...newCert,
    });
    setState(new_state);
    setNewCert({
      name: "",
      degree: "",
      link: "",
      score: "",
      from: "",
      to: "",
    });
  };
  const [eduId, setEduId] = useState("");
  const educationCompCollectionRef = collection(db, "educationComponent");
  const getEducationComp = async () => {
    try {
      const data = await getDocs(educationCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0].compData);
      setEduTheme(filteredData[0].compTheme);
      setEduId(filteredData[0].id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEducationComp();
  }, []);
  return <EducationView state={eduTheme} data={state} />;
};

export default Education;
