import { notice, getInput, setOutput } from '@actions/core'
import exec from '@actions/exec'

const run = async () => {
    const sourcePath = getInput('source-path', {required: true});
    const destinationPath = getInput('destination-path', {required: true})
    notice(`Inputs ${sourcePath} & ${destinationPath}`)
}
run()