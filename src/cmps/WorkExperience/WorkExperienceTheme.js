import React from "react";
import { ChromePicker, SketchPicker } from "react-color";

const WorkExperienceTheme = ({ state, setState }) => {
  return (
    <div className="themeGrid">
      <div className="tgComp">
        <h3>Work Experience Background</h3>
        {/* <button className="btn-sm" onClick={homeThemeChange}>Change</button> */}
        <SketchPicker
          color={state.theme.workexpCompBackground}
          onChange={(newColor) => {
            setState({
              ...state,
              theme: {
                ...state.theme,
                workexpCompBackground: newColor.rgb,
              },
            });
            // console.log(HomeCompData)
          }}
        />
      </div>
      <div className="tgComp">
        <h3>Title Color</h3>
        {/* <button className="btn-sm" onClick={positionThemeChange}>Change</button> */}
        <ChromePicker
          color={state.theme.titleColor}
          onChange={(newColor) =>
            setState({
              ...state,
              theme: {
                ...state.theme,
                titleColor: newColor.hex,
              },
            })
          }
        />
      </div>
      <div className="tgComp">
        <h3>Text Color</h3>
        {/* <button className="btn-sm" onClick={nameThemeChange}>Change</button> */}
        <ChromePicker
          color={state.theme.textColor}
          onChange={(newColor) =>
            setState({
              ...state,
              theme: { ...state.theme, textColor: newColor.hex },
            })
          }
        />
      </div>
      <div className="tgComp">
        <h3>URL Color</h3>
        {/* <button className="btn-sm" onClick={nameThemeChange}>Change</button> */}
        <ChromePicker
          color={state.theme.linkColor}
          onChange={(newColor) =>
            setState({
              ...state,
              theme: { ...state.theme, linkColor: newColor.hex },
            })
          }
        />
      </div>
      <div className="tgComp">
        <h3>Select User Interface </h3>
        <button
          className="btn-sm"
          onClick={() => {
            setState({ ...state, ui: "workexpCompUI1" });
          }}
        >
          UI 1
        </button>
        <button
          className="btn-sm"
          onClick={() => {
            setState({ ...state, ui: "workexpCompUI2" });
          }}
        >
          UI 2
        </button>
        <button
          className="btn-sm"
          onClick={() => {
            setState({ ...state, ui: "workexpCompUI3" });
          }}
        >
          UI 3
        </button>
        <button
          className="btn-sm"
          onClick={() => {
            setState({ ...state, ui: "workexpCompUI4" });
          }}
        >
          UI 4
        </button>
      </div>
    </div>
  );
};

export default WorkExperienceTheme;
