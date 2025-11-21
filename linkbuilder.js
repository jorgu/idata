'use strict'

export function startApp () {
    const PREFIX = getLink();
    createLinks ()

}

function getLink() {
    if (window.location.protocol === 'file:') {
        return "javascript:window.open('file://///";
    } else {
        return "file://///";
    }
}


export function createLinks () {


}