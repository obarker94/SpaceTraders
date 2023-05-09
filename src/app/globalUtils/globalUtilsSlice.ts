import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IGlobalUtilsState {
  refetch: boolean;
}

const initialState: IGlobalUtilsState = {
  refetch: false,
};

export const globalUtilsSlice = createSlice({
  name: `globalUtilsSlice`,
  initialState,
  reducers: {
    setGlobalRefetch: (
      state: IGlobalUtilsState,
    ) => {
      state.refetch = !state.refetch;
    },
  },
});

export const { setGlobalRefetch } = globalUtilsSlice.actions;

export const selectGlobalUtilsState = (state: RootState) =>
  state.globalUtils;

export default globalUtilsSlice.reducer;
