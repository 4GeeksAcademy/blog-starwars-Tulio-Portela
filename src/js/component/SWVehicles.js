import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function SWVehicles() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <React.Fragment>
      <h2 className="header p-3 m-0 ms-4">Vehicles</h2>
      <div className="d-flex flex-row flex-nowrap ms-3 me-3" style={{ overflowX: "scroll" }}>
        {store.vehicles.map((element, indexMap) => (
          <div className="card m-3" style={{ minWidth: "25vw" }} key={indexMap}>
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${element.uid}.jpg`}
              className="card-img-top img-thumbnail"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <p className="card-text">One of many vehicles in the Star Wars universe</p>
              <Link to={`/details/vehicles/${element.uid}`}>
                <button type="button" className="btn btn-dark">Learn more!</button>
              </Link>
              <button
                onClick={() => actions.addFavorites(element.name, "vehicles", element.uid, "vehicles")}
                type="button"
                className="btn btn-outline-warning float-end"
              >
                ♥
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
