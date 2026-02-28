import "./ProblemSolution.css";
// import { FaExclamationTriangle, FaTools, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function ProblemSolution() {
  return (
    <section className="ps-section">
      <h2 className="ps-title">Problem & Solution</h2>

      <div className="ps-container">
        

        <div className="ps-card problem">
          {/* <FaExclamationTriangle size={40} className="icon" /> */}
          <h3>Problem</h3>

          <ul>
            <li>Vehicle breakdowns leave users stranded.</li>
            <li>No quick way to find nearby mechanics.</li>
            <li>Manual searching wastes time.</li>
            <li>No real-time service availability.</li>
          </ul>
        </div>


        <div className="ps-card solution">
          {/* <FaTools size={40} className="icon" /> */}
          <h3>Our Solution</h3>

          <ul>
            <li>Request mechanic instantly.</li>
            <li>Nearby garages get real-time alerts.</li>
            <li>Mechanics toggle availability.</li>
            <li>Fast and reliable assistance.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default ProblemSolution;