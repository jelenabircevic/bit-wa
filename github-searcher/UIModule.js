let UIModule = (function() {

    let UISelectors = {
        searchBox : "#search-box",
        error : "#error",
        print : ".print",
        container : "#gallery"
    }
    
    let searchBox = $(UISelectors.searchBox);
    let error = $(UISelectors.error);
    

    let status = {
        OK : "OK",
        EMPTY_QUERY : "Insert name!"
    }
    
    let getFormData = () => searchBox.value;

    let validation = (input) => {
        if (!input) {
            return status.EMPTY_QUERY;
        }
        return status.OK;
    }

    let setError = (message) => {
        $(error).show();
    }
    
    let clearError = (message) => {
        $(error).hide();
    }

    let printUsers = (data) => {
        let userObj = JSON.parse(data);
        for (let i=0; i < 6 && i < userObj.items.length; i++){
            let item = $('<div class="item">').html(`<img src="${userObj.items[i].avatar_url}"><p>${userObj.items[i].login}</p>`);
            $(UISelectors.container).append(item);
        }
    }

    return {
        getFormData,
        UISelectors,
        validation,
        status,
        setError,
        clearError,
        printUsers
    }
})();