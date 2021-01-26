import Table from '../../src';
import assert from 'assert';
describe('Functional', function () {
    it('should work within monte carlo simulaton', function () {
        let table = new Table(),
            headsTails = 0,
            runs = 500000;
        table.add(75, 0);
        table.add(25, 1);
        for (var i = 0, c = runs; i < c; i++) {
            let value = table.get(Math.random());
            if (!(value === 0 || value === 1)) {
                assert.fail(`Should not get an unacceptable value received ${value}`);
                break;
            }
            headsTails += value;
        }
        let percentage = headsTails/runs;
        assert.ok(percentage >0.24 && percentage < 0.26,'Falls within acceptable range');

    });
});