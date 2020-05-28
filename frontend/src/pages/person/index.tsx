import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { match } from 'react-router-dom';
import Stars from '../../components/stars';
import PersonHistory from '../../components/person-history';
import AddHistoryModal from '../../components/modals/add-history-modal';
import { IPersonState, IPersonHistoryState } from '../../store/persons/persons.model';
import { AxiosResponse } from 'axios';
import personsService from '../../services/persons.service';
import { ICreateHistory } from '../../models/create-history';


interface IParams {
    id: string;
}

interface IProps {
    children?: any;
    match: match<IParams>;
}

const Person: React.FC<IProps> = ({ match }) => {

    const { id } = match.params;
    const [isModalAddHistoryOpen, setIsModalAddHistoryOpen] = useState(false);
    const [person, setPerson] = useState<IPersonState>();


    function openAddHistoryModal() {
        setIsModalAddHistoryOpen(true);
    }

    function closeAddHistoryModal(history?: IPersonHistoryState) {
        setIsModalAddHistoryOpen(false);
        if (history) {
            setPerson(person => {
                if (!person) return person;
                return {
                    ...person,
                    histories: [
                        ...person.histories,
                        history
                    ]
                }
            })
        }
    }

    useEffect(() => {
        async function getPerson() {
            let result: AxiosResponse<IPersonState>;
            try {
                result = await personsService.getPersonById(parseInt(id));
            } catch (e) {
                console.log("Error fetching person");
                return;
            }
            setPerson(result.data);
        }
        getPerson();
    }, []);

    return (
        <>
            {
                person && (
                    <>
                        <S.PersonHeader>
                            <S.PersonImageContainer>
                                {person.imageUrl && (<S.PersonImage src={person.imageUrl} />)}
                            </S.PersonImageContainer>
                            <S.PersonHeaderTextContainer>
                                <S.PersonHeaderTitle>{person.name}</S.PersonHeaderTitle>
                                <S.PersonHeaderSubtitle>{person.description}</S.PersonHeaderSubtitle>
                                <S.PersonHeaderStars>
                                    <Stars stars={person.stars} />
                                    <p>{person.stars}</p>
                                </S.PersonHeaderStars>
                            </S.PersonHeaderTextContainer>
                        </S.PersonHeader>

                        <S.PersonAllContainer>

                            <S.PersonOptions>
                                <S.PersonAddButton onClick={openAddHistoryModal}>
                                    <i className="material-icons">add</i>
                                </S.PersonAddButton>
                            </S.PersonOptions>

                            <S.PersonHistoriesTitle>
                                Todas as Histórias
                            </S.PersonHistoriesTitle>

                            {
                                person.histories.map(h => (
                                    <S.PersonHistories key={h.id}>
                                        <PersonHistory history={h} />
                                    </S.PersonHistories>
                                ))
                            }

                            {
                                person.histories.length === 0 && (
                                    <S.PersonHistoriesDescription>Nenhuma história disponível.</S.PersonHistoriesDescription>
                                )
                            }

                        </S.PersonAllContainer>

                        <AddHistoryModal isOpen={isModalAddHistoryOpen}
                            person={person}
                            onRequestClose={closeAddHistoryModal} />
                    </>
                )
            }


        </>
    );
}

export default Person;