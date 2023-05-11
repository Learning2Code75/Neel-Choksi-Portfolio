import React from "react";

const InterestsView = ({ state }) => {
  return (
    <>
      <h2>
        <span>My</span> Interests
      </h2>
      <div
        className={state.ui}
        style={{
          background: `rgba(${state.theme.interestsCompBackground.r},${state.theme.interestsCompBackground.g},${state.theme.interestsCompBackground.b},${state.theme.interestsCompBackground.a})`,
          color: `${state.theme.textColor}`,
        }}
      >
        <div className={"interestsGrid1"}>
          {state.skills.map((s) => (
            <div className={"interestsGrid1Item"}>
              <h3
                style={{
                  color: `${state.theme.titleColor}`,
                }}
              >
                {s.title}
              </h3>
              <div className="interestsGrid2">
                {s.values.map((v) => (
                  <div className="interestsGrid2Item">{v}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InterestsView;
