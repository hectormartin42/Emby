define([], function () {

    return function (options) {

        if (typeof options === 'string') {
            options = {
                label: '',
                text: options
            };
        }

        var result = prompt(options.label || '', options.text || '');

        if (result) {
            return Promise.resolve(result);
        } else {
            return Promise.reject(result);
        }
    };
});