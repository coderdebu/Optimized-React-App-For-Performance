import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, selectReview } from '../redux/reviewsSlice';
import TitleText from './TitleText';

const ListItem = memo(({ review, isSelected, onClick }) => {
    const generateAvatar = (name) => {
        const nameParts = name.split(' ');
        return nameParts.length > 1
            ? nameParts[0][0] + nameParts[1][0]
            : nameParts[0][0];
    };

    const textColor = review.isActive ? '#FFFFFF' : '#86868B';

    return (
        <li
            className={`cursor-pointer hover:text-blue-500 flex flex-col items-center relative text-left`}
            onClick={onClick}
        >
            <div className={`relative w-12 h-12 flex items-center justify-center mb-1`}>
                {isSelected && (
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            border: '3px solid transparent',
                            borderImage: 'linear-gradient(225deg, #5BB6D6 0%, #CD428E 50%, #544C9A 100%)',
                            borderImageSlice: 1,
                            zIndex: 1,
                        }}
                    />
                )}
                <span
                    className={`z-10 flex items-center justify-center w-full h-full rounded-full ${isSelected ? 'text-white' : 'text-black'}`}
                    style={{
                        backgroundColor: isSelected ? 'transparent' : '#D1D5DB',
                        fontSize: '16px',
                    }}
                >
                    {generateAvatar(review.name)}
                </span>
            </div>
            <TitleText
                styleName="Web/Title Small"
                fontFamily="Inter"
                fontSize="18px"
                fontWeight="600"
                lineHeight="27.9px"
                textAlign="left"
                color={textColor}
            >
                {review.name}
            </TitleText>
        </li>
    );
});

const CustomerReviews = memo(() => {
    const dispatch = useDispatch();
    const { reviews, selectedReviewId } = useSelector((state) => state.reviews);
    const selectedReview = reviews.find((review) => review.id === selectedReviewId);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    return (
        <>
            <TitleText
                styleName="Web/Headline Large"
                fontFamily="Inter"
                fontSize="46px"
                fontWeight="600"
                lineHeight="56.12px"
                letterSpacing="-0.03em"
                textAlign="left"
                color="#F5F5F7"
            >
                What customers think about our product:
            </TitleText>
            <div className="flex mt-10">
                <div className="w-1/3 pr-4 max-h-[400px] overflow-y-auto">
                    <ul className="space-y-2">
                        {reviews.map((review) => (
                            <ListItem
                                key={review.id}
                                review={review}
                                isSelected={selectedReviewId === review.id}
                                onClick={() => dispatch(selectReview(review.id))}
                            />
                        ))}
                    </ul>
                </div>

                <div className="w-2/3 pl-4">
                    {selectedReview ? (
                        <div className="p-4 bg-transparent">
                            <TitleText
                                styleName="Web/Headline Medium"
                                fontFamily="Inter"
                                fontSize="24px"
                                fontWeight="400"
                                lineHeight="32px"
                                textAlign="left"
                                color="#FFFFFF"
                            >
                                "{selectedReview.comment}"
                            </TitleText>
                        </div>
                    ) : (
                        <p>No review selected.</p>
                    )}
                </div>
            </div>
        </>
    );
});

export default CustomerReviews;
