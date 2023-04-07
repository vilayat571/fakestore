import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: IInitialState = {
  data: "",
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const url = "";
  
});

export const fetchProductsReducer = createSlice({
  name: "fetchProductsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default fetchProductsReducer.reducer;
