import { LOADING, SEARCH_BOOKS } from "../actions";

const initialState = {
  books: {},
};

//TODO move localstorage handling to redux middleware
//https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app

const storageAppState = JSON.parse(localStorage.getItem("appState"));

const setLocalStorage = (newState) =>
  localStorage.setItem("appState", JSON.stringify(newState));

const reducer = (
  state = storageAppState ? storageAppState : initialState,
  action
) => {
  switch (action.type) {
    case LOADING: {
      const newState = {
        ...state,
        loading: true,
      };

      setLocalStorage(newState);
      return newState;
    }

    case SEARCH_BOOKS: {
      const newState = {
        ...state,
        loading: false,
        books: action.payload.books,
      };

      setLocalStorage(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
