import { pipe } from 'fp-ts/function'
import { objectMap } from '../library/object'

// -------------------------------------------------------------------------------------
// FabricsTokensRaw
// -------------------------------------------------------------------------------------

export interface TokensRaw {
    [key: string]: string | TokensRaw | TokenMeasure | TokenMeasureAbsolute
}

const dimension = ['none', '3xs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', '3xl'] as const
export type Dimension = typeof dimension[number]

export interface TokenMeasure {
    value: number
    unit: 'px' | 'rem' | '%' | 'em'
}

export interface TokenMeasureAbsolute extends Partial<TokenMeasure> {
    value: number
}

export type FontWeight = 'normal' | 'medium' | 'bold'

export interface FabricsTokensRaw {
    name: string
    displayName: string
    typography: {
        fontFamily: {
            std: string
            alt: string
        }
        fontSizeRoot: TokenMeasure
        color: {
            std: string
            selection: string
        }
        fontWeight: Record<FontWeight, string>
        letterSpacing: {
            s: TokenMeasure
            m: TokenMeasure
            l: TokenMeasure
        }
        lineHeight: {
            xs: TokenMeasure | TokenMeasureAbsolute
            s: TokenMeasure | TokenMeasureAbsolute
            m: TokenMeasure | TokenMeasureAbsolute
            l: TokenMeasure | TokenMeasureAbsolute
            xl: TokenMeasure | TokenMeasureAbsolute
        }
    }
    grid: number
    space: Record<Dimension, TokenMeasure>
    contentWidth: {
        page: {
            max: TokenMeasure
            min: TokenMeasure
        }
    }
    transitions: {
        medium: string
        fast: string
    }
    border: {
        radius: {
            xs: TokenMeasure
            s: TokenMeasure
        }
        width: {
            s: TokenMeasure
            m: TokenMeasure
        }
    }
    shadows: {
        'drop-0': string
        'drop-1': string
    }
    dimmer: {
        light: string
        dark: string
    }
}

// -------------------------------------------------------------------------------------
// FabricsTokens
// -------------------------------------------------------------------------------------

export interface FabricsTokens extends Required<FabricsTokensRaw> {}

// -------------------------------------------------------------------------------------
// FabricsVanillaTokens
// -------------------------------------------------------------------------------------

type RecursiveToString<A> = A extends { value: number }
    ? string
    : A extends string | number
    ? string
    : { [k in keyof A]: RecursiveToString<A[k]> }

export type FabricsVanillaTokens = RecursiveToString<FabricsTokens>

const measureToString = (v: TokenMeasure | TokenMeasureAbsolute) =>
    typeof v.unit === 'undefined' ? `${v.value}` : `${v.value}${v.unit}`

const isTokenMeasure = (a: any): a is TokenMeasure | TokenMeasureAbsolute => typeof a.value === 'number'
const isString = (a: any): a is string => typeof a === 'string'

export const recursiveToString = <O extends TokensRaw>(ts: O): RecursiveToString<O> =>
    objectMap(ts, t => {
        if (isTokenMeasure(t)) {
            return measureToString(t)
        }

        if (isString(t)) {
            return t
        }

        return recursiveToString(t)
    }) as RecursiveToString<O>

const stringifyTokens = (tokens: FabricsTokens): FabricsVanillaTokens => {
    const { space, grid, ...rts } = tokens

    return {
        ...recursiveToString(rts as Required<typeof rts>),
        space: objectMap(space, s => measureToString({ value: tokens.grid * s.value, unit: 'px' })),
        grid: grid.toString(),
    }
}

export function makeVanillaTokens(tokens: FabricsTokensRaw): FabricsVanillaTokens {
    return pipe(tokens, stringifyTokens)
}

// -------------------------------------------------------------------------------------
// Theme maker functions
// -------------------------------------------------------------------------------------

export interface FabricsTheme {
    tokens: FabricsTokens
    tokensClassName: string
}

export function makeFabricsTheme(tokens: FabricsTokens, tokensClassName: string): FabricsTheme {
    return {
        tokens,
        tokensClassName,
    }
}
