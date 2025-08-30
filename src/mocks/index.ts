import {fasting} from './fasting';
import {steps} from './steps';
import {users} from './users';
import _ from "underscore";

export const FetchRequest = (route: string, id?: string | number) => {
    return new Promise((resolve: Function) => {
        if(route === '/fasting') {
            resolve(fasting);
        }
        if(id !== undefined && route === `/fasting/${id}`) {
            const itemInfo = _.findWhere(fasting, {id: typeof id === 'string' ? Number(id) : id});

            if(itemInfo) {
                resolve(itemInfo);
            } else {
                resolve(null)
            }
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