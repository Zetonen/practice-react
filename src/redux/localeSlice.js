import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: { lang: 'en' },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = slice.actions;
export const localeReducer = slice.reducer;

// export const localeReducer = (state = { lang: 'en' }, action) => {
//   switch (action.type) {
//     case 'locale/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const changeLang = newLang => {
//   return {
//     type: 'locale/changeLang',
//     payload: newLang,
//   };
// };
