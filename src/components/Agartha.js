import "./Agartha.css";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
const Agartha = () => {
  let c = 0;
  let l=0;
  let j = 1;
  let dl1 = false;
  let dl2 = false;
  let dl3 = false;
  const [color, setColor] = useColor("hex", "#121212");
  const handleColor = (event) => {
    const t = event.target.id;
    const stackTop = document.getElementById("stackTop");
    const stackMid = document.getElementById("stackMid");
    const stackBot = document.getElementById("stackBot");
    const Name = document.querySelector(".Name");
    const upper = document.querySelector(".upper");
    const outer = document.querySelector(".outer");

    if (t === "stackTop") {
      if (dl1 === false) {
        stackTop.classList.add("change");
        Name.classList.add("change");
        Name.style.removeProperty("background-color");
        dl1 = true;
      } else {
        stackTop.classList.remove("change");
        Name.classList.remove("change");
        Name.style.backgroundColor = color.hex;
        dl1 = false;
      }
    }
    if (t === "stackMid") {
      if (dl2 === false) {
        stackMid.classList.add("change");
        upper.classList.add("change");
        upper.style.removeProperty("background-color");
        dl2 = true;
      } else {
        stackMid.classList.remove("change");
        upper.classList.remove("change");
        upper.style.backgroundColor = color.hex;
        dl2 = false;
      }
    }
    if (t === "stackBot") {
      if (dl3 === false) {
        stackBot.classList.add("change");

        outer.classList.add("change");
        outer.style.removeProperty("background-color");
        dl3 = true;
      } else {
        stackBot.classList.remove("change");
        outer.classList.remove("change");
        outer.style.backgroundColor = color.hex;
        dl3 = false;
      }
    }
  };
  const handleClick = () => {
    const toPDF = document.getElementById("toPDF");
    toPDF.style.width = "50vw";
    html2canvas(toPDF, { useCORS: true }).then((canvas) => {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.download = "test.png";
      a.href = canvas.toDataURL();
      a.click();
      toPDF.style.width = "100vw";
    });

    console.log("mai chala");
  };

  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>
      <div className="out">
        <style> {`.change{background-color:` + color.hex + `;}`}</style>
        <ColorPicker
          width={456}
          height={456}
          color={color}
          onChange={setColor}
          hideHSV
          dark
        />
        ;
        <div className="btnColors">
          <button id="stackTop" onClick={handleColor}></button>
          <button id="stackMid" onClick={handleColor}></button>
          <button id="stackBot" onClick={handleColor}></button>
        </div>
        <div className="extreme" id="toPDF">
          <div className="outer">
            <div className="contr">
              <div className="top">
                <h1 className="Name">{data.name}</h1>
                <h3
                  className="upper"
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  {data.phone} | {data.email} <br /> {data.address}
                </h3>
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="education">
                    <h3>Education</h3>
                    {data.education.degname.map((ed) => {
                      return (
                        <>
                        <h4>
                          {ed}</h4> 
                          <h4>{data.education.startD[c]}{" to "}
                          {data.education.endD[c++]}
                        </h4>
                        </>
                      );
                    })}
                  </div>
                  <div className="skill">
                    <h3>Skills</h3>
                    {data.skill.sk.map((s) => {
                      return (
                        <h4>
                          {"•"} {s}{" "}
                        </h4>
                      );
                    })}
                  </div>
                </div>
                <div className="right">
                  <div className="work">
                    <h3>Work History</h3>
                    
                    {data.whistory.job.map((wh) => {
                      return (
                        <>
                          <h3 className="jobTitle">{wh}</h3>
                          <h4>{data.whistory.jd[l]}</h4>{" "}<h4>{data.whistory.jobstartD[l]}{" to "}
                          {data.whistory.jobendD[l++]}</h4>
                        </>
                      );
                    })}
                  </div>
                  <div className="proSum">
                    <h3>Professional Summary</h3>
                    <h4>{data.psummary}</h4>
                  </div>
                  <div className="achievement">
                    <h3>Achievements</h3>
                    {data.achievement.ach.map((ac) => {
                      return (
                        <h4>
                          {"•"} {ac}{" "}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="certificate">
                    <h3>Certificate</h3>
                    <h4>{"•"}{data.certificate}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pdfBtn">
          <button onClick={handleClick}>Download</button>
        </div>
      </div>
    </>
  );
};

export default Agartha;
