import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCoins, sortCoins , searchCoins} from './urlAPI';


const initialState = {
  coins: Array,
  stats:Object,
  status: false,
  curentPage: Number,
  totalPage: Number,
};

const setTotalPage = (total) => {
  var mod = total%50;
  if (mod != 0){
    return (total-mod)/50+1;
  }else{
    return total/50;
  }
}
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getListCoins(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getListCoins = createAsyncThunk(
  'coins/fetchCoins',
  async (page) => {
    const response = await fetchCoins(page*50);
    if (response.ok) {
      const jsonData =  response.json();
      return jsonData;
    }
   }

);

export const getSortCoins = createAsyncThunk(
  'coins/sortCoins',
  async (order) => {
    const response = await sortCoins(order);
    if (response.ok) {
      const jsonData =  response.json();
      return jsonData;
    }
   }

);

export const getSearchCoins = createAsyncThunk(
  'coins/searchCoins',
  async (search) => {
    const response = await searchCoins(search);
    if (response.ok) {
      const jsonData =  response.json();
      return jsonData;
    }
   }

);

export const listCoinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.curentPage += 1;
    },
    PrePage: (state) => {
      state.curentPage -= 1;
    },

    setCurentPage: (state, action) => {
        state.curentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListCoins.pending, (state) => {
        state.status = false;
      })
      .addCase(getListCoins.fulfilled, (state, action) => {
        state.status = true;
        state.coins = action.payload.data.coins;
        state.stats = action.payload.data.stats;
        state.totalPage= setTotalPage(action.payload.data.stats.total);
      //    state.curentPage=1;
      })

      .addCase(getSortCoins.pending, (state) => {
        state.status = false;
      })
      .addCase(getSortCoins.fulfilled, (state, action) => {
        state.status = true;
        state.coins = action.payload.data.coins;
        state.totalPage= setTotalPage(action.payload.data.stats.total);
      //    state.curentPage=1;
      })

      .addCase(getSearchCoins.pending, (state) => {
        state.status = false;
      })
      .addCase(getSearchCoins.fulfilled, (state, action) => {
        state.status = true;
        state.coins = action.payload.data.coins;
        state.totalPage= setTotalPage(action.payload.data.stats.total);
      //    state.curentPage=1;
      });
  },
});

export const { nextPage, PrePage, setCurentPage } = listCoinsSlice.actions;

export const selectCoins = (state) => state.coins.coins;
export const selectStatus = (state) => state.coins.status;
export const selectStats = (state) => state.coins.stats;
export const selectTotalPage = (state) => state.coins.totalPage;
export const selectCurentPage = (state) => state.coins.curentPage;


export default listCoinsSlice.reducer;
