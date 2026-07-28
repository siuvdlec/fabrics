import { left, right } from 'fp-ts/Either'
import type * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import * as child_process from 'child_process'
import { run } from '../run'

const DIST = 'dist'

const exec =
    (cmd: string, args?: child_process.ExecOptions): TE.TaskEither<Error, void> =>
    () =>
        new Promise(resolve => {
            child_process.exec(cmd, args, (err, _stdout, stderr) => {
                if (err !== null) {
                    return resolve(left(stderr ? new Error(stderr.toString()) : err))
                }

                return resolve(right(undefined))
            })
        })

const getOtp = (): string | undefined => {
    const fromArgv = process.argv.find(arg => arg.startsWith('--otp='))?.split('=')[1]
    const fromEnv = process.env.NPM_OTP
    const value = fromArgv ?? fromEnv

    if (value !== undefined && !/^[a-zA-Z0-9]+$/.test(value)) {
        throw new Error('Invalid OTP: expected an alphanumeric code')
    }

    return value
}

const otp = getOtp()

export const main = exec(`npm publish${otp !== undefined ? ` --otp=${otp}` : ''}`, {
    cwd: DIST,
})

pipe(main, run)
