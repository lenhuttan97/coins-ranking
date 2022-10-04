import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPICoinDetail } from './urlAPI';


const initialState = {
  detail: Object,
  status: false,
};

export const getCoinDetail = createAsyncThunk(
  'coins/fetchCoinDetail',
  async (uuid) => {
    const response = await getAPICoinDetail(uuid);
    if (response.ok) {
      const jsonData =  response.json();
      return jsonData;
    }
   }
);

export const CoinDetailSlice = createSlice({
  name: 'coin-detail',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCoinDetail.pending, (state) => {
        state.status = false;
      })
      .addCase(getCoinDetail.fulfilled, (state, action) => {
       
        // console.log(action.payload.data.coin)
        state.detail=action.payload.data.coin;
         state.status = true;
      });
  },
});


export const selectCoinDetail = (state) => state.coinDetail.detail;
export const selectStatus = (state) => state.coinDetail.status;



export default CoinDetailSlice.reducer;
