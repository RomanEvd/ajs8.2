import ErrorRepository, {clientErrors} from "../errorRepository.js";

test('to check that error description is displayed', () => {
    expect(ErrorRepository.translate(404)).toEqual(clientErrors.get(404));
});

test('to check that error code is unknpwn', () => {
    expect(ErrorRepository.translate(500)).toEqual('Unknown error');
});
