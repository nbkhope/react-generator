// Synchronous
export const acName = () => {
  return {
    type: SOME_TYPE
  };
};


// Async using Redux Thunk
export const acName = () => {
  return dispatch => {

  };
};


// Using Axios
export const acName = () => {
  return dispatch => {
  	dispatch({
      type: VERB_RESOURCE_LOADING
    });

    return axios.get(`${ROOT_URL}/resource`)
      .then(response => {
        console.log(response.data);
        return dispatch({
          type: VERB_RESOURCE_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        return dispatch({
          type: VERB_RESOURCE_FAILURE
        })
      });
  };
};
