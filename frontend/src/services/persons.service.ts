import axios, { AxiosResponse } from 'axios';
import env from '../environments/environment';
import { ICreatePerson } from '../models/create-person';
import { IPersonState, IPersonHistoryState } from '../store/persons/persons.model';
import { ICreatedPerson } from '../models/created-person';
import { ICreateHistory } from '../models/create-history';

class PersonsService {

    createPerson(person: ICreatePerson): Promise<AxiosResponse<IPersonState>> {
        return new Promise((resolve, reject) => {
            return axios.post<IPersonState>(env.api.persons, person)
                .then(resolve)
                .catch(reject);
        })
    }

    getPersons(): Promise<AxiosResponse<IPersonState[]>> {
        return new Promise((resolve, reject) => {
            return axios.get<IPersonState[]>(env.api.persons)
                .then(resolve)
                .catch(reject);
        })
    }

    getPersonById(id: number): Promise<AxiosResponse<IPersonState>> {
        return new Promise((resolve, reject) => {
            return axios.get<IPersonState>(`${env.api.persons}/${id}`)
                .then(resolve)
                .catch(reject);
        })
    }

    createHistory(personId: number, history: ICreateHistory): Promise<AxiosResponse<IPersonHistoryState>> {
        return new Promise((resolve, reject) => {
            return axios.post<IPersonHistoryState>(`${env.api.persons}/${personId}/histories`, history)
                .then(resolve)
                .catch(reject);
        })
    }

}

export default new PersonsService();