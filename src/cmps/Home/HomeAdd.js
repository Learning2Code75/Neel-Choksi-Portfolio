import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { ChromePicker } from "react-color";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

function HomeAdd() {
  // const generateRandomColor =()=> {
  //     const hexA = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
  //     let res = "#";
  //     let i;
  //     for(i=0;i<6;i++){
  //         let randNo = Math.floor(Math.random()*hexA.length)
  //         res = res + hexA[randNo]
  //     }
  //     return res;
  // }
  // const homeThemeChange = () =>{
  //     const newColor = generateRandomColor();
  //     // console.log(newColor)
  //     setHomeCompData({...HomeCompData,theme:{homecompBackground:newColor}});
  //     // console.log(HomeCompData)
  // }
  // const nameThemeChange = ()=>{
  //     const newColor = generateRandomColor();
  //     setHomeCompData({...HomeCompData,theme:{nameTheme:newColor}})
  // }
  // const positionThemeChange = ()=>{
  //     const newColor = generateRandomColor();
  //     setHomeCompData({...HomeCompData,theme:{positionTheme:newColor}})
  // }
  // const personalPitchThemeChange = ()=>{
  //     const newColor = generateRandomColor();
  //     setHomeCompData({...HomeCompData,theme:{personalPitchTheme:newColor}})
  // }
  // const photoThemeChange = ()=>{
  //     const newColor = generateRandomColor();
  //     setHomeCompData({...HomeCompData,theme:{photoTheme:newColor}})
  // }

  // this state data should be set from the firebase whenever user presses submit or on page refresh

  const [HomeCompData, setHomeCompData] = useState({
    name: "FirstName LastName",
    photo: {
      imgUrl: "",
      imgDesc: "Image Desc",
    },
    position: "Full Stack Webdev",
    personalPitch: "personal pitch paragraph is this paragraph",
    theme: {
      homecompBackground: { r: 13, g: 32, b: 108, a: 100 },
      nameTheme: "#00ccff",
      photoTheme: "#00ccff",
      positionTheme: "#00cccf",
      personalPitchTheme: "#00ccff",
    },
    ui: "ui1",
  });
  const homeCompCollectionRef = collection(db, "homeComponent");
  const getHomeComp = async () => {
    try {
      const data = await getDocs(homeCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHomeCompData(filteredData[0]);
    } catch (err) {
      console.error(err);
    }
  };
  const editHomeCompData = async () => {
    const homeDoc = doc(db, "homeComponent", HomeCompData?.id);
    await updateDoc(homeDoc, HomeCompData);
    await getHomeComp();
  };
  useEffect(() => {
    getHomeComp();
  }, []);
  return (
    <>
      <div
        className={HomeCompData.ui}
        style={{
          backgroundColor: `rgba(${HomeCompData.theme.homecompBackground.r},${HomeCompData.theme.homecompBackground.g},${HomeCompData.theme.homecompBackground.b},${HomeCompData.theme.homecompBackground.a})`,
        }}
      >
        {/* <h3>Hello, It's Me</h3> */}
        <h1 style={{ color: `${HomeCompData.theme.nameTheme}` }}>
          {HomeCompData.name}
        </h1>
        <h3 style={{ color: `${HomeCompData.theme.positionTheme}` }}>
          I'm a <span>{HomeCompData.position}</span>
        </h3>
        <p style={{ color: `${HomeCompData.theme.personalPitchTheme}` }}>
          {HomeCompData.personalPitch}
        </p>
        <a
          href="https://github.com/Learning2Code75/ResumeProjects/raw/main/Resume/Neel_Choksi_WebDeveloper_Resume.pdf"
          target="__blank"
          className="btn"
        >
          Resume
        </a>
        {/* <h3 style={{color:`${HomeCompData.theme.photoTheme}`}}>{HomeCompData.photo.imgDesc}</h3> */}
      </div>
      <div className="home-img">
        <img src={HomeCompData.photo.imgUrl} alt="img" />
      </div>
    </>
  );
}

export default HomeAdd;
