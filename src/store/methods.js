const REQUEST_URL = 'https://api.giphy.com/v1/gifs/search?';

const API_KEY = 'tZtAiqwyye3gCn6wrpQSl4tlI67F7VvF';

const formRequest = (params) => {
  const query = formQueryFromParamsObject({
    ...params,
    api_key: API_KEY,
  });
  return REQUEST_URL + query;
};

const formQueryFromParamsObject = (params) => {
  let query = '';
  Object.entries(params).forEach(([key, value]) => {
    query += `&${key}=${value}`;
  });
  return query;
};

export { formRequest };
