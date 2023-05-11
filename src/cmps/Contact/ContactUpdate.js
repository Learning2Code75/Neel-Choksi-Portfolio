import React, { useEffect, useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaAddressCard } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const ContactUpdate = () => {
  const [state, setState] = useState({
    email: "email1@gmail.com",
    number: "182818192",
    address: "Addr 1  , adfajd;aas , ada dfadf ad.",
    linkedInURL: { type: "URL", data: "linkedin.com" },
    githubURL: { type: "URL", data: "github.com" },
    theme: {
      contactcompBackground: { r: 0, g: 0, b: 0, a: 100 },
      textColor: "#8686C6",
      linkColor: "#ffccff",
      titleColor: "#ffccff",
    },
    ui: "contactCompUI1",
  });

  const handleLinkedInURL = (e) => {
    let new_state = { ...state };
    new_state.linkedInURL.data = e.target.value;
    setState(new_state);
  };
  const handleGithubURL = (e) => {
    let new_state = { ...state };
    new_state.githubURL.data = e.target.value;
    setState(new_state);
  };
  const contactCompCollectionRef = collection(db, "contactComponent");
  const getContactComp = async () => {
    try {
      const data = await getDocs(contactCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getContactComp();
  }, []);
  return (
    <>
      <h2>
        Contact<span> Me</span>
      </h2>
      <div
        className={state.ui}
        style={{
          backgroundColor: `rgba(${state.theme.contactcompBackground.r},${state.theme.contactcompBackground.g},${state.theme.contactcompBackground.b},${state.theme.contactcompBackground.a})`,
          color: `${state.theme.textColor}`,
        }}
      >
        <div className="contactCompItem">
          <SiGmail
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
            }}
          />
          <h4
            style={{
              color: `${state.theme.titleColor}`,
            }}
          >
            Email
          </h4>
          <a
            target="__blank"
            style={{
              color: `${state.theme.linkColor}`,
            }}
            href={`mailto:${state.email}`}
          >
            {state.email}
          </a>
        </div>
        <div className="contactCompItem">
          <FiPhoneCall
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
            }}
          />
          <h4
            style={{
              color: `${state.theme.titleColor}`,
            }}
          >
            Number
          </h4>
          <div>{state.number}</div>
        </div>
        <div className="contactCompItem">
          <FaAddressCard
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
            }}
          />
          <h4
            style={{
              color: `${state.theme.titleColor}`,
            }}
          >
            Address
          </h4>
          <div>{state.address}</div>
        </div>
        <div className="contactCompItem">
          <BsLinkedin
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
            }}
          />
          <h4
            style={{
              color: `${state.theme.titleColor}`,
            }}
          >
            LinkedIn
          </h4>
          <a
            target="__blank"
            style={{
              color: `${state.theme.linkColor}`,
            }}
            href={state.linkedInURL.data}
          >
            {state.linkedInURL.data}
          </a>
        </div>
        <div className="contactCompItem">
          <BsGithub
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
            }}
          />
          <h4
            style={{
              color: `${state.theme.titleColor}`,
            }}
          >
            Github
          </h4>
          <a
            target="__blank"
            style={{
              color: `${state.theme.linkColor}`,
            }}
            href={state.githubURL.data}
          >
            {state.githubURL.data}
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUpdate;
