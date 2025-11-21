'use strict'

function getLink() {
    if (window.location.protocol === 'file:') {
        return "javascript:window.open('file://///";
    } else {
        return "file://///";
    }
}



export function startApp () {
    const PREFIX = getLink();
    createLinks ()

}


export function createLinks () {


}