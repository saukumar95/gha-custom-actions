import { notice, getInput, setOutput } from '@actions/core'
import { getExecOutput } from '@actions/exec'

const run = async () => {
    const sourcePath = getInput('source-path', { required: true });
    const destinationPath = getInput('destination-path', { required: true })
    getExecOutput(`mv ${sourcePath} ${destinationPath}`)
    notice(`Inputs ${sourcePath} & ${destinationPath}`)
}
run()