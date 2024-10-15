import React, { memo } from 'react';
import TitleText from './TitleText';
import CommonButton from './CommonButton';
import LetsTalk from '../icons/LetsTalk';

const heroContent = {
    title: {
        text: `Vivamus pretium elit,\nvenenatis quam scelerisque non.`,
        style: {
            styleName: 'Web/Display Large',
            fontSize: '72px',
            fontWeight: '600',
            lineHeight: '83.52px',
            letterSpacing: '-0.04em',
            textAlign: 'center',
        },
    },
    subtitle: {
        text: 'Fusce egestas fermentum elit ac sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        style: {
            styleName: 'Web/Title Medium',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '28px',
            textAlign: 'center',
        },
    },
    button: {
        label: "Let's Start",
        style: {
            styleName: 'Web/Label Large',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '24px',
            textAlign: 'center',
            color: 'white',
        },
    },
};

const heroBackgroundStyles = {
    backgroundImage: "url('HomeBanner.jpg')",
    backgroundSize: 'cover',
};

const RenderTitleText = ({ text, style }) => (
    <TitleText
        styleName={style.styleName}
        fontFamily="Inter"
        fontSize={style.fontSize}
        fontWeight={style.fontWeight}
        lineHeight={style.lineHeight}
        letterSpacing={style.letterSpacing}
        textAlign={style.textAlign}
        color={style.color}
    >
        {text}
    </TitleText>
);

const HeroSection = memo(() => (
    <div
        className="h-screen flex flex-col justify-center items-center text-white relative z-10"
        style={heroBackgroundStyles}
    >
        <div className="w-full max-w-[1128px] h-[220px] gap-2">
            <RenderTitleText text={heroContent.title.text} style={heroContent.title.style} />
        </div>

        <div className="w-full max-w-[1128px] h-[220px] gap-2">
            <RenderTitleText text={heroContent.subtitle.text} style={heroContent.subtitle.style} />
            <div className="flex justify-center mt-8">
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
                        <RenderTitleText text={heroContent.button.label} style={heroContent.button.style} />
                        <LetsTalk style={{ color: 'white' }} />
                    </div>
                </CommonButton>
            </div>
        </div>
    </div>
));

export default HeroSection;
