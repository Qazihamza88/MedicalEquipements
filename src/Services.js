import React from "react";
import BED from "./images/Bed.jpeg";
import  Oc from "./images/OxygenCylinder.png";
import Surgical from "./images/SURGICALBLADES.jpg";
import Scissors from "./images/Scissors.jpg";
import  Sbone from "./images/Surgicalbonecutter.png";
import  AT from "./images/anesthesiatable.jpg";
import  GTABLE from "./images/generalot-table.jpg";
import  IMG from "./images/operation.jpg";
import  Otl from "./images/operationtheaterlights.png";

function Services() {
  return (
    <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
      <div  className="container" style={{ backgroundColor: "gray", padding: "10px" }}>
        <div style={{paddingBottom:"20px"}}>
        <h1 style={{backgroundColor:"red", width:"400px", height:"50px"}}>Most Seller Products</h1>    
        </div>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <img
                src={Oc}
                alt="Service 1"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
              <h3> Oxygen Cylinder </h3>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                <p> A vital component in healthcare oxygen cylinders ensure 
                 patients receive the oxygen they need for optimal recovery and treatment
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={Otl}
                alt="Service 2"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
              <h3>Surgical Lights</h3>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                <p>
                "Operation lights, also known as surgical lights, illuminate surgical 
                fields with precision, ensuring optimal visibility during procedures."
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={Sbone}
                alt="Service 3"
                style={{
                  width: "317px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
              <h3> Bone Cutter </h3>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                <p>
                "Bone cutters are specialized surgical instruments
                 designed to precisely sever bones during orthopedic procedures."
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <img
                src={AT}
                alt="Service 1"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
               <h3> Anesthesia Table</h3>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}>
                <p>
                "Anesthesia tables are essential fixtures in operating rooms, providing a stable and 
                adjustable platform for administering anesthesia during surgical procedures."
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={GTABLE}
                alt="Service 2"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
               <h3> Generalot Table</h3>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                <p>
                "A General OT, versatile medical equipment, adjusts to accommodate diverse 
                surgical procedures, ensuring precise patient positioning for surgery."
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={IMG}
                alt="Service 3"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
               <h3>Operation Theater Bed</h3>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}>
                <p>"An operating theater bed provides adjustable configurations, 
                  ensuring optimal patient positioning for surgical procedures."
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <img
                src={Scissors}
                alt="Service 1"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",}}/>
               <h4>Scissors Used in Operation</h4>
               <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                <p>
                "Surgical scissors, essential tools in operations, offer precision
                 cutting for various procedures, ensuring accuracy and efficiency."
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={Surgical}
                alt="Service 1"
                style={{width: "300px",height: "300px",marginBottom: "20px",}}/>
               <h4>Surgical Blades</h4>
               <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}>
                <p>
                "Surgical blades, critical instruments in operations, provide precise 
                incisions for surgical procedures, ensuring accuracy and safety."
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={BED}
                alt="Service 1"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
               <h4>Operation Theater Room</h4>
               <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
              <p>           
                "The operation theater room is a sterile environment equipped with advanced 
                technology for surgical procedures, ensuring optimal patient care and safety."
              </p>
              </div>
            </div>
          </div>
       </div>
       </div>
     </div>
  );
}

export default Services;
