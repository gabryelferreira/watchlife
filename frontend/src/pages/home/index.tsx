import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { IListItem } from '../../models/list-item';
import PersonList from '../../components/person-list';
import personsService from '../../services/persons.service';
import { useDispatch, useSelector } from 'react-redux';
import { IPersonState } from '../../store/persons/persons.model';
import PersonsActions from '../../store/persons/persons.actions';
import { IAppState } from '../../store/app.state';


interface IProps {
    children?: any;
}

const Home: React.FC<IProps> = (props) => {

    const dispatch = useDispatch();

    const persons = useSelector<IAppState, IPersonState[]>(state => state.persons);

    useEffect(() => {

        async function getPersons() {
            try {
                const result = await personsService.getPersons();
                dispatch(
                    PersonsActions.setPersons(result.data)
                );
            } catch (e) {
            }
        }

        getPersons();

    }, []);

    return (
        <S.HomeContainer>

            <S.ListsContainer>

                <PersonList title="Suas pessoas"
                    description="As pessoas que você criou."
                    persons={persons}>
                </PersonList>

            </S.ListsContainer>

        </S.HomeContainer>
    );

}

export default Home;