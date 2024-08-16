
const simplifyError = (error, message) => stringifyCaughtError({
    simpleError: { error, message }
});

const simplifyCaughtError = (error) => {
    if (error.error && error.message)
        error = { simpleError: error };

    return error?.simpleError ? stringifyCaughtError(error) : simplifyError('Error', error);
};

const stringifyCaughtError = ({ simpleError: { error, message } }) => {
    const t_error = transformError(error),
        t_message = transformError(message);

    if (t_message || t_error)
        return t_message || t_error;

    return {
        simpleError: {
            error: isObject(error) ? JSON.stringify(error) : `${error || 'Error'}`,
            message: isObject(message) ? JSON.stringify(message) : `${message || ''}`
        }
    };
}

const transformError = (error) => {
    if (error?.name && error?.message)
        return {
            simpleError: {
                error: `${error.name}`,
                message: `${error.message}`
            }
        };
}

const isObject = (o) => o !== null &&
    typeof o === 'object' &&
    (Object.prototype.toString.call(o) === '[object Object]' ||
        Object.prototype.toString.call(o) === '[object Array]');

module.exports = {
    simplifyCaughtError,
    simplifyError
};