export default function clientMiddleware(client) {
  const __BatchCallAPI = (args) => {
    const { commit, actions } = args;
    const { loading, fail, complete, list } = actions;
    commit(loading, { type: loading });
    const __APIList = [];
    list.forEach((item) => {
      const { promise } = item;
      __APIList.push(promise(client));
    });
    return Promise.all(__APIList).then((results) => {
      results.forEach((row, index) => {
        const { type, ...rest } = list[index];
        commit(type, { result: row, ...rest });
      });
      commit(complete, { results });
      return results;
    }).catch((error) => {
      commit(fail, { error });
    });
  };

  const __CallMethod = (args) => {
    const { dispatch, commit, state, action, actions } = args;
    if (actions) {
      return __BatchCallAPI(args);
    }
    if (typeof action === 'function') {
      return action(dispatch, state);
    }
    const { promise, types, type, ...rest } = action;
    if (!promise) {
      return commit(type, { ...rest });
    }
    const [REQUEST, SUCCESS, FAILURE] = types;
    commit(REQUEST, { type: REQUEST, ...rest });
    const actionPromise = promise(client);
    actionPromise.then((result) => {
      commit(SUCCESS, { result, ...rest });
    }, (error) => {
      console.log('------1--------');
      commit(FAILURE, { error, ...rest });
    }).catch((error) => {
      console.log('------2--------');
      commit(FAILURE, { error, ...rest });
    });

    return actionPromise;
  };
  return __CallMethod;
}
