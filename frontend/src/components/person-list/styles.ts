import styled from 'styled-components';
import { StarsContainer } from '../stars/styles';

export const ListContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px 0;
`;

export const ListTitle = styled.h2`
    position: relative;
    font-size: 28px;
    color: #fff;
`;

export const ListDescription = styled.h4`
    position: relative;
    font-size: 14px;
    color: #bbb;
    margin-top: 2px;
`;

export const ListItemsContainer = styled.div`
    position: relative;
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
`;

export const ListCardWrapper = styled.div`
    position: relative;
    margin-right: 15px;
    margin-bottom: 15px;

    width: 180px;
    height: 230px;

    @media (max-width: 1200px) {
        width: calc(25% - 15px);
        height: unset;
        padding-top: 26%;
    }

    @media (max-width: 1110px) {
        width: calc(33.333% - 15px);
        padding-top: 35%;
    }

    @media (max-width: 950px) {
        width: calc(50% - 15px);
        padding-top: 50%;
    }

    @media (max-width: 800px) {
        width: 100%;
        margin-right: 0;
        padding-top: 0%;
        height: 120px;
    }
`;

export const ListCard = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #282828;
    padding: 20px 15px;
    border-radius: 10px;
    transition: .2s;
    cursor: pointer;
    outline: none;
    border: 0;
    text-align: center;
    user-select: none;
    border: 2px solid transparent;

    &:hover {
        border: 2px solid #aaa;
        background: #484848;
    }

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        text-align: left;
    }

`;

export const ListCardImageWrapper = styled.div`
    position: relative;
    width: 80%;
    padding-top: 80%;
    object-fit: cover;
    margin: auto;
    border-radius: 50%;
    background: #444;

    @media (max-width: 800px) {
        width: 80px;
        padding-top: 0;
        height: 80px;
        margin: unset;
    }
`;

export const ListCardImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

export const ListCardTextContainer = styled.div`
    position: relative;
    margin-top: 10px;
    box-sizing: border-box;
    flex: 1;
    padding: 0 15px;
    
    ${StarsContainer} {
        margin-bottom: 5px;
    }

    @media (max-width: 800px) {
        margin-top: 0;
    }
    
`;

export const ListCardTitle = styled.h6`
    position: relative;
    color: #fff;
    font-weight: bold;
    font-size: 14.5px;
    max-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 800px) {
        font-size: 18px;
    }
`;

export const ListCardSubtitle = styled.p`
    position: relative;
    color: #bbb;
    font-weight: normal;
    font-size: 12px;
    margin-top: 5px;
    max-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 800px) {
        font-size: 14px;
    }
`;