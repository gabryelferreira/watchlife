import React from 'react';
import Navbar from './components/navbar';
import styled from 'styled-components';
import Topbar from './components/topbar';

const NAVBAR_WIDTH_PX = "230px";
const TOPBAR_HEIGHT_PX = "60px";

const S = {
    MainContainer: styled.div`
        position: relative;
        width: calc(100% - ${NAVBAR_WIDTH_PX});
        margin-left: ${NAVBAR_WIDTH_PX};
        margin-top: ${TOPBAR_HEIGHT_PX};
    `,
}

interface IProps {
    children?: any;
}

const AppMenuWrapper: React.FC<IProps> = ({ children }) => {

    return (
        <>
            <Topbar navbarWidthInPx={NAVBAR_WIDTH_PX} heightInPx={TOPBAR_HEIGHT_PX}></Topbar>
            <Navbar widthInPx={NAVBAR_WIDTH_PX}></Navbar>
            <S.MainContainer>
                {children}
            </S.MainContainer>
        </>
    );

}

export default AppMenuWrapper;