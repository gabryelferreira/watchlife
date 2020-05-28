import React from 'react';
import * as S from './styles';
import Stars from '../stars';
import { useHistory } from 'react-router-dom';
import { IPersonState } from '../../store/persons/persons.model';

interface IProps {
    children?: any;
    title: string;
    description?: string;
    persons: IPersonState[]
}

const PersonList: React.FC<IProps> = (props) => {

    const history = useHistory();

    return (
        <S.ListContainer>
            <S.ListTitle>{props.title}</S.ListTitle>
            {props.description && (
                <S.ListDescription>{props.description}</S.ListDescription>
            )}

            <S.ListItemsContainer>
                {props.persons.map(person => (
                    <S.ListCardWrapper key={person.id}>
                        <S.ListCard onClick={() => history.push(`/person/${person.id}`)}>
                            <S.ListCardImageWrapper>
                                { person.imageUrl && (<S.ListCardImage src={person.imageUrl} />) }
                            </S.ListCardImageWrapper>
                            <S.ListCardTextContainer>
                                <Stars stars={person.stars} />
                                <S.ListCardTitle>{person.name}</S.ListCardTitle>
                                <S.ListCardSubtitle>{person.description}</S.ListCardSubtitle>
                            </S.ListCardTextContainer>
                        </S.ListCard>
                    </S.ListCardWrapper>
                ))}
            </S.ListItemsContainer>


        </S.ListContainer>
    );

}

export default PersonList;