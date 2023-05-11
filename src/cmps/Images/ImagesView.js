import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
function ImagesView() {
  const [imgGrid, setImgGrid] = useState([]);
  const imgGridCollectionRef = collection(db, "imgComponent");

  const getImgs = async () => {
    try {
      const data = await getDocs(imgGridCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setImgGrid(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteImg = async (id) => {
    const imgDoc = doc(db, "imgComponent", id);
    await deleteDoc(imgDoc);
    await getImgs();
  };
  return (
    <>
      <div>
        <button className="btn" onClick={() => getImgs()}>
          Show images
        </button>
      </div>
      <div className="HomeView">
        <div className="imgGrid">
          {/* <pre>{JSON.stringify(imgGrid, null, 2)}</pre> */}
          {imgGrid.map((img) => (
            <div key={img.id} className="imgComp">
              <img src={img.imgUrl} alt="img" height={150} width={150} />

              <div>{img.imgUrl}</div>
              <button className="btn" onClick={() => deleteImg(img.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImagesView;
