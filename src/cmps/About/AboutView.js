import React from "react";

const AboutView = ({ state, setState }) => {
  return (
    <div
      className={state.ui}
      style={{
        background: `rgba(${state.theme.aboutCompBackground.r},${state.theme.aboutCompBackground.g},${state.theme.aboutCompBackground.b},${state.theme.aboutCompBackground.a})`,
        color: `${state.theme.textColor}`,
      }}
    >
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className={"aboutGrid1"}>
        <h3
          style={{
            color: `${state.theme.titleColor}`,
          }}
          className={"aboutGrid1Item"}
        >
          {state.currPos}
        </h3>
        <p className={"aboutGridItem1"}>{state.desc}</p>
      </div>

      <div className={"aboutGrid2"}>
        {state.skills.map((s) => (
          <div className={"aboutGrid2Item"}>
            <h4
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              {s.title}
            </h4>
            <div>
              {s.values.map((v) => (
                <div>{v}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutView;
