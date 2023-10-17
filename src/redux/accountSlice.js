import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'account',
  initialState: {
    balance: 500,
  },
  reducers: {
    deposit: { //якщо мені потрібно додаткову властивість в payload 
      reducer(state, action) {
        state.balance += action.payload;
      },
      prepare(value) {
        return {
          payload: {
            value,
            id: Date.now(),
          },
        };
      },
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;
export const accountReducer = slice.reducer;

// export const deposit = createAction('account/deposit');
// export const withdraw = createAction('account/withdraw');

// export const accountReducer = createReducer({ balance: 500 }, builder =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.balance += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.balance -= action.payload;
//     })
// );
