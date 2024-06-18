import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles } from "../../api/newsApi";

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async ({ category, page }) => {
    const response = await fetchArticles(category, page);
    return response;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
