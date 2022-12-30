import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="box">
      <div className="cardd">
        <div
          className="card text-center model"
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-header" style={{ borderRadius: "2rem" }}></div>
          <div className="card-body" style={{ borderRadius: "2rem" }}>
            <h5 className="card-title">Laptop Price Predictor</h5>
            <p className="card-text">
              Know the tentative price of laptop according to your
              configurations
            </p>
            <a
              href=""
              className="btn btn-primary"
              onClick={() => {
                navigate("/laptopPricePredictor");
              }}
            >
              Go There
            </a>
          </div>
          <div
            className="card-footer text-muted"
            style={{ borderRadius: "2rem" }}
          ></div>
        </div>
      </div>

      <div className="cardd">
        <div
          className="card text-center model"
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-header" style={{ borderRadius: "2rem" }}></div>
          <div className="card-body" style={{ borderRadius: "2rem" }}>
            <h5 className="card-title">House Price Predictor</h5>
            <p className="card-text">
              Know the real time prices of houses in Bengaluru at defferent
              cities
            </p>
            <a
              href=""
              className="btn btn-primary"
              onClick={() => {
                navigate("/housePricePredictor");
              }}
            >
              Go There
            </a>
          </div>
          <div
            className="card-footer text-muted"
            style={{ borderRadius: "2rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
