import styled from 'styled-components';


export const TopbarContainer = styled.header<{ navbarWidthInPx: string, heightInPx: string }>`
    position: fixed;
    top: 0;
    left: ${props => props.navbarWidthInPx};
    width: calc(100% - ${props => props.navbarWidthInPx});
    height: ${props => props.heightInPx};
    background: #000;
    z-index: 99;
`;

export const TopbarUserContainer = styled.button<{ selected: boolean }>`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    background: ${props => props.selected ? "#222" : "transparent"};
    cursor: pointer;
    border: 0;
    outline: none;

    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }

    p {
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        margin: 0 10px 0 7px;
    }

    i {
        color: #fff;
        font-size: 16px;
        transform: rotate(${props => props.selected ? "270deg" : "90deg"});
        margin-right: 10px;
    }

    &:hover {
        background: #222;
    }
`;

export const TopbarUserList = styled.ul`
    list-style: none;
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 8px;
    background: #282828;
    box-shadow: 0 4px 4px rgba(0,0,0,.7);
    min-width: calc(100% + 20px);
    border-radius: 4px;
    text-align: left;

    li {
        color: #aaa;
        box-sizing: border-box;
        padding: 12px 20px;
        font-size: 14px;

        &:hover {
            background: #333;
            color: #fff;
        }
    }
`;