import { makeFabricsTheme } from '../makeTheme'
import { defaultVanillaTheme } from './default.css'
import { tokens } from './tokens'

export const defaultTheme = makeFabricsTheme(tokens, defaultVanillaTheme)
