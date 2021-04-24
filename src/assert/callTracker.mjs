import assert from 'assert'

const tracker = new assert.CallTracker()

function func() {}

function foo() {}

const callsfunc = tracker.calls(func, 1)

callsfunc()

process.on('exit', () => {
    tracker.verify()
})


tracker.report()
