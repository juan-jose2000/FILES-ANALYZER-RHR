import { userLogout } from '../redux/actions/userAction';

export default async function ({partialUrl, method,body, headers=null, state, dispatch=null}) {
    // Aca hay que validar que el token no este vencido
    return fetch(`${process.env.SERVER_API_DATA_URL}${partialUrl}`, {
        method,
        headers: headers ? headers : state.headers,
        body: method === "GET" ? null : JSON.stringify({
            ...state.body,
            ...body,
        }),
    }).then(response => {
        if (!dispatch) {
            return response;
        }
        if (!response.ok) {
            if(response.status === 401) {
                dispatch(userLogout());
            }
            throw Error (response.statusText); // testiar
        }
        return response;
    });
}
