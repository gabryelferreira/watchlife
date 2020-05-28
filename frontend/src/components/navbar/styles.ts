import styled from 'styled-components';

export const NavbarContainer = styled.div<{ widthInPx: string }>`
    position: fixed;
    width: ${props => props.widthInPx};
    background: #000;
    height: 100%;
    top: 0;
`;

export const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 24px;

    img {
        position: relative;
        width: 70%;
        height: auto;
    }
`;

export const NavbarMainList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 5px;
    box-sizing: border-box;
`;

export const NavbarMainListItem = styled.li<{ selected?: boolean }>`
    display: flex;
    align-items: center;
    color: ${props => props.selected ? "#fff" : "#888"};
    font-weight: 600;
    box-sizing: border-box;
    padding: 10px 15px;
    background-color: ${props => props.selected ? '#404040' : 'transparent'};
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    user-select: none;

    i {
        width: 35px;
        margin-right: 10px;
        
    }
`;

export const NavbarSecondListContainer = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    h2 {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
        color: #fff;
    }
`;

export const NavbarSecondList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 5px 0;
    box-sizing: border-box;
`;

export const NavbarSecondListItem = styled.li`
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    transition: .2s;
    cursor: pointer;
    padding: 10px 0;
    box-sizing: border-box;
    opacity: .6;
    :hover {
        opacity: 1;
    }
    i {
        box-sizing: border-box;
        padding: 3px;
        margin-right: 15px;
        background: #eee;
        color: #000;
        border-radius: 4px;
    }
    
`;