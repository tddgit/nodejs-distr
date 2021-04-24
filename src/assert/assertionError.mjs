import assert from 'assert'

const {message} = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
})

try {
    assert.strictEqual(1, 2)
} catch (err) {
    assert(err instanceof assert.AssertionError)
    assert.strictEqual(err.message, message)
    assert.strictEqual(err.name, 'AssertionError')
    assert.strictEqual(err.actual, 1)
    assert.strictEqual(err.expected, 2)

}
