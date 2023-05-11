import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
import WorkExperienceTheme from "./WorkExperienceTheme";
import WorkExperienceView from "./WorkExperienceView";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const WorkExperience = () => {
  const [state, setState] = useState([
    {
      title: "Software dev intern",
      organization: "TZ",
      link: "Link1",
      place: "Remote",
      other: "fullstack dev",
      from: "02/12/2021",
      to: "01/01/2022",
    },
    {
      title: "Software dev intern",
      organization: "TZ",
      link: "Link1",
      place: "Remote",
      other: "fullstack dev",
      from: "02/12/2021",
      to: "01/01/2022",
    },
  ]);
  const [workexpTheme, setWorkexpTheme] = useState({
    theme: {
      workexpCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#ffffff",
      titleColor: "#ffccff",
    },
    ui: "workexpCompUI1",
  });
  const [newCert, setNewCert] = useState({
    title: "",
    organization: "",
    link: "",
    place: "",
    other: "",
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
      title: "",
      organization: "",
      link: "",
      place: "",
      other: "",
      from: "",
      to: "",
    });
  };
  const [workexpId, setWorkexpId] = useState("");

  const workexpCompCollectionRef = collection(db, "workexpComponent");
  const getWorkexpComp = async () => {
    try {
      const data = await getDocs(workexpCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0].compData);
      setWorkexpTheme(filteredData[0].compTheme);
      setWorkexpId(filteredData[0].id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWorkexpComp();
  }, []);
  return <WorkExperienceView data={state} state={workexpTheme} />;
};

export default WorkExperience;
