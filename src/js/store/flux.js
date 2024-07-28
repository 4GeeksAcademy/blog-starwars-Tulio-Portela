const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
		characters: [],
		planets: [],
		vehicles: [],
		details: null // Adiciona o estado de detalhes aqui
	  },
	  actions: {
		addFavorites: (name, type, uid, img) => {
		  const store = getStore();
		  if (store.favorites.some(fav => fav.uid === uid && fav.type === type)) return;
  
		  const newFavorite = { name, type, uid, img };
		  setStore({ favorites: [...store.favorites, newFavorite] });
		},
		deleteFavorites: (type, uid) => {
		  const store = getStore();
		  setStore({ favorites: store.favorites.filter(fav => !(fav.type === type && fav.uid === uid)) });
		},
		getCharacters: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/people");
			const body = await response.json();
			setStore({ characters: body.results });
		  } catch (error) {
			console.error("Error fetching characters:", error);
		  }
		},
		getPlanets: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/planets");
			const body = await response.json();
			setStore({ planets: body.results });
		  } catch (error) {
			console.error("Error fetching planets:", error);
		  }
		},
		getVehicles: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/vehicles");
			const body = await response.json();
			setStore({ vehicles: body.results });
		  } catch (error) {
			console.error("Error fetching vehicles:", error);
		  }
		},
		getDetails: async (type, id) => { // Adiciona a função getDetails
		  try {
			const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
			const body = await response.json();
			setStore({ details: body.result });
		  } catch (error) {
			console.error("Error fetching details:", error);
		  }
		}
	  }
	};
  };
  
  export default getState;
  