import styled from 'styled-components';

export const DefaultModalContainer = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const DefaultModalCloseButton = styled.button`
    position: relative;
    height: 100px;
    cursor: initial;
    i {
        cursor: pointer;
        font-size: 58px;
        color: #fff;
        :hover {
            font-size: 62px;
        }
    }

    
`;

export const DefaultModalTitle = styled.h1`
    position: relative;
    font-size: 48px;
    color: #fff;
    margin-bottom: 20px;
`;

export const DefaultModalButtonsContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px 0;
    height: 45px;
    justify-content: center;
`;

export const DefaultModalButton = styled.button`
    position: relative;
    padding: 10px 35px;
    border-radius: 15px;
    background: transparent;
    border: 0.5px solid #777;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 11px;
    margin-right: 10px;
    width: 180px;

    :disabled {
        opacity: .8;
    }

    :last-child {
        margin-right: 0;
        margin-left: 10px;
        background: rgb(29, 185, 84);
        border: 0.5px solid rgb(29, 185, 84);
    }

    :not(:disabled):hover {
        transform: scale(1.05);
        font-size: 12px;
    }

`;