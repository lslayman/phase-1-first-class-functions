function receivesAFunction (cb) {
    console.log(cb());
}

function returnsANamedFunction () {
    return function named() {
        console.log("this is a named function")
    }
}

function returnsAnAnonymousFunction () {
    return function() {
        console.log('She\'s anonymous')
    }
}