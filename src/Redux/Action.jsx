import { ERROR, LOADING, SUCCESS } from "./ActionType"

export const fetchData = (_disptch) => {
    _disptch({ type: LOADING })
    fetch("https://dummyjson.com/products/")
        .then((res) => { return res.json() })
        .then((response) => {
            _disptch({ type: SUCCESS, payload: response.products })
        })
        .catch((error) => _disptch({ type: ERROR }))
}