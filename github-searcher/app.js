let mainModule = (function (UIModule) {
    let search = $(UIModule.UISelectors.searchBox)[0];
    let data;
    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
            let request = $.get(`https://api.github.com/search/users?q=${search.value}`);
            request.done(function () {
                data = request.responseText;
                // console.log(data);
                UIModule.printUsers(data);
            })
        } else {
            return
        }
    })


    return {

    }
})(UIModule);
