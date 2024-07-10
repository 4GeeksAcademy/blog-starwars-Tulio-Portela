import React, { useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const FavoriteIcon = ({ id, type, isFavorite }) => {
  const { store, actions } = useContext(Context);

  const toggleFavorite = () => {
    if (isFavorite) {
      actions.removeFavorite(id);
    } else {
      actions.addFavorite(id);
    }
  };

  return (
    <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
      {isFavorite ? (
        <i className="fas fa-star" style={{ color: "gold" }}></i>
      ) : (
        <i className="far fa-star"></i>
      )}
    </div>
  );
};

export const Details = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.type && params.id) {
      actions.getDetails(params.type, params.id);
    }
  }, [params.type, params.id]);

  const data = store.details;

  useEffect(() => {
    if (!data) {
      history.push("/");
    }
  }, [data, history]);

  return (
    <React.Fragment>
      {data && data.properties ? (
        <div className="d-flex align-items-center justify-content-center">
          <div className="jumbotron p-4" style={{ width: "65vw" }}>
            <div className="d-flex align-items-center justify-content-evenly flex-row">
              <div>
                <img
                  style={{ height: "350px", borderRadius: "10px" }}
                  src={`https://starwars-visualguide.com/assets/img/${params.type}/${params.id}.jpg`}
                  alt={data.properties.name}
                />
              </div>
              <div>
                <h1 className="display-4">
                  {data.properties.name}{" "}
                  <FavoriteIcon
                    id={params.id}
                    type={params.type}
                    isFavorite={store.favorites.includes(params.id)}
                  />
                </h1>
                <p className="lead">{data.description}</p>
              </div>
            </div>
            <hr className="my-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mollis tempus tortor, quis bibendum tellus luctus vitae. Integer
              tempor lorem lectus, sed lacinia urna porta ac. In ac arcu cursus,
              feugiat elit quis, aliquam lacus. Morbi imperdiet finibus tellus
              vitae feugiat. Fusce lorem enim, commodo eu ex ut, condimentum
              mattis orci.
            </p>
            <div className="d-flex align-items-center justify-content-center flex-row">
              <p className="bg-light text-dark p-3">
                <b>Name:</b> {data.properties.name}{" "}
              </p>
              {params.type === "people" && (
                <>
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
                </>
              )}
              {params.type === "planets" && (
                <>
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
                </>
              )}
              {params.type === "vehicles" && (
                <>
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
                </>
              )}
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/">
                <button type="button" className="btn btn-dark">
                  Back home!
                </button>
              </Link>
            </div>
          </div>
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
