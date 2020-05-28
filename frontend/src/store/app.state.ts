import { IPersonState } from "./persons/persons.model";

export interface IAppState {
    persons: IPersonState[]
}