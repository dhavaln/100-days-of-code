import * as repo from './repo';
import * as followers from './followers';
import * as users from './users';

const all = {...repo, ...followers, ...users};
export default all;