import { Enum } from 'enumify';

export default class LoginActions extends Enum {}
LoginActions.initEnum([
    'LOGIN',
    'LOGOUT'
]);

export const login = (platform) => ({
    type: LoginActions.LOGIN,
    platform
});

export const logout = () => ({
    type: LoginActions.LOGIN
});
