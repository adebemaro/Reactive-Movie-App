import Hero from "./Hero";
import { Link } from "react-router-dom";

const NotfoundView = () => {
  return (
    <>
      <Hero text="Oops Not Found" />
      <div className="contaner">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 col-md-4 col-3 my-4">
            <div className="card">
              <img
                src="https://getpaidstock.com/tmp/[GetPaidStock.com]-6304ef4dcff93.jpg"
                className="card-img-top"
                alt="not found"
              />
              <div className="card-body">
                <h2 className="card-title">Notfound</h2>
                <p className="card-text"></p>
                <Link to="/" className="btn btn-lg btn-primary text-center">
                  Go To Homepage
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};
export default NotfoundView;
