import { strict as assert } from 'assert';

assert.deepEqual(
    [
        [1, 2, 3, 4],
        [5, 6],
    ],
    [
        [1, 2, 3, 4],
        [5, 6],

    ],
    'MESSAGE FROM ASSERT'
);

const date = new Date()
const object = {}
const fakeDate = {}

Object.setPrototypeOf(object, fakeDate)

try {
    // assert.deepStrictEqual(object, fakeDate);

    // assert.deepStrictEqual(NaN, NaN);

    console.log("-> Object('foo')", Object('foo'));

    // assert.deepStrictEqual(new String('foo'), Object('foo'))

    // assert.deepStrictEqual(new Number(1), new Number(2))

    // assert.deepStrictEqual(0, -0)

    const symbol1 = Symbol()
    const symbol2 = Symbol()

    // assert.deepEqual(symbol1, symbol2)


    const weakMap1 = new WeakMap()
    const weakMap2 = new WeakMap([[{}, {}]])
    const weakMap3 = new WeakMap()

    weakMap3.unequal = true

    // assert.deepStrictEqual(weakMap1, weakMap2)
    assert.deepStrictEqual(weakMap1, weakMap3)



} catch (err) {
    console.log("-> err", err);

}
// console.log(
//     '-> assert.deepEqual([[1,2,3,4], [5,6]], [[1,2,3,4],[5,6]])',
//     assert.deepEqual(
//         [
//             [1, 2, 3, 4],
//             [5, 6],
//         ],
//         [
//             [1, 2, 3, 4],
//             [5, 6],
//         ],
//      ),
// );
