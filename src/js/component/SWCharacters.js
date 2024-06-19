import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function SWCharacters() {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/people");
      const body = await response.json();
      console.log(body);
      setData(body.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <h2 className="header p-3 m-0 ms-4">Characters</h2>
      <div
        className="d-flex flex-row flex-nonwrap ms-3 me-3"
        style={{ overflowX: "scroll" }}
      >
        {data.map(function (element, indexMap) {
          let name = element.name;
          let type = "people";
          let uid = element.uid;
          let img = "characters";

          return (
            <div
              className="card m-3"
              style={{ minWidth: "25vw" }}
              key={indexMap}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                className="card-img-top img-thumbnail"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  A person within the Star Wars universe
                </p>
                <Link to={`/details/${type}/${uid}`}>
                  <button type="button" className="btn btn-dark">
                    Learn more!
                  </button>
                </Link>
                <button
                  onClick={() => {
                    actions.addFavorites(name, type, uid, img);
                  }}
                  type="button"
                  className="btn btn-outline-warning float-end"
                >
                  ♥
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
