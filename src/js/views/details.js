import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  console.log(params);

  const getData = async () => {
    const API_URL = "https://www.swapi.tech/api";
    try {
      const response = await fetch(`${API_URL}/${params.type}/${params.id}`);

      if (response.ok == true) {
        const body = await response.json();
        setData(body.result);
      } else {
        const error = response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log("Error status: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, [params.type, params.id]);

  return (
    <React.Fragment>
      {data.properties ? (
        <div className="d-flex align-items-center justify-content-center">
          {params.type == "people" ? (
            <div className="jumbotron p-4" style={{ width: "65vw" }}>
              <div className="d-flex align-items-center justify-content-evenly flex-row">
                <div>
                  <img
                    style={{ height: "350px", borderRadius: "10px" }}
                    src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                  />
                </div>
                <div>
                  <h1 className="display-4">{data.properties.name}</h1>
                  <p className="lead">{data.description}</p>
                </div>
              </div>
              <hr className="my-4" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mollis tempus tortor, quis bibendum tellus luctus vitae. Integer
                tempor lorem lectus, sed lacinia urna porta ac. In ac arcu
                cursus, feugiat elit quis, aliquam lacus. Morbi imperdiet
                finibus tellus vitae feugiat. Fusce lorem enim, commodo eu ex
                ut, condimentum mattis orci.
              </p>
              <div className="d-flex align-items-center justify-content-center flex-row">
                <p className="bg-light text-dark p-3">
                  <b>Name:</b> {data.properties.name}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Birth Year:</b> {data.properties.birth_year}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Gender:</b> {data.properties.gender}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Height:</b> {data.properties.height}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Skin Color:</b> {data.properties.skin_color}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Eye Color:</b> {data.properties.eye_color}{" "}
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/">
                  <button type="button" className="btn btn-dark">
                    Back home!
                  </button>
                </Link>
              </div>
            </div>
          ) : params.type == "planets" ? (
            <div className="jumbotron p-4" style={{ width: "65vw" }}>
              <div className="d-flex align-items-center justify-content-evenly flex-row">
                <div>
                  <img
                    style={{ height: "350px", borderRadius: "10px" }}
                    src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
                  />
                </div>
                <div>
                  <h1 className="display-4">{data.properties.name}</h1>
                  <p className="lead">
                    {data.description} One of many in the Star Wars universe
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mollis tempus tortor, quis bibendum tellus luctus vitae. Integer
                tempor lorem lectus, sed lacinia urna porta ac. In ac arcu
                cursus, feugiat elit quis, aliquam lacus. Morbi imperdiet
                finibus tellus vitae feugiat. Fusce lorem enim, commodo eu ex
                ut, condimentum mattis orci.
              </p>
              <div className="d-flex align-items-center justify-content-center flex-row">
                <p className="bg-light text-dark p-3">
                  <b>Name:</b> {data.properties.name}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Population:</b> {data.properties.population}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Diameter:</b> {data.properties.diameter}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Climate:</b> {data.properties.climate}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Terrain:</b> {data.properties.terrain}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Gravity:</b> {data.properties.gravity}{" "}
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/">
                  <button type="button" className="btn btn-dark">
                    Back home!
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="jumbotron p-4" style={{ width: "65vw" }}>
              <div className="d-flex align-items-center justify-content-evenly flex-row">
                <div>
                  <img
                    style={{ height: "300px", borderRadius: "10px" }}
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                  />
                </div>
                <div>
                  <h1 className="display-4">{data.properties.name}</h1>
                  <p className="lead">
                    {data.description}. One of many in the Star Wars universe
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mollis tempus tortor, quis bibendum tellus luctus vitae. Integer
                tempor lorem lectus, sed lacinia urna porta ac. In ac arcu
                cursus, feugiat elit quis, aliquam lacus. Morbi imperdiet
                finibus tellus vitae feugiat. Fusce lorem enim, commodo eu ex
                ut, condimentum mattis orci.
              </p>
              <div className="d-flex align-items-center justify-content-center flex-row">
                <p className="bg-light text-dark p-3">
                  <b>Name:</b> {data.properties.name}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Model:</b> {data.properties.model}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Vehicle Class:</b> {data.properties.vehicle_class}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Manufacturer:</b> {data.properties.manufacturer}{" "}
                </p>
                <p className="bg-light text-dark p-3">
                  <b>Cargo Capacity:</b> {data.properties.cargo_capacity}{" "}
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/">
                  <button type="button" className="btn btn-dark">
                    Back home!
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center fs-3"
          style={{ height: "40vw" }}
        >
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
