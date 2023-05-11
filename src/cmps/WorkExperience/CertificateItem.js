import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
const certLabels = [
  "Title",
  "Organization",
  "Link",
  "Place",
  "Other",
  "From",
  "To",
];

const CertificateItem = ({ c, idx, certs, setCerts }) => {
  const [state, setState] = useState({
    title: "",
    organization: "",
    link: "",
    place: "",
    other: "",
    from: "",
    to: "",
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
          value={state.title}
          onChange={(e) =>
            setState({
              ...state,
              title: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[1]}</label>
        <input
          value={state.organization}
          onChange={(e) =>
            setState({
              ...state,
              organization: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[2]}</label>
        <input
          value={state.link}
          onChange={(e) =>
            setState({
              ...state,
              link: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[3]}</label>
        <input
          value={state.place}
          onChange={(e) =>
            setState({
              ...state,
              place: e.target.value,
            })
          }
        />
      </div>
      <div className="inputCD">
        <label>{certLabels[4]}</label>
        <input
          value={state.other}
          onChange={(e) =>
            setState({
              ...state,
              other: e.target.value,
            })
          }
        />
      </div>

      <div className="inputCD">
        <label>{certLabels[5]}</label>
        <input
          type="date"
          value={state.from}
          onChange={(e) =>
            setState({
              ...state,
              from: e.target.value,
            })
          }
        />
      </div>

      <div className="inputCD">
        <label>{certLabels[6]}</label>
        <input
          type="date"
          value={state.to}
          onChange={(e) =>
            setState({
              ...state,
              to: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default CertificateItem;
