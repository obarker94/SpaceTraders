import { configureStore } from "@reduxjs/toolkit"
import globalUtilsReducer from "./globalUtils/globalUtilsSlice"

export const store = configureStore({
  reducer: {
    globalUtils: globalUtilsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
