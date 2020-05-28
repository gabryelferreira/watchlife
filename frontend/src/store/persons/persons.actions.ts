import { IPersonState } from "./persons.model";
import { IAction } from "../action";

export default class PersonsActions {

    static readonly SET_PERSONS = "PersonsActions_SET_PERSONS";
    static readonly ADD_PERSON = "PersonsActions_ADD_PERSON";

    static setPersons(persons: IPersonState[]): IAction {
        return {
            type: PersonsActions.SET_PERSONS,
            payload: persons
        }
    }

    static addPerson(persons: IPersonState): IAction {
        return {
            type: PersonsActions.ADD_PERSON,
            payload: persons
        }
    }

}