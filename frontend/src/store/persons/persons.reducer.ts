import { IPersonState } from "./persons.model";
import { IAction } from "../action";
import PersonsActions from "./persons.actions";

const initialState: IPersonState[] = [];

export function personsReducer<IPersonState>(state = initialState, action: IAction) {
    switch (action.type) {
        case PersonsActions.SET_PERSONS:
            return action.payload;
        case PersonsActions.ADD_PERSON:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}