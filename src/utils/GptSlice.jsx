import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptPage: false,
        movieNames: null,
        movieResult: null,
    },
    reducers: { 
        toggleGptPage: (state) => {
            state.showGptPage = !state.showGptPage;
        },
        addGptMovieResults: (state, action) => {
            const {movieNames,movieResult} = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        }

    },
});

export const { toggleGptPage, addGptMovieResults } = GptSlice.actions;
export default GptSlice.reducer;