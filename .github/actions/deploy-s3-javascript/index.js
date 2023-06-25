import { notice } from '@actions/core'
import exec from '@actions/exec'

const run = async () => {
    notice('Hello world! This is my first custom JS action')
}
run()