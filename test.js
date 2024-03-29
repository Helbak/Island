const i = new Islands();
describe("Islands", () => {
    it('calculateOfNull when arr = [[0,1,1],[1,1,1],[1,1,1]]', function () {
        const arr = [[0, 1, 1], [1, 1, 1], [1, 1, 1]];
        const act = i.calculateOfNull(arr);
        const exp = 1;
        assert.equal(act, exp);
    });
    it('calculateOfNull when arr = [[1,1,1],[1,1,1],[1,1,0]]', function () {
        const arr = [[1, 1, 1], [1, 1, 1], [1, 1, 0]];
        const act = i.calculateOfNull(arr);
        const exp = 1;
        assert.equal(act, exp);
    });
    it('calculateOfNull when arr = [[1,1,1],[1,1,1],[1,1,0]]', function () {
        const arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        const act = i.calculateOfNull(arr);
        const exp = 0;
        assert.equal(act, exp);
    });
    it('calculateOfNull when arr = [[1,1,1],[1,1,1],[1,1,0]]', function () {
        const arr = [[1, 1, 1], [0, 0, 0], [1, 1, 1]];
        const act = i.calculateOfNull(arr);
        const exp = 3;
        assert.equal(act, exp);
    });
    it('calculateOfOnes when arr = [[1,1,1],[1,1,1],[1,1,0]]', function () {
        const arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        const act = i.calculateOfOnes(arr);
        const exp = 9;
        assert.equal(act, exp);
    });
    it('calculateOfOnes when arr = [[1,1,1],[1,1,1],[1,1,0]]', function () {
        const arr = [[0, 0, 0], [0, 0, 0], [0, 0, 1]];
        const act = i.calculateOfOnes(arr);
        const exp = 1;
        assert.equal(act, exp);
    });
    it('calculateOfOnes when arr = [[1,1,1],[1,1,1],[1,1,0]]', function () {
        const arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        const act = i.calculateOfOnes(arr);
        const exp = 0;
        assert.equal(act, exp);
    });

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
        const exp = false;
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
        const exp = false;
        assert.equal(act, exp);
    });
    it('isAllLinksFalse when one links is true', function () {
        const core = {
            row: 1,
            column: 2,
            num: 12,
            core: null,
            links: [
                [11, true],
                [13, false],
                [22, false]
            ]
        };
        const act = i.isAllLinksFalse(core);
        const exp = true;
        assert.equal(act, exp);
    });
    it('searchCoreWithOnes true', function () {
        const arr = [
            {
                core: true,
                name: 'test'
            },
            {
                core: 5,
                name: 'test'
            },
            {
                core: false,
                count: 5
            }
        ];
        const act = i.searchCoreWithOnes(arr)
        const exp = true;
        assert.equal(act, exp);
    });
    it('searchCoreWithOnes true', function () {
        const arr = [
            {
                core: true,
                name: 'test'
            },
            {
                core: true,
                name: 'test'
            },
            {
                core: false,
                count: 5
            }
        ];
        const act = i.searchCoreWithOnes(arr)
        const exp = true;
        assert.equal(act, exp);
    });
    it('searchCoreWithOnes false', function () {
        const arr = [
            {
                core: "true",
                name: 'test'
            },
            {
                core: 5,
                name: 'test'
            },
            {
                core: false,
                count: 5
            }
        ];
        const act = i.searchCoreWithOnes(arr)
        const exp = false;
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
        i.setCore11(true);
        const act = true;
        const exp = i.core11.core;
        assert.equal(act, exp);
    });
    it('setCore11(false)', function () {
        i.setCore11(false);
        const act = false;
        const exp = i.core11.core;
        assert.equal(act, exp);
    });
    it('setCore12(true)', function () {
        i.setCore12(true);
        const act = true;
        const exp = i.core12.core;
        assert.equal(act, exp);
    });
    it('setCore12(false)', function () {
        i.setCore12(false);
        const act = false;
        const exp = i.core12.core;
        assert.equal(act, exp);
    });
    it('setCore13(true)', function () {
        i.setCore13(true);
        const act = true;
        const exp = i.core13.core;
        assert.equal(act, exp);
    });
    it('setCore13(false)', function () {
        i.setCore13(false);
        const act = false;
        const exp = i.core13.core;
        assert.equal(act, exp);
    });
    it('setCore21(true)', function () {
        i.setCore21(true);
        const act = true;
        const exp = i.core21.core;
        assert.equal(act, exp);
    });
    it('setCore21(false)', function () {
        i.setCore21(false);
        const act = false;
        const exp = i.core21.core;
        assert.equal(act, exp);
    });
    it('setCore22(true)', function () {
        i.setCore22(true);
        const act = true;
        const exp = i.core22.core;
        assert.equal(act, exp);
    });
    it('setCore22(false)', function () {
        i.setCore22(false);
        const act = false;
        const exp = i.core22.core;
        assert.equal(act, exp);
    });
    it('setCore23(true)', function () {
        i.setCore23(true);
        const act = true;
        const exp = i.core23.core;
        assert.equal(act, exp);
    });
    it('setCore23(false)', function () {
        i.setCore23(false);
        const act = false;
        const exp = i.core23.core;
        assert.equal(act, exp);
    });
    it('setCore31(true)', function () {
        i.setCore31(true);
        const act = true;
        const exp = i.core31.core;
        assert.equal(act, exp);
    });
    it('setCore31(false)', function () {
        i.setCore31(false);
        const act = false;
        const exp = i.core31.core;
        assert.equal(act, exp);
    });
    it('setCore32(true)', function () {
        i.setCore32(true);
        const act = true;
        const exp = i.core32.core;
        assert.equal(act, exp);
    });
    it('setCore32(false)', function () {
        i.setCore32(false);
        const act = false;
        const exp = i.core32.core;
        assert.equal(act, exp);
    });
    it('setCore33(true)', function () {
        i.setCore33(true);
        const act = true;
        const exp = i.core33.core;
        assert.equal(act, exp);
    });
    it('setCore33(false)', function () {
        i.setCore33(false)
        const act = false;
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
    it('arrayElementsToArrayObjects([[0,0,0],[0,0,0],[0,0,0]])', function () {
        const test = new Islands();
        const arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        const act = test.arrayElementsToArrayObjects(arr);
        const exp = 0;
        assert.equal(act, exp);
    });
    it('arrayElementsToArrayObjects([[1,0,0],[0,0,0],[0,0,0]])', function () {
        const test1 = new Islands();
        const arr = [[1, 0, 0], [0, 0, 0], [0, 0, 0]];
        const act = test1.arrayElementsToArrayObjects(arr);
        const exp = 1;
        assert.equal(act, exp);
    });
    it('arrayElementsToArrayObjects([[1,0,1],[0,0,0],[0,0,0]])', function () {
        const test1 = new Islands();
        const arr = [[1, 0, 1], [0, 0, 0], [0, 0, 0]];
        const act = test1.arrayElementsToArrayObjects(arr);
        const exp = 2;
        assert.equal(act, exp);
    });

});

