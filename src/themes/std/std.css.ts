import { createTheme } from '@vanilla-extract/css'
import { makeVanillaTokens } from '../makeTheme'
import { vars } from '../vars.css'
import { tokens } from './tokens'

export const stdVanillaTheme = createTheme(vars, makeVanillaTokens(tokens))
