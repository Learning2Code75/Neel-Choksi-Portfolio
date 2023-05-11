import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Techstack from "./Techstack/Techstack";
import Pitcherpage from "./Pitcherpage/Pitcherpage";
const certLabels = [
  "Project Name",
  "From",
  "To",
  "Description",
  "Img link",
  "Live Link",
  "Github Link",
  "Tech Stack",
  "PitcherPage",
];

const CertificateItem = ({ c, idx, certs, setCerts }) => {
  const [state, setState] = useState({
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
  useEffect(() => {
    setState({ ...c });
  }, [c]);
  const editCert = () => {
    let new_certs = [...certs];
    new_certs[idx] = { ...state };
    setCerts(new_certs);
  };
  const delCert = () => {
    let new_certs = [...certs];
    new_certs.splice(idx, 1);
    setCerts(new_certs);
  };
  return (
    <div
      className="form-grid"
      style={{
        borderBottom: "1px solid lightgrey",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            padding: ".1rem .6rem",
            borderRadius: "50%",
            color: "red",
            marginLeft: ".2rem",
            background: "lightgrey",
          }}
          className="btn"
          onClick={() => delCert()}
        >
          <AiOutlineDelete
            style={{
              fontSize: "1rem",
              padding: "0",
            }}
          />
        </button>
        <button
          style={{
            padding: ".5rem .8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.2rem",
          }}
          className="btn"
          onClick={() => editCert()}
        >
          Edit Cert
        </button>
      </div>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <div className="inputCD">
        <label>{certLabels[0]}</label>
        <input
          value={state.projectName}
          onChange={(e) =>
            setState({
              ...state,
              projectName: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[1]}</label>
        <input
          type="date"
          value={state.fromDate}
          onChange={(e) =>
            setState({
              ...state,
              fromDate: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[2]}</label>
        <input
          type="date"
          value={state.toDate}
          onChange={(e) =>
            setState({
              ...state,
              toDate: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[3]}</label>
        <input
          value={state.projectDescription}
          onChange={(e) =>
            setState({
              ...state,
              projectDescription: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[4]}</label>
        <input
          value={state.projectImg}
          onChange={(e) =>
            setState({
              ...state,
              projectImg: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[5]}</label>
        <input
          value={state.projectLiveLink}
          onChange={(e) =>
            setState({
              ...state,
              projectLiveLink: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[6]}</label>
        <input
          value={state.projectGithubLink}
          onChange={(e) =>
            setState({
              ...state,
              projectGithubLink: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[7]}</label>
      </div>
      <Techstack
        newCert={state}
        setNewCert={setState}
        state={state}
        setState={setState}
      />

      <div className="inputCD">
        <label>{certLabels[8]}</label>
      </div>
      <Pitcherpage
        newCert={state}
        setNewCert={setState}
        state={state}
        setState={setState}
      />
    </div>
  );
};

export default CertificateItem;
