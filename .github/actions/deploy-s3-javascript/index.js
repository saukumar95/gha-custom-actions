import { notice, getInput, setOutput } from '@actions/core'
import exec from '@actions/exec'

const run = async () => {
    notice('Hello world! This is my first custom JS action')
    const a = getInput('a', {required: true})
    const b = getInput('b', {required: true})
    const sum = a + b;
    setOutput('sum', sum)
    notice('First custom action execution done..')
}
run()