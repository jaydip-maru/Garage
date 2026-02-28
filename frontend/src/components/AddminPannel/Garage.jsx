import { Link } from "react-router-dom";

function Garage({ name, city, url, dis, country, price, id }) {

  
  return (
    <>
      <div className="col-md-4 mb-3 mt-1" >
    <Link to={`garage/${id}`} style={{textDecoration: "none"}}>
        <div className="card col listing-card" >
          <img
            src={url ? url : null}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "17rem" }}
          />
          <div className="card-img-overlay"></div>
          <div className="card-body">
            <p className="card-text">
              <b className="title">{name} </b> <br />$ {price}/ Service
            </p>
          </div>
        </div>
      </Link>
      </div>
    </>
  );
}

export default Garage;
