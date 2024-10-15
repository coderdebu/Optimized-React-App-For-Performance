import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './reviewsSlice';

export default configureStore({
    reducer: {
        reviews: reviewsReducer,
    },
});
