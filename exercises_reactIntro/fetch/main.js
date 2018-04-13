import * as data from './data.js'
import * as ui from './ui.js'

/* const getData = (name, callback) => {
    data.getRequest(name, callback);
}

const gotResponse = (obj) => {
    console.log(obj);
}

getData('girls', gotResponse); */


window.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        data.getRequest(ui.getData())
            .then((object) => {
                if (typeof object != 'object') {
                    throw new TypeError('No object found!')
                } else {

                    return ui.displayShow(object);
                }
            })
            .then((obj) => {
                console.log(obj)
                obj.getInfo();
            })
            .catch((error) => {
                console.log(`Something went wrong with getting data: ${error.message}`)
            })
    }
})