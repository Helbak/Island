
const i = new Islands();
describe("isAllLinksFalse(core)", () => {
    it('when all links is null', function () {
        const core = {
            row: 1,
            column: 2,
            num: 12,
            core: null,
            links: [
                [11, null],
                [13, null],
                [22, null]
            ]
        };
        const act = i.isAllLinksFalse(core);
        const exp = true;
        assert.equal(act, exp);
    });
    it('when all links is false', function () {
        const core = {
            row: 1,
            column: 2,
            num: 12,
            core: null,
            links: [
                [11, null],
                [13, null],
                [22, null]
            ]
        };
        const act = i.isAllLinksFalse(core);
        const exp = true;
        assert.equal(act, exp);
    });
    it('when one links is true', function () {
        const core = {
            row: 1,
            column: 2,
            num: 12,
            core: null,
            links: [
                [11, null],
                [13, null],
                [22, null]
            ]
        };
        const act = i.isAllLinksFalse(core);
        const exp = true;
        assert.equal(act, exp);
    });

    });

