import { TOGGLE_SORT, TOGGLE_TAG } from "../actionTypes/actionTypes";

export const initialState = {
  filters: {
    tags: [],
    sort: [],
  }
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAG:
      if (!state.filters.tags.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            tags: [...state.filters.tags, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            tags: state.filters.tags.filter(
              (tag) => tag !== action.payload
            ),
          },
        };
      }
    case TOGGLE_SORT:
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: state.filters.tags.filter(
            (st) => st !== action.payload
          ),
        }
      };
    default:
      return state;
  }
};