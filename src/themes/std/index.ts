import { makeFabricTheme } from '../makeTheme'
import { stdVanillaTheme } from './std.css'
import { tokens } from './tokens'

export const stdTheme = makeFabricTheme(tokens, stdVanillaTheme)
