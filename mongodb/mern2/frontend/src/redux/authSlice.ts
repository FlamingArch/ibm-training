import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import authService from './authService'
// NOTE: use a extractErrorMessage function to save some repetition
import { extractErrorMessage } from './utils'

// Get user from localstorage
const user = JSON.parse(<any>localStorage.getItem('user'))

// NOTE: remove isSuccess from state as we can infer from
// presence or absence of user
// There is no need for a reset function as we can do this in our pending cases
// No need for isError or message as we can catch the AsyncThunkAction rejection
// in our component and we will have the error message there
const initialState = {
  user: user ? user : null,
  isLoading: false,
}

// Register new user
export const register = createAsyncThunk<any,any>(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Login user
export const login = createAsyncThunk<any,any>('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})


export const logout = createAction('auth/logout')

// NOTE: in cases of login or register pending or rejected then user will
// already be null so no need to set to null in these cases

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(login.pending, (state) => {
        state.isLoading = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default authSlice.reducer
