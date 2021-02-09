function newOnce(func) {
    let result;
    return function () {
        if (func) {
            result = func.apply(this, arguments);
            func = null;
            return result;
        }
        return result;
    }
}

module.exports = newOnce;