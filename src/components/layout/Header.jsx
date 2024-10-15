import React, { memo, useState, useEffect } from 'react';
import Logo from '../../icons/logo';
import LogoText from '../../icons/logoText';
import CommonButton from '../CommonButton';
import UsaFlag from '../../icons/usaFlag';
import TitleText from '../TitleText';

const Header = memo(() => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = ['Askitect AI', 'Solutions', 'Pricing', 'About Us', 'Contact'];

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 px-27 gap-0 text-white transition-all duration-500 ease-in-out ${isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'
                }`}
            style={{ borderBottom: 'none' }}
        >
            <div className="flex items-center">
                <Logo />
                <LogoText />
            </div>
            <div className="flex justify-between items-center h-[48px] gap-12">
                <div className="ml-4">
                    <ul className="flex items-center space-x-4">
                        {menuItems.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {item}
                                {index === 0 && (
                                    <span
                                        className="badge mr-2 text-xs rounded-full m-[-11px] pb-[60px]"
                                        style={{ transform: 'scale(0.3)' }}
                                    >
                                        <Logo />
                                    </span>
                                )}
                            </li>
                        ))}
                        <li>
                            <UsaFlag />
                        </li>
                    </ul>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex justify-center space-x-4">
                        <CommonButton
                            size="hug"
                            style="filled"
                            state="enabled"
                            text={true}
                            leadingIcon={false}
                            trailingIcon={false}
                            className="w-[111px] h-[48px] p-[12px_32px_12px_32px] rounded-[24px_24px_24px_24px]"
                        >
                            <div className="flex justify-between items-center">
                                <TitleText
                                    styleName="Web/Label Large"
                                    fontFamily="Inter"
                                    fontSize="16px"
                                    fontWeight="500"
                                    lineHeight="24px"
                                    textAlign="center"
                                >
                                    Login
                                </TitleText>
                            </div>
                        </CommonButton>
                        <CommonButton
                            size="medium"
                            state="enabled"
                            text={true}
                            leadingIcon={false}
                            trailingIcon={false}
                            className="w-[110px] h-[48px] p-[12px_24px] gap-0 rounded-[24px_24px_24px_24px] border-gray-300 border border-opacity-50"  // Adjusted width
                        >
                            <div className="flex justify-between items-center">
                                <TitleText
                                    styleName="Web/Label Large"
                                    fontFamily="Inter"
                                    fontSize="16px"
                                    fontWeight="500"
                                    lineHeight="24px"
                                    textAlign="center"
                                >
                                    Sign up
                                </TitleText>
                            </div>
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Header;
