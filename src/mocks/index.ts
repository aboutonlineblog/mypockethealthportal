import {fasting} from './fasting';
import {steps} from './steps';
import {users} from './users';

export const FetchRequest = (route: string) => {
    return new Promise((resolve: Function) => {
        if(route === '/fasting') {
            resolve(fasting);
        }
        if(route === '/steps') {
            resolve(steps);
        }
        if(route === '/users') {
            resolve(users);
        }

        resolve([]);
    })
}