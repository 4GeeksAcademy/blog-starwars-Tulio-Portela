import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    store.favorites;
  });

  return (
    <nav
      className="navbar navbar-dark bg-dark d-flex justify-content-between"
      style={{ minHeight: "8vh" }}
    >
      <Link to="/">
        <img
          className="border rounded ms-3"
          src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-symbol.jpg"
          style={{ height: "7vh" }}
        />
      </Link>

      <h1 className="text-light">Star Wars Blog API</h1>

      <div className="dropdown p-2">
        <button
          className="btn bg-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          SW Favorites
        </button>
        <ul className="dropdown-menu">
          {store.favorites.length == 0 ? (
            <li className="d-flex justify-content-between align-items-center">
              <span>No favorites yet. Add some!</span>
            </li>
          ) : (
            store.favorites.map((item, index) => {
              let name = item.name;
              let type = item.type;
              let id = item.uid;
              let img = item.img;

              return (
                <li
                  className="d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/info/${type}/${id}/${img}`}
                  >
                    <p className="hover-effect p-2">{name}</p>
                  </Link>
                  <i
                    className="fas fa-trash me-3 hover-delete"
                    onClick={(event) => {
                      actions.deleteFavorites(type, id);
                    }}
                  ></i>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </nav>
  );
};
