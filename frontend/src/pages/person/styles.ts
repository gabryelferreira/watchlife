import styled from 'styled-components';
import { StarsContainer } from '../../components/stars/styles';

export const PersonHeader = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    background-image: linear-gradient(rgba(255,255,255,.6), #333);
    padding: 0 32px 24px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;

    ::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 200px;
        background-image: linear-gradient(#2a2a2a, #111);
    }

`;

export const PersonImageContainer = styled.div`
    position: relative;
    width: 232px;
    height: 232px;
    border-radius: 50%;
    box-shadow: 0 4px 60px rgba(0,0,0,.5);
    background: #aaa;
`;

export const PersonImage = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

export const PersonHeaderTextContainer = styled.div`
    position: relative;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    height: 232px;
    justify-content: center;
`;

export const PersonHeaderStars = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    color: #fff;
    ${StarsContainer} {
        i {
            font-size: 26px;
        }
    }

    p {
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
    }
`;

export const PersonHeaderTitle = styled.h1`
    font-size: 96px;
    text-transform: uppercase;
    max-height: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
`;

export const PersonHeaderSubtitle = styled.h2`
    font-size: 24px;
    max-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
`;

export const PersonAllContainer = styled.div`
    position: relative;
    padding: 20px 32px 24px;
`;

export const PersonOptions = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const PersonAddButton = styled.button`
    position: relative;
    border: 0;
    border-radius: 50%;
    background: rgb(29, 185, 84);
    width: 50px;
    height: 50px;
    transition: .1s;

    i {
        color: #fff;
        font-size: 28px;
        font-weight: bold;
        margin-right: 1px;
        margin-top: 2px;
    }
    :hover {
        transform: scale(1.08);
    }
`;

export const PersonArchiveDescription = styled.p`
    position: relative;
    color: #fff;
    margin: 30px 0;
`;

export const PersonHistoriesTitle = styled.h3`
    position: relative;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    margin-top: 30px;
`;

export const PersonHistoriesDescription = styled.p`
    position: relative;
    color: #aaa;
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
`;

export const PersonHistories = styled.div`
    position: relative;
    margin: 15px 0;
`;