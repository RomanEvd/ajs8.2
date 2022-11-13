export const clientErrors = new Map([
    [400, 'Bad Request'],
    [401, 'Unauthorized '],
    [402, 'Payment Required'],
    [403, 'Forbidden'],
    [404, 'Not Found']
]);

export default class ErrorRepository {
    static translate(code) {
        let result;
        clientErrors.has(code) ? result = clientErrors.get(code) : result = 'Unknown error';
        return result;
    }
}