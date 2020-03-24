const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

//fetches for auth reducer
export const fetchSignup = (email, password) => {
  return request('/api/v1/auth/signup', 'POST', { email, password });
};

export const fetchLogin = (email, password) => {
  return request('/api/v1/auth/login', 'POST', { email, password });
};

export const fetchVerify = () => {
  return request('/api/v1/auth/verify', 'GET');
};

//fetches for anagram reducer
export const fetchAnagrams = word => {
  return request('/api/v1/anagrams', 'POST', { word });
};

//fetches for favorite reducer

