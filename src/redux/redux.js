import { createSlice, configureStore } from '@reduxjs/toolkit'



export const themeSlice = createSlice({

    name: 'theme',
    initialState: {
        value: 'light'
    },
    reducers: {
        changeTheme: (state) => {

            if (state.value == 'light') {
                state.value = 'dark'
            } else {
                state.value = 'light'

            }

        },

    }

})

export const store = configureStore({
    reducer: themeSlice.reducer,
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions
