import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, goitApi, setToken } from "../../config/goitApi";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/signup", credentials);
      if (data.token) {
        setToken(data.token);
      }
      return data;
    } catch (error) {
      console.error("Registration error:", error.response?.data);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/login", credentials);
      if (data.token) {
        setToken(data.token);
      }
      return data;
    } catch (error) {
      console.error("Login error:", error.response?.data);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goitApi.post("/users/logout");
      clearToken();
    } catch (error) {
      console.error("Logout error:", error.response?.data);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Logout failed"
      );
    }
  }
);

export const getMeThunk = createAsyncThunk(
  "auth/getMe",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("Token does not exist");
    }

    try {
      setToken(savedToken);
      const { data } = await goitApi.get("/users/current");
      return data;
    } catch (error) {
      clearToken();
      console.error("Get me error:", error.response?.data);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch user data"
      );
    }
  }
);
