import React from 'react';
import CommonButton from './CommonButton';
import TitleText from './TitleText';

const InquireNow = () => {
    return (
        <div className='p-[104px] gap-48 bg-[#161D3A] text-white'>
            <div className='bg-[#272e49] w-full p-[4.5rem] rounded-[16px] flex flex-col items-center text-center'>
                {/* Main Title */}
                <span className="font-bold">
                    <TitleText
                        styleName="Web/Display Small"
                        fontFamily="Inter"
                        fontSize="18px"
                        fontWeight="600"
                        lineHeight="27.9px"
                        letterSpacing="-0.04em"
                        textAlign="center"
                        color="#F5F5F7"
                    >
                        Aliquam quis dui nec justo elementum posuere.
                    </TitleText>
                </span>

                {/* Subtitle */}
                <span className="mt-2">
                    <TitleText
                        styleName="Web/Body Large"
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        lineHeight="24px"
                        textAlign="center"
                        color="#F5F5F7"
                    >
                        Vestibulum efficitur, magna eget egestas fringilla, dui nibh cursus velit, id tempus lorem est ut dui.
                    </TitleText>
                </span>

                {/* Button */}
                <span className="mt-4 flex items-center cursor-pointer">
                    <CommonButton
                        size="hug"
                        style="filled"
                        state="enabled"
                        text={true}
                        leadingIcon={false}
                        trailingIcon={false}
                        className="w-[156px] h-[48px] p-[12px_32px_12px_32px] rounded-[24px_24px_24px_24px]"
                    >
                        <div className="flex justify-center items-center">
                            <TitleText
                                styleName="Web/Label Large"
                                fontFamily="Inter"
                                fontSize="16px"
                                fontWeight="500"
                                lineHeight="24px"
                                textAlign="center"
                            >
                                Inquire Now
                            </TitleText>
                        </div>
                    </CommonButton>
                </span>
            </div>
        </div>
    );
};

export default InquireNow;
