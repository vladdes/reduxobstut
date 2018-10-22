import * as _ from 'lodash';
import * as Globals from './../Globals';

export default (state: any = [], action: any) => {
    
    switch (action.type) {
        case Globals.GetPosts:
            return _.mapKeys(action.payload, 'id');
    }
    return state;
   
};

