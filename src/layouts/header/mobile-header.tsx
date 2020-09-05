import React from 'react';
import MobileDrawer from './mobile-drawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
} from './header.style';
import LogoImage from 'assets/images/logo.svg';

import Logo from 'layouts/logo/logo';
import LanguageSwitcher from './menu/language-switcher/language-switcher';

type MobileHeaderProps = {
  className?: string;
  closeSearch?: any;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className}>
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        <LogoWrapper>
          <Logo imageUrl={LogoImage} alt="shop logo" />
        </LogoWrapper>

        <LanguageSwitcher />

      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
