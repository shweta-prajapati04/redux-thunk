import { ERROR, LOADING, SUCCESS } from "./ActionType";
let initialState = {
    isLoading: false,
    isError: false,
    data: []
}
export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING:

            return {
                ...state, isLoading: true

            }
        case SUCCESS:
            return {
                ...state, isLoading: false,data:payload
            }
        case ERROR:
            return {
                ...state, isError: true
            }

        default:
            return state
    }
}