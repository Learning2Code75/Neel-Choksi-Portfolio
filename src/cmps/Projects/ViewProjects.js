import React from "react";
import PitcherPageDialog from "./Pitcherpage/PitcherPageDialog";

const ViewProjects = ({ data, state }) => {
  return (
    <>
      <h2>
        <span>My </span>Projects
      </h2>
      <div
        className={state.ui}
        style={{
          background: `rgba(${state.theme.projectCompBackground.r},${state.theme.projectCompBackground.g},${state.theme.projectCompBackground.b},${state.theme.projectCompBackground.a})`,
          color: `${state.theme.textColor}`,
        }}
      >
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className="projectCompGrid1">
          {data.map((d) => (
            <div
              className="projectCompGrid1Item"
              style={
                {
                  // border: `1px solid ${state.theme.textColor}`,
                }
              }
            >
              <h4
                style={{
                  color: `${state.theme.titleColor}`,
                }}
              >
                {d.projectName}
              </h4>
              <div className="projectCompGrid1ItemFromTo">
                {d.fromDate} to {d.toDate}
              </div>
              <img
                src={d.projectImg}
                alt="project img"
                style={{
                  // border: `1px solid ${state.theme.textColor}`,
                  borderRadius: ".75rem",
                }}
              />
              <p>{d.projectDescription}</p>
              <a
                style={{
                  color: `${state.theme.linkColor}`,
                  overflowX: "scroll",
                }}
                href={d.projectLiveLink}
                target="__blank"
              >
                {d.projectLiveLink}
              </a>
              <a
                style={{
                  color: `${state.theme.linkColor}`,
                  overflowX: "scroll",
                }}
                href={d.projectGithubLink}
                target="__blank"
              >
                {d.projectGithubLink}
              </a>
              <div
                className="projectCompGrid2"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {d.techStack.map((ts) => (
                  <div
                    className="projectCompGrid2Item"
                    style={{
                      border: `1px solid ${state.theme.textColor}`,
                    }}
                  >
                    <a
                      style={{
                        color: `${state.theme.linkColor}`,
                      }}
                      href={ts.link}
                      target="__blank"
                    >
                      {ts.title}
                    </a>
                  </div>
                ))}
              </div>
              <div
                style={{
                  width: "100%",
                  marginTop: "2rem",
                }}
              >
                <PitcherPageDialog data={d.projectPitcherPage} state={state} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewProjects;
