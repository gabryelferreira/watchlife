import React from 'react';
import * as S from './styles';
import Stars from '../stars';
import { IPersonHistoryState } from '../../store/persons/persons.model';

interface IProps {
    children?: any;
    history: IPersonHistoryState;
}

const PersonHistory: React.FC<IProps> = ({ history }) => {

    return (
        <S.PersonHistoryContainer>
            <S.PersonHistoryTextAndIcon>
                <i className="material-icons">message</i>
                <S.PersonHistoryTextContainer>
                    <h3>{history.title}</h3>
                    <p>{new Date(history.createdAt).toLocaleDateString("pt-BR")}</p>
                </S.PersonHistoryTextContainer>
            </S.PersonHistoryTextAndIcon>
            <Stars stars={history.stars} />
        </S.PersonHistoryContainer>
    );

}

export default PersonHistory;