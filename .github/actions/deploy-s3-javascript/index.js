import core from '@actions/core'
import exec from '@actions/exec'

const run = async () => {
    core.notice('Hello world! This is my first custom JS action')
}
run()