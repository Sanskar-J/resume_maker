import "./Agartha.css";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
const Agartha = () => {
  const handleClick = () => {
    const toPDF = document.getElementById("toPDF");
    toPDF.style.width="50vw";
    html2canvas(toPDF, { useCORS: true }).then((canvas) => {

      let a = document.createElement("a");
      document.body.appendChild(a);
      a.download = "test.png";
      a.href = canvas.toDataURL();
      a.click();
      toPDF.style.width="100vw";
    });

    console.log("mai chala");
  };
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>
      <div className="out">
        <div className="extreme" id="toPDF">
          <div className="outer" >
            <div className="container">
              <div className="top">
                <h1 className="Name">{data.name}</h1>
                <h3 className="upper" style={{
                  paddingTop:'5px',
                  paddingBottom:'5px'
                }}>
                  {data.phone} | {data.email} <br /> {data.address}
                </h3>
              </div>
              <div className="bottom">
                <div className="education">
                  <h3>Education</h3>
                  <h4>{data.education}</h4>
                </div>
                <div className="skill">
                <h3>Skills</h3>
                  <h4>{data.skill}</h4>
                </div>
                <div className="work"> 
                  <h3>Work History</h3>
                  <h4>{data.whistory}</h4>
                </div>
                <div className="proSum">
                  <h3>Professional Summary</h3>
                  <h4>{data.psummary}</h4>
                </div>
                <div className="certificate">
                <h3>Certificate</h3>
                  <h4>{data.certificate}</h4> 
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
