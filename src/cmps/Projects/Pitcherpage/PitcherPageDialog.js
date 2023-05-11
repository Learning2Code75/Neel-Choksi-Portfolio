import React from "react";
import { Dialog } from "@mui/material";
import { FaHandPointRight } from "react-icons/fa";
import Divider from "@mui/material/Divider";
const PitcherPageDialog = ({ data, state }) => {
  const [isRespOpen, setIsRespOpen] = React.useState(false);
  const getComp = (t, l) => {
    if (t === "title") {
      return (
        <>
          <Divider />
          <h3
            style={{
              color: `${state.theme.titleColor}`,
              marginTop: "1rem",
              fontSize: "2.6rem",
            }}
          >
            {l}
          </h3>
        </>
      );
    } else if (t === "subtitle") {
      return (
        <h4
          style={{
            marginTop: ".4rem",
            fontSize: "2.3rem",
          }}
        >
          {l}
        </h4>
      );
    } else if (t === "imgurl") {
      return (
        <div
          style={{
            marginTop: ".4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={l}
            style={{
              border: `1px solid ${state.theme.textColor}`,
              borderRadius: ".75rem",
              minWidth: "5rem",
            }}
            alt="pitcher page img"
          />
        </div>
      );
    } else if (t === "text") {
      return (
        <div
          style={{
            marginTop: ".3rem",
            fontSize: "1.8rem",
          }}
        >
          {l}
        </div>
      );
    } else if (t === "listitem") {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: ".3rem",
            fontSize: "2.1rem",
          }}
        >
          <FaHandPointRight
            style={{
              marginRight: "1rem",
            }}
          />
          <span>{l}</span>
        </div>
      );
    } else if (t === "link") {
      return (
        <a
          style={{
            color: `${state.theme.linkColor}`,
            marginTop: ".3rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          href={l}
          target="__blank"
        >
          {l}
        </a>
      );
    }
  };

  return (
    <>
      <button className="btn" onClick={() => setIsRespOpen(true)}>
        Pitcher Page
      </button>

      <Dialog
        variant="outlined"
        fullWidth={true}
        open={isRespOpen}
        onClose={(e, r) => {
          if (r === "backdropClick") {
            setIsRespOpen(!isRespOpen);
          } else {
            setIsRespOpen(!isRespOpen);
          }
        }}
        scroll={"body"}
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            background: `rgba(${state.theme.projectCompBackground.r},${state.theme.projectCompBackground.g},${state.theme.projectCompBackground.b},${state.theme.projectCompBackground.a})`,
            color: `${state.theme.textColor}`,
            width: "100%",
          }}
        >
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {data.map((d) => (
            <div>{getComp(d.title, d.link)}</div>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default PitcherPageDialog;
