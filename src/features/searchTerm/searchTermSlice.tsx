import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"


interface searchTermState {
  value: string;
}

const initialState: searchTermState = {
  value: ''
}

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
      setSearchTerm(state, action: PayloadAction<string>) {
        state.value = action.payload
      },
      clearSearchTerm(state, action: PayloadAction<string>) {
        state.value = ""
      }
  }
})

export const searchTermActions = searchTermSlice.actions;
export const searchTermReducer = searchTermSlice.reducer;

// export const selectCount = (state: RootState) => state.searchTerm.value

// export default searchTermSlice.reducer

// export const searchTermReducer = (state = initialState, action: PayloadAction<string>) => {
//   switch (action.type) {
//     case 'searchTerm/setSearchTerm': {
//       const newTerm = action.payload;
//       return newTerm;
//     }
//     case 'searchTerm/clearSearchTerm': {
//       return '';
//     }
//     default: {
//       return state;
//     }
//   }
// }


// export const setSearchTerm = (term: string) => {
//   return {
//     type: 'searchTerm/setSearchTerm',
//     payload: term
//   }
// }

// export const clearSearchTerm = (term: string) => {
//   return {
//     type: 'searchTerm/clearSearchTerm',
//     payload: term
//   }
// }

