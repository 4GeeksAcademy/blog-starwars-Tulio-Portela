import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // Essa linha não faz nada útil, pode ser removida ou ajustada.
    // store.favorites;
  }, [store.favorites]);

  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-between" style={{ minHeight: "8vh" }}>
      <Link to="/">
        <img className="border rounded ms-3" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-symbol.jpg" style={{ height: "7vh" }} />
      </Link>

      <h1 className="text-light">Star Wars Blog API</h1>

      <div className="dropdown p-2">
        <button className="btn bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          SW Favorites
        </button>
        <ul className="dropdown-menu">
          {store.favorites.length === 0 ? (
            <li className="d-flex justify-content-between align-items-center">
              <span>No favorites yet. Add some!</span>
            </li>
          ) : (
            store.favorites.map((item, index) => (
              <li className="d-flex justify-content-between align-items-center" key={index}>
                <Link className="text-decoration-none text-dark" to={`/info/${item.type}/${item.uid}/${item.img}`}>
                  <p className="hover-effect p-2">{item.name}</p>
                </Link>
                <i className="fas fa-trash me-3 hover-delete" onClick={() => actions.deleteFavorites(item.type, item.uid)}></i>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

