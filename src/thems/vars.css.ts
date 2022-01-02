import { createThemeContract } from '@vanilla-extract/css'

import { makeVanillaTheme } from './makeTheme'
import { tokens } from './std/tokens'

export const vars = createThemeContract(makeVanillaTheme(tokens))
