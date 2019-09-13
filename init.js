class Islands {
    constructor() {
        this.amountOfIslands = 0;//count of islands
        this.core11 = {
            row: 1,
            column: 1,
            num: 11,
            core: null,
            links: [
                [12, null],
                [21, null]
            ]
        };//each object core corresponds to each element of the array, objects contain links to neighboring elements
        this.core12 = {
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
        this.core13 = {
            row: 1,
            column: 3,
            num: 13,
            core: null,
            links: [
                [12, null],
                [23, null]
            ]
        };
        this.core21 = {
            row: 2,
            column: 1,
            num: 21,
            core: null,
            links: [
                [11, null],
                [22, null],
                [31, null]
            ]
        };
        this.core22 = {
            row: 2,
            column: 2,
            num: 22,
            core: null,
            links: [
                [12, null],
                [21, null],
                [23, null],
                [32, null]
            ]
        };
        this.core23 = {
            row: 2,
            column: 3,
            num: 23,
            core: null,
            links: [
                [13, null],
                [33, null],
                [22, null]
            ]
        };
        this.core31 = {
            row: 3,
            column: 1,
            num: 31,
            core: null,
            links: [
                [21, null],
                [32, null],
            ]
        };
        this.core32 = {
            row: 3,
            column: 2,
            num: 32,
            core: null,
            links: [
                [22, null],
                [31, null],
                [33, null],
            ]
        };
        this.core33 = {
            row: 3,
            column: 3,
            num: 33,
            core: null,
            links: [
                [32, null],
                [23, null]
            ]
        };
        this.draftMap = [];
        this.arrayOfIslands = [];
    };

    setCore11(el11) { //at the same time as changing the value of the core, we change the values of links to this core
        this.core11.core = el11;
        this.core21.links[11] = el11;
        this.core12.links[11] = el11;
    };

    setCore12(el12) {
        this.core12.core = el12;
        this.core21.links[12] = el12;
        this.core11.links[12] = el12;
        this.core22.links[12] = el12;
    };

    setCore13(el13) {
        this.core13.core = el13;
        this.core12.links[13] = el13;
        this.core23.links[13] = el13;
        this.core22.links[13] = el13;
    };

    setCore21(el21) {
        this.core21.core = el21;
        this.core11.links[21] = el21;
        this.core22.links[21] = el21;
        this.core31.links[21] = el21;
    };

    setCore22(el22) {
        this.core22.core = el22;
        this.core12.links[22] = el22;
        this.core32.links[22] = el22;
        this.core21.links[22] = el22;
        this.core23.links[22] = el22;
    };

    setCore23(el23) {
        this.core23.core = el23;
        this.core13.links[23] = el23;
        this.core22.links[23] = el23;
        this.core33.links[23] = el23;
    };

    setCore31(el31) {
        this.core31.core = el31;
        this.core32.links[31] = el31;
        this.core21.links[31] = el31;
    };

    setCore32(el32) {
        this.core32.core = el32;
        this.core31.links[32] = el32;
        this.core33.links[32] = el32;
        this.core23.links[32] = el32;
    };

    setCore33(el33) {
        this.core33.core = el33;
        this.core32.links[33] = el33;
        this.core23.links[33] = el33;
    };

    isCoreTrue(el) {
        if (el === 1) {
            return true;
        }
        return false
    };

    addCoreToDraftMap(core) { //for the convenience of iterating elements, add them to the array
        this.draftMap.push(core);
    };

    addIslandToArray(core) { //for the convenience of iterating elements, add them to the array
        this.arrayOfIslands.push(core);
    };

    setAmountPlusOne() {
        this.amountOfIslands++;
    };//iterator of islands number

    setAmountMinusOne(count) {
        console.log('count = ' + count)
        if (this.amountOfIslands <= count) {
            this.amountOfIslands = 1;
            console.log('this.amountOfIslands <= count  ' + this.amountOfIslands)
            return;
        }
        this.amountOfIslands = this.amountOfIslands - count;
        console.log('this.amountOfIslands  ' + this.amountOfIslands)
    };

    calculateOfNull(arr) {
        let countOfNull = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i][j] !== 1) {
                    countOfNull++;
                }
            }
        }
        return countOfNull;
    }

    calculateOfOnes(arr) {
        let countOfOnes = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i][j] === 1) {
                    countOfOnes++;
                }
            }
        }
        return countOfOnes;
    }

    isAllLinksFalse(core) { //check if the core is separate
        for (let i = 0; i < core.links.length; i++) {
            if (core.links[i][1] === true) {
                return true;
            }
            return false;
        }
    };

    searchCoreWithOnes(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].core === true) {
                return arr[i].core;
            }
            return false;
        }
        ;
    }

    arrayElementsToArrayObjects(arr) {

        const amountOfNull = this.calculateOfNull(arr);
        const amountOfOnes = this.calculateOfOnes(arr);
        if (amountOfOnes === 0) {
            return 0;
        }
        ;
        if (amountOfOnes === 1) {
            return 1;
        }
        ;

        if (amountOfNull <= 2) {
            return 1;
        }
        ;

        this.setCore11(this.isCoreTrue(arr[0][0])); //create an object model, fill in the values (1 or not) to core
        this.setCore12(this.isCoreTrue(arr[0][1]));
        this.setCore13(this.isCoreTrue(arr[0][2]));
        this.setCore21(this.isCoreTrue(arr[1][0]));
        this.setCore22(this.isCoreTrue(arr[1][1]));
        this.setCore23(this.isCoreTrue(arr[1][2]));
        this.setCore31(this.isCoreTrue(arr[2][0]));
        this.setCore32(this.isCoreTrue(arr[2][1]));
        this.setCore33(this.isCoreTrue(arr[2][2]));

        this.addCoreToDraftMap(this.core11);//for the convenience of iterating elements, add them to the array
        this.addCoreToDraftMap(this.core12);
        this.addCoreToDraftMap(this.core13);
        this.addCoreToDraftMap(this.core21);
        this.addCoreToDraftMap(this.core22);
        this.addCoreToDraftMap(this.core23);
        this.addCoreToDraftMap(this.core31);
        this.addCoreToDraftMap(this.core32);
        this.addCoreToDraftMap(this.core33);

        if (amountOfOnes === 2) {
            const core = this.searchCoreWithOnes(this.draftMap);
            console.log(' this.draftMap[9].core  ==  '+ this.draftMap[9].core )
            if (this.isAllLinksFalse(core)===true){
                console.log('   isAllLinksFalse return true;')
    return 1;
            }
            console.log('   isAllLinksFalse return false')
            return 2;
        };



        // for (let i = 0; i < this.draftMap.length; i++) {
        //     console.log(i + '  ' + this.draftMap[i].core);
        //     if (this.draftMap[i].core === true) {
        //         const island = this.createIsland(this.draftMap[i]);
        //         this.setAmountPlusOne();
        //         this.addIslandToArray(island);
        //     }
        // }


        return this.amountOfIslands;

    }
}
