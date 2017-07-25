import Root from '../navigations/Root';

export default (state, action) => {
    const newstate = Root.router.getStateForAction(action, state);
    return newstate || state;
};
