export const UISelectors = {
    searchBox : "#search-box",
    error : "#error",
    print : ".print",
    container : "#gallery"
}

const searchBox = $(UISelectors.searchBox);
const error = $(UISelectors.error);


export const status = {
    OK : "OK",
    EMPTY_QUERY : "Insert name!"
}

export const getFormData = () => searchBox.value;

export const validation = (input) => {
    if (!input) {
        return status.EMPTY_QUERY;
    }
    return status.OK;
}

export const clear = () => {
    searchBox.val('');
    searchBox.blur();
}

export const setError = (message) => {
    $(error).show();
}

export const clearError = (message) => {
    $(error).hide();
}

export const printUsers = (data) => {
    let userObj = data.items;
    console.log(userObj);
    userObj.splice(6);
    userObj.forEach (user => {
        let item = $('<div class="item">').html(`<a href="${user.html_url}"><img src="${user.avatar_url}"><p>${user.login}</p></a>`);
        $(UISelectors.container).append(item);
    })
        
    
}