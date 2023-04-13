import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: IInitialState = {
  data: "",
  loading: false,
  error: null,
};

export const getSearcedData = createAsyncThunk("/getSearcedData", async () => {
  const url = "";
  return fetch(url).then((res) => res.json());
});

export const searchProductsReducer = createSlice({
  name: "searchProductsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearcedData.fulfilled, (state, action) => {
      console.log("Data", action.payload);
    });
  },
});
