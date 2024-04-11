import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await fetch('https://723f595a3df84314bb72ce041eae2986.api.mockbin.io/');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearData } = dataSlice.actions;

export const selectData = (state) => state.data.data;

export default dataSlice.reducer;