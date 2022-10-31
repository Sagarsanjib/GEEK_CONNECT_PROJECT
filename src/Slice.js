

import { createSlice } from '@reduxjs/toolkit'


const Slice = createSlice({
  name: 'geekConnect',
  initialState: {
    theme: "light",
    likedPosts: [],
  },
  reducers: {
    setLightMode: state => {

      state.theme = "light"
    },
    setDarkMode: state => {
      state.theme = "dark"
    },

    likePost: (state, action) => {
      state.likedPosts.push(action.payload);
    },
    dislikePost: (state, action) => {
      const index = state.likedPosts.indexOf(action.payload);
      if (index >= 0) {
        state.likedPosts.splice(index, 1);
      }
    }

  }
})



export const { setDarkMode, setLightMode, likePost, dislikePost } = Slice.actions;
export default Slice.reducer;