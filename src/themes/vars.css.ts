import { createThemeContract } from '@vanilla-extract/css'
import { makeVanillaTokens } from './makeTheme'
import { tokens } from './default/tokens'

export const vars = createThemeContract(makeVanillaTokens(tokens))
