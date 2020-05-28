export interface IPersonHistoryState {
    id: number
    title: string
    description: string
    stars: number
    createdAt: number
    updatedAt: number
}

export interface IPersonState {
    id: number
    name: string
    description: string
    imageUrl: string
    histories: IPersonHistoryState[]
    stars: number
    createdAt: number
    updatedAt: number
}