import React from "react";

const CertificateView = ({ state, setState, data }) => {
  return (
    <>
      <h2 class="heading">
        My <span>Certifications</span>
      </h2>
      <div
        className={state.ui}
        style={{
          background: `rgba(${state.theme.certCompBackground.r},${state.theme.certCompBackground.g},${state.theme.certCompBackground.b},${state.theme.certCompBackground.a})`,
          color: `${state.theme.textColor}`,
        }}
      >
        <div className="certGrid1">
          {data.map((d) => (
            <div
              className="certGrid1Item"
              // style={{
              //   border: `1px solid ${state.theme.textColor}`,
              // }}
              style={{
                maxWidth: "90vw",
              }}
            >
              <h3
                style={{
                  color: `${state.theme.titleColor}`,
                  flexWrap: "wrap",
                  overflowX: "scroll",
                  maxWidth: "75vw",
                }}
              >
                {d.title}
              </h3>
              <div className="certGrid1ItemOrg">{d.organization}</div>

              <p>{d.other}</p>
              <div className="certGrid1ItemFromTo">
                <div>
                  From :<br />
                  {d.from}
                </div>
                <div>
                  To :<br />
                  {d.to}
                </div>
              </div>
              <a
                href={d.link}
                target="__blank"
                style={{
                  color: `${state.theme.linkColor}`,
                }}
              >
                {"Link to Certificate"}
              </a>
            </div>
          ))}
        </div>

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </>
  );
};

export default CertificateView;
