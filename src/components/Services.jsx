import React, { Suspense, useMemo } from 'react';
import TitleText from './TitleText';
import LetsTalk from '../icons/LetsTalk';
import CommonButton from './CommonButton';

const LazyCustomerReviews = React.lazy(() => import('./CustomerReview'));

const Services = () => {
    const productsTitle = useMemo(() => (
        <TitleText
            styleName="Web/Title Medium"
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            lineHeight="28px"
            textAlign="left"
            color="#F5F5F7"
        >
            Products & Solutions
        </TitleText>
    ), []);

    const askitectTitle = useMemo(() => (
        <TitleText
            styleName="Web/Display Small"
            fontFamily="Inter"
            fontSize="58px"
            fontWeight="600"
            lineHeight="71.92px"
            letterSpacing="-0.04em"
            textAlign="left"
            color="#F5F5F7"
        >
            Askitect AI
        </TitleText>
    ), []);

    const askitectDescription = useMemo(() => (
        <TitleText
            styleName="Web/Display Small"
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            lineHeight="27.9px"
            letterSpacing="-0.04em"
            textAlign="left"
            color="#F5F5F7"
        >
            Aenean tristique, tellus id posuere tincidunt, enim tortor scelerisque quam, vitae faucibus felis nunc vitae nulla. Etiam tincidunt nisl sed quam tempor.
        </TitleText>
    ), []);

    const features = [
        {
            title: "Maecenas eleifend",
            description: "Curabitur sit amet lacinia justo. Nullam accumsan velit quam, quis euismod dui sodales a. Proin non tincidunt neque."
        },
        {
            title: "Duis ac ipsum nulla",
            description: "Aliquam pretium enim odio dapibus, non imperdiet lorem euismod. Curabitur blandit urna ante, ac accumsan lorem aliquet."
        },
        {
            title: "Duis laoreet posuere",
            description: "Vivamus eros metus, vestibulum ut erat aliquam, pellentesque consectetur libero. Vestibulum laoreet dictum magna at suscipit."
        }
    ];

    return (
        <div className="px-[104px] pt-[50px] gap-48 bg-[#161D3A] text-white">
            <div className="flex flex-col gap-96">
                {productsTitle}
            </div>
            <div className="gap-24 pt-10">
                {askitectTitle}
            </div>
            <div className="gap-24 pt-3">
                {askitectDescription}
                <div className="flex justify-start mt-5">
                    <CommonButton
                        size="medium"
                        style="filled"
                        state="enabled"
                        text={true}
                        leadingIcon={false}
                        trailingIcon={true}
                        className="w-[166px] h-[48px] p-[12px_24px_12px_32px] gap-8 rounded-[24px] opacity-100"
                    >
                        <div className="flex justify-between items-center text-white">
                            <TitleText
                                styleName="Web/Label Large"
                                fontFamily="Inter"
                                fontSize="16px"
                                fontWeight="500"
                                lineHeight="24px"
                                textAlign="center"
                                color="white"
                            >
                                Try Now
                            </TitleText>
                            <LetsTalk style={{ color: 'white' }} />
                        </div>
                    </CommonButton>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-3 gap-[48px] mt-10">
                {features.map((feature, index) => (
                    <div className="flex flex-col" key={index}>
                        <span className="font-bold">
                            <TitleText
                                styleName="Web/Display Small"
                                fontFamily="Inter"
                                fontSize="22px"
                                fontWeight="600"
                                lineHeight="32.12px"
                                textAlign="left"
                                color="#F5F5F7"
                            >
                                {feature.title}
                            </TitleText>
                        </span>
                        <span className="mt-2">
                            <TitleText
                                styleName="Web/Body Large"
                                fontFamily="Inter"
                                fontSize="18px"
                                fontWeight="400"
                                lineHeight="27.9px"
                                textAlign="left"
                                color="#F5F5F7"
                            >
                                {feature.description}
                            </TitleText>
                        </span>
                    </div>
                ))}
            </div>

            {/* Lazy load customer reviews */}
            <Suspense fallback={<div>Loading Customer Reviews...</div>}>
                <LazyCustomerReviews />
            </Suspense>
        </div>
    );
};

export default React.memo(Services);
