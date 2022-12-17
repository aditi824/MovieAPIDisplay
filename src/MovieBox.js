import "./MovieBox.css";
import { Modal, show, Button } from "react-bootstrap";
import React, { useState } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="card text-center shadow">
      <div className="card-body">
        <div className="pos">
          <div className="circle">{vote_average}</div>
          <img
            className=" test card-img-top"
            // style={{ width: "15rem", height: "17rem" }}
            src={API_IMG + poster_path}
            // onClick={() => setShowOverlay(true)}
          />
        </div>

        <div className="card-body">
          <button type="button" className="btn " onClick={handleShow}>
            <p className="title">{title}</p>
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4 className="">{title}</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex">
              <img
                className="card-img-top p-2"
                style={{ width: "19rem", height: "19rem" }}
                src={API_IMG + poster_path}
              />
              <div className="p-2">
                <h5>Release Date: {release_date}</h5>
                {/* <br></br> */}
                <h6>Overview</h6>
                <p>{overview}</p>
                <h6>IMDb: {vote_average}</h6>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer> */}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
