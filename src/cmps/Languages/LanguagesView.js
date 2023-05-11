import React from "react";

const LanguagesView = ({ state }) => {
  return (
    <>
      <h2>Languages</h2>
      <div
        className={state.ui}
        style={{
          background: `rgba(${state.theme.langCompBackground.r},${state.theme.langCompBackground.g},${state.theme.langCompBackground.b},${state.theme.langCompBackground.a})`,
          color: `${state.theme.textColor}`,
        }}
      >
        <div className={"langGrid1"}>
          {state.skills.map((sk) => (
            <div className="langGrid1Item">
              <h3
                style={{
                  color: `${state.theme.titleColor}`,
                }}
              >
                {sk.title}
              </h3>
              <div className={"langGrid2"}>
                {sk.values.map((v) => (
                  <div className="langGrid2Item">{v}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguagesView;
