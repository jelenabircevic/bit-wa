export const getResponse = (url) => {
    return axios.get(url)
        .then((response) => {
            return response.data;
        });
}