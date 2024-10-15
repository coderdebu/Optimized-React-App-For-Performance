import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    const response = await fetch('https://dev-abt1u4l9bzxp4ml.api.raw-labs.com/customer-reviews');
    const data = await response.json();
    return data.reviews;
});

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        selectedReviewId: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        selectReview: (state, action) => {
            state.selectedReviewId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.reviews = action.payload;
                state.selectedReviewId = action.payload[0]?.id || null;
                state.status = 'succeeded';
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { selectReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
