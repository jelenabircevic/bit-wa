import * as ui from './ui.js';

let search = $(ui.UISelectors.searchBox)[0];
    let data;
    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
            let request = $.get(`https://api.github.com/search/users?q=${search.value}`);
            request.done(function (response) {
                data = response;
                // console.log(data);
                ui.printUsers(data);
                ui.clear();
            })
        } else {
            return
        }
    })