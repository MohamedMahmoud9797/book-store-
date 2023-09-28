// bookSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch("http://localhost:3001/books");
      let data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const insertBooks = createAsyncThunk(
  "books/insertBooks",
  async (bookData, { rejectWithValue, getState }) => {
    try {
      console.log(getState().book.books[1]);
      let res = await fetch("http://localhost:3001/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "content-type": "application/json ; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBooks = createAsyncThunk(
  "books/deleteBooks",
  async (id, { rejectWithValue }) => {
    try {
      await fetch(`http://localhost:3001/books/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json ; charset=UTF-8",
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  books: [],
  isLoading: false,
  error: null,
  userName: "ahmed",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  //getBOOKS
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //INSERT
    [insertBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload); // Corrected state update
    },
    [insertBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //DELETE
    [deleteBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((item) => item.id !== action.payload);
      // Corrected state update
    },

    [deleteBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
