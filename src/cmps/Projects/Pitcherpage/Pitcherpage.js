import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
const Pitcherpage = ({ newCert, setNewCert, state, setState }) => {
  const [ts, setTs] = useState({
    title: "",
    link: "",
  });
  const addNewCert = () => {
    let new_cert = { ...newCert };
    new_cert.projectPitcherPage.push({
      ...ts,
    });
    setNewCert(new_cert);
    setTs({
      title: "",
      link: "",
    });
  };
  const typeInput = [
    {
      name: "Select Type of input",
      value: "",
    },
    {
      name: "Title",
      value: "title",
    },
    {
      name: "Subtitle",
      value: "subtitle",
    },
    {
      name: "Img URL",
      value: "imgurl",
    },
    {
      name: "Text",
      value: "text",
    },
    {
      name: "List Item",
      value: "listitem",
    },
    {
      name: "Link",
      value: "link",
    },
  ];
  return (
    <>
      {/* <pre>{JSON.stringify(newCert, null, 2)}</pre> */}
      <div className="Certificates">
        <div className="createCertificateForm">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Pitcherpage Data
          </h2>
          <div className="form-grid">
            <div className="inputCD">
              <label>Title</label>
              <select
                value={ts.title}
                onChange={(e) => {
                  let new_ts = { ...ts, title: e.target.value };
                  setTs(new_ts);
                }}
              >
                {typeInput.map((ti) => (
                  <option value={ti.value}>{ti.name}</option>
                ))}
              </select>
            </div>
            <div className="inputCD">
              <label>Link</label>
              <input
                placeholder="Enter link"
                value={ts.link}
                onChange={(e) => {
                  let new_ts = { ...ts, link: e.target.value };
                  setTs(new_ts);
                }}
              />
            </div>

            <div className="inputCD">
              <label>
                <button
                  className="btn"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                  onClick={() => addNewCert()}
                >
                  <span>Add Certification</span> <IoMdAdd />
                </button>
              </label>
              <div></div>
            </div>
          </div>
          {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(newCert, null, 2)}</pre> */}

          {newCert.projectPitcherPage.map((c, idx) => (
            <CertificateItem
              c={c}
              idx={idx}
              certs={newCert}
              setCerts={setNewCert}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pitcherpage;
