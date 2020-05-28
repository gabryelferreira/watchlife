import styled from 'styled-components';
import { StarsContainer } from '../stars/styles';

export const PersonHistoryContainer = styled.button`
    position: relative;
    width: 100%;
    padding: 10px 20px 10px 0;
    color: #aaa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .4s;

    ${StarsContainer} {
        i {
            font-size: 20px;
        }
    }

    :hover {
        background: #282828;
        color: #fff;
    }
`;

export const PersonHistoryTextAndIcon = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    i {
        font-size: 16px;
        width: 50px;
    }
`;

export const PersonHistoryTextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
        color: #999;
        margin-top: 5px;
    }
`;