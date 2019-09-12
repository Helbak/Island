
const i = new Islands();
describe("Islands", () => {
    it('isAllLinksFalse when all links is null', function () {
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
    it('isAllLinksFalse when all links is false', function () {
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
    it('isAllLinksFalse when one links is true', function () {
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
    it('isCoreTrue(0)', function () {
        const act = i.isCoreTrue(0)
        const exp = false;
        assert.equal(act, exp);
    });
    it('isCoreTrue(1)', function () {
        const act = i.isCoreTrue(1)
        const exp = true;
        assert.equal(act, exp);
    });

    it('setCore11(true)', function () {
        const act = i.setCore11(true)
        const exp = i.core11.core;
        assert.equal(act, exp);
    });
    it('setCore11(false)', function () {
        const act = i.setCore11(false)
        const exp = i.core11.core;
        assert.equal(act, exp);
    });
    it('setCore12(true)', function () {
        const act = i.setCore11(true)
        const exp = i.core12.core;
        assert.equal(act, exp);
    });
    it('setCore12(false)', function () {
        const act = i.setCore12(false)
        const exp = i.core12.core;
        assert.equal(act, exp);
    });
    it('setCore13(true)', function () {
        const act = i.setCore13(true)
        const exp = i.core13.core;
        assert.equal(act, exp);
    });
    it('setCore13(false)', function () {
        const act = i.setCore13(false)
        const exp = i.core13.core;
        assert.equal(act, exp);
    });
    it('setCore21(true)', function () {
        const act = i.setCore21(true)
        const exp = i.core21.core;
        assert.equal(act, exp);
    });
    it('setCore21(false)', function () {
        const act = i.setCore21(false)
        const exp = i.core21.core;
        assert.equal(act, exp);
    });
    it('setCore22(true)', function () {
        const act = i.setCore22(true)
        const exp = i.core22.core;
        assert.equal(act, exp);
    });
    it('setCore22(false)', function () {
        const act = i.setCore22(false)
        const exp = i.core22.core;
        assert.equal(act, exp);
    });
    it('setCore23(true)', function () {
        const act = i.setCore23(true)
        const exp = i.core23.core;
        assert.equal(act, exp);
    });
    it('setCore23(false)', function () {
        const act = i.setCore23(false)
        const exp = i.core23.core;
        assert.equal(act, exp);
    });
    it('setCore31(true)', function () {
        const act = i.setCore31(true)
        const exp = i.core31.core;
        assert.equal(act, exp);
    });
    it('setCore31(false)', function () {
        const act = i.setCore31(false)
        const exp = i.core31.core;
        assert.equal(act, exp);
    });
    it('setCore32(true)', function () {
        const act = i.setCore32(true)
        const exp = i.core32.core;
        assert.equal(act, exp);
    });
    it('setCore32(false)', function () {
        const act = i.setCore32(false)
        const exp = i.core32.core;
        assert.equal(act, exp);
    });
    it('setCore33(true)', function () {
        const act = i.setCore33(true)
        const exp = i.core33.core;
        assert.equal(act, exp);
    });
    it('setCore33(false)', function () {
        const act = i.setCore33(false)
        const exp = i.core33.core;
        assert.equal(act, exp);
    });
    it('addCoreToDraftMap(\'test\')', function () {
       const test2 = new Islands();
        test2.addCoreToDraftMap('test');
        const act = 'test';
        const exp = test2.draftMap[0];
        assert.equal(act, exp);
    });
    it('arrayElementsToArrayObjects(arr)', function () {
        const test = new Islands();
        arr = [[0,0,0],[0,0,0],[0,0,0]];
        const act = test.arrayElementsToArrayObjects(arr);
        const exp = 0;
        assert.equal(act, exp);
    });


    });

