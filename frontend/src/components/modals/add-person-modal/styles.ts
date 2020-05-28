import styled from 'styled-components';

export const AddPersonContainer = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
`;

export const AddPersonInputsContainer = styled.div`
    position: relative;
    width: 100%;
    background: #333;
    padding: 20px 30px;
    box-sizing: border-box;
    margin: auto;
`;

export const AddPersonSingleInputContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: auto;
    text-align: left;
    margin-bottom: 30px;

    :last-child {
        margin-bottom: 0;
    }

    p {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
    }

    input, textarea {
        width: 100%;
        font-size: 48px;
        background: transparent;
        font-weight: bold;
        ::placeholder {
            color: #777;
        }
    }

`;