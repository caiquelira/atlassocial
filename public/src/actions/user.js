import { Enum } from 'enumify';

export default class UserActions extends Enum {}
UserActions.initEnum([
    'FETCH_USER_REQUEST',
    'FETCH_USER_SUCCESS',
    'FETCH_USER_FAILURE'
]);

export const fetchUserRequest = (id) => ({
    type: UserActions.FETCH_USER_REQUEST,
    id
});

export const fetchUserSuccess = (data) => ({
    type: UserActions.FETCH_USER_SUCCESS,
    data
});

export const fetchUserFailure = (error) => ({
    type: UserActions.FETCH_USER_FAILURE,
    error
});

export function fetchPosts(subreddit) {

    return function (dispatch) {

        dispatch(fetchUserRequest())
        dispatch(requestPosts(subreddit))

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(subreddit, json))
          )

          // In a real world app, you also want to
          // catch any error in the network call.
    }
}
