export interface CounterState {
    counter: number;
    companyName: string;
}

export const initialState: CounterState = {
    counter: 0,
    companyName: 'Future Tech data'
}