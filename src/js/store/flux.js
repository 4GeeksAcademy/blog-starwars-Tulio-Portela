const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
	  },
	  actions: {
		addFavorites: (filter_name, type, uid, img) => {
		  const store = getStore();
		  let aux = 0;
  
		  store.favorites.map((item) => {
			if (item.name == filter_name) {
			  aux = 1;
			}
		  });
  
		  if (aux == 0)
			setStore({
			  favorites: [
				...store.favorites,
				{ name: filter_name, type: type, uid: uid, img: img },
			  ],
			});
		},
  
		deleteFavorites: (type, uid) => {
		  const store = getStore();
		  const filter_list = store.favorites.filter(
			(item) => item.type != type || item.uid != uid
		  );
		  setStore({ favorites: filter_list });
		  return store.favorites;
		},
	  },
	};
  };
  
  export default getState;
  