import { createThemeContract } from '@vanilla-extract/css'
import { makeVanillaTokens } from './makeTheme'
import { tokens } from './std/tokens'

export const vars = createThemeContract(makeVanillaTokens(tokens))
