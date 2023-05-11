import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
const AboutUpdate = ({ state, setState }) => {
  const handleSkillValuesChange = (e, idx, index) => {
    // console.log(e.target.value);
    let new_state = { ...state };
    new_state.skills[idx].values[index] = e.target.value;
    setState(new_state);
  };
  const addSkillValue = (e, idx) => {
    e.preventDefault();
    let new_state = { ...state };
    new_state.skills[idx].values.push("");
    setState(new_state);
  };
  const delSkillValue = (e, idx, index) => {
    e.preventDefault();
    let new_state = { ...state };
    new_state.skills[idx].values.splice(index, 1);
    setState(new_state);
  };
  const addNewSkill = (e, title) => {
    e.preventDefault();
    let new_state = { ...state };
    new_state.skills.push({
      title: newSkill,
      values: [],
    });
    setState(new_state);
    setNewSkill("");
  };
  const delSkill = (e, idx) => {
    e.preventDefault();
    let new_state = { ...state };
    new_state.skills.splice(idx, 1);
    setState(new_state);
  };
  const [newSkill, setNewSkill] = useState("");
  return (
    <>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <div className="createAboutForm">
        <h2
          style={{
            textAlign: "center",
          }}
        >
          About Component Data
        </h2>
        <div className="form-grid">
          <div className="inputCD">
            <label>About yourself:</label>
            <input
              placeholder="Describe yourself"
              value={state.desc}
              onChange={(e) => {
                setState({ ...state, desc: e.target.value });
              }}
            ></input>
          </div>
          <div className="inputCD">
            <label>Current Position:</label>
            <input
              placeholder="Current position"
              value={state.currPos}
              onChange={(e) => {
                setState({ ...state, currPos: e.target.value });
              }}
            ></input>
          </div>
          <div className="inputCD">
            <label>Add Skill</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
              }}
            >
              <input
                value={newSkill}
                placeholder="Enter Title for skill"
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button
                style={{
                  padding: ".5rem .8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
                className="btn"
                onClick={(e) => addNewSkill(e)}
              >
                <span>New Skill </span>
                <IoMdAdd style={{ fontWeight: "700" }} />
              </button>
            </div>
          </div>

          {state.skills.map((sk, idx) => (
            <div
              className="inputCD"
              style={{
                borderBottom: "1px solid lightgrey",
              }}
            >
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {sk.title}{" "}
                <div>
                  <button
                    style={{
                      padding: "0 .4rem",
                      borderRadius: "50%",
                    }}
                    className="btn"
                    onClick={(e) => addSkillValue(e, idx)}
                  >
                    +
                  </button>{" "}
                  <button
                    style={{
                      padding: ".1rem .3rem",
                      borderRadius: "50%",
                      color: "red",
                      marginLeft: ".2rem",
                      background: "lightgrey",
                    }}
                    className="btn"
                    onClick={(e) => delSkill(e, idx)}
                  >
                    <AiOutlineDelete
                      style={{
                        fontSize: "1rem",
                        padding: "0",
                      }}
                    />
                  </button>
                </div>
              </label>
              <div className="array-grid">
                {sk.values.map((val, index) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: ".35rem",
                    }}
                  >
                    <input
                      value={val}
                      onChange={(e) => handleSkillValuesChange(e, idx, index)}
                    />
                    <button
                      style={{
                        padding: ".1rem .3rem",
                        borderRadius: "50%",
                        color: "red",
                        marginLeft: ".2rem",
                        background: "lightgrey",
                      }}
                      className="btn"
                      onClick={(e) => delSkillValue(e, idx, index)}
                    >
                      <AiOutlineDelete
                        style={{
                          fontSize: "1rem",
                          padding: "0",
                        }}
                      />
                    </button>{" "}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUpdate;
