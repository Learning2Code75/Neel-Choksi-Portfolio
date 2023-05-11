import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
import CertificateTheme from "./CertificateTheme";
import CertificateView from "./CertificateView";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

const Certificate = () => {
  const [state, setState] = useState([
    {
      title: "Title1",
      organization: "Org1",
      link: "Link1",
      other: "Other1",
      from: "02/12/2021",
      to: "01/01/2022",
    },
    {
      title: "Title2",
      organization: "Org2",
      link: "Link2",
      other: "Other2",
      from: "02/12/2021",
      to: "01/01/2022",
    },
    {
      title: "Title3",
      organization: "Org3",
      link: "Link3",
      other: "Other3",
      from: "02/12/2021",
      to: "01/01/2022",
    },
  ]);
  const [certTheme, setCertTheme] = useState({
    theme: {
      certCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#ffccff",
      titleColor: "#ff11ff",
    },
    ui: "certCompUI1",
  });
  const [newCert, setNewCert] = useState({
    title: "",
    organization: "",
    link: "",
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
      other: "",
      from: "",
      to: "",
    });
  };

  const [certId, setCertId] = useState("");

  const certificateCompCollectionRef = collection(db, "certificateComponent");
  const getCertificateComp = async () => {
    try {
      const data = await getDocs(certificateCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0].compData);
      setCertTheme(filteredData[0].compTheme);
      setCertId(filteredData[0].id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCertificateComp();
  }, []);

  return (
    <CertificateView state={certTheme} setState={setCertTheme} data={state} />
  );
};

export default Certificate;
