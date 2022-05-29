const API_KEY = null; // https://www.themoviedb.org Get a Free API KEY

const apiService = {
    config: {
        api: 'https://api.themoviedb.org/3',
        apiImages: 'https://image.tmdb.org/t/p/w500'
    },
    httpGet: async (endpoint, params = null) => {
        const url = getUrl(endpoint, params);
        return fetch(url, {
            headers: { 'content-type': 'application/json' }
        })
            .then(response => handleResponse(response))
            .then(response => response)
            .catch(error => {
                console.error(error);
                return Promise.reject(error);
            });
    },
    httpPost: async (endpoint, data, params = null) => {
        const url = getUrl(endpoint, params);
        return fetch(url, {
            method: 'post',
            body: data ? JSON.stringify(data) : null,
            headers: { 'content-type': 'application/json' }
        })
            .then(response => handleResponse(response))
            .then(response => response)
            .catch(error => {
                console.error(error);
                return Promise.reject(error);
            });
    },
    httpPut: async (endpoint, data) => {
        return fetch(`${apiService.config.api}${endpoint}`, {
            method: 'put',
            body: data ? JSON.stringify(data) : null,
            headers: { 'content-type': 'application/json' }
        })
            .then(response => handleResponse(response))
            .then(response => response)
            .catch(error => {
                console.error(error);
                return Promise.reject(error);
            });
    },
    httpDelete: async (endpoint, data) => {
        return fetch(`${apiService.config.api}${endpoint}`, {
            method: 'delete',
            headers: { 'content-type': 'application/json' }
        })
            .then(response => handleResponse(response))
            .then(response => response)
            .catch(error => {
                console.error(error);
                return Promise.reject(error);
            });
    }
};

const handleResponse = response => {
    // You can handle 400 errors as well.
    if (response.status === 200 || response.status === 201) {
        return response.json();
    } else {
        if (response.status === 401) {
            alert('Go to https://www.themoviedb.org Get a Free API KEY for Dev purpose');
        }
        throw Error(response.json() | 'error');
    }
};

export default apiService;

const getUrl = (endpoint, params) => {
    const url = new URL(`${apiService.config.api}${endpoint}`);
    const paramsOptions = params ? createParams(params) : {};
    paramsOptions.api_key = API_KEY;
    url.search = new URLSearchParams(paramsOptions).toString();
    return url;
};

const createParams = (paramsOptions) => {
    if (!paramsOptions) {
        return;
    }

    const params = {};

    Object.keys(paramsOptions).forEach((key) => {
        params[key] = paramsOptions[key];
    });

    return params;
};
