export const getRequest = (name /* , callback */ ) => {
    /* fetch(`http://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then((response) => {
            return response.json();
        })
        .then((newResponse) => {
            return {
                name : newResponse.name,
                imageURL : newResponse.image.original
            }
        })
        .then((obj) => {
            callback(obj);
        }) */

    return fetch(`http://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then((response) => {
            console.log(response)
            if (response.status < 400) {
                return response.json();
            }
            throw new Error(`Response status = ${response.status}`)
        })
        .then((newResponse) => {
            if (!newResponse) {
                return null;
            }
            return new Show(newResponse.name, newResponse.image.original);
        })
        .catch((error) => {
            console.log(`There has been a problem: ${error.message}`);
        })
}

class Show {

    constructor(name, url) {
        this.name = name;
        this.url = url;
    }

    getInfo() {
        console.log('------------------------------------');
        console.log(this.name, this.url);
        console.log('------------------------------------');
    }
}