import React, { useEffect, useState } from "react";
import InterestsTheme from "./InterestsTheme";
import InterestsUpdate from "./InterestsUpdate";
import InterestsView from "./InterestsView";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

const Interests = () => {
  const [state, setState] = useState({
    skills: [
      {
        title: "Cubing",
        values: ["23 sec - 3x3"],
      },
      {
        title: "Music",
        values: ["Percussion", "Listening"],
      },
      {
        title: "Books",
        values: ["Self help"],
      },
      {
        title: "Skateboarding",
        values: ["Beginner"],
      },
    ],
    theme: {
      interestsCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "interestsCompUI1",
  });
  const interestsCompCollectionRef = collection(db, "interestsComponent");
  const getInterestsComp = async () => {
    try {
      const data = await getDocs(interestsCompCollectionRef);
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
    getInterestsComp();
  }, []);

  return <InterestsView state={state} />;
};

export default Interests;
