import { pipe } from 'fp-ts/function'
import type { BreakpointNames } from '../css/breakpoints'
import { objectMap } from '../library/object'

// -------------------------------------------------------------------------------------
// FabricTokensRaw
// -------------------------------------------------------------------------------------

const dimension = [
    'none',
    'micro',
    'xxsmall',
    'xsmall',
    'small',
    'std',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'extraLarge',
] as const
type Dimension = typeof dimension[number]

export interface FabricTokensRaw {
    name: string
    displayName: string
    grid: number
    space: Record<Exclude<Dimension, 'none'>, number>
    contentWidth: {
        page: {
            max: Record<BreakpointNames, string | number>
            padding: Record<BreakpointNames, Dimension>
            min: number
        }
    }
    transitions: {
        medium: string
        fast: string
    }
    border: {
        radius: {
            small: number
            std: number
            medium: number
        }
        width: {
            small: number
            std: number
            large: number
        }
    }
    shadows: {
        medium: string
        strong: string
    }
}

// -------------------------------------------------------------------------------------
// FabricTokens
// -------------------------------------------------------------------------------------

export type FabricTokens = ReturnType<typeof makeFabricTokens>

const makeFabricTokens = (tokens: FabricTokensRaw) => {
    return {
        ...tokens,
        space: {
            ...tokens.space,
            none: 0,
        },
        shadows: {
            ...tokens.shadows,
            none: 'none',
        },
    }
}

// -------------------------------------------------------------------------------------
// FabricVanillaTokens
// -------------------------------------------------------------------------------------

type RecursiveToString<A> = A extends Record<any, any> ? { [k in keyof A]: RecursiveToString<A[k]> } : string
export type FabricVanillaTokens = RecursiveToString<FabricTokens>

const px = (v: string | number) => (typeof v === 'string' ? v : `${v}px`)

const stringifyTokens = (tokens: FabricTokens): FabricVanillaTokens => {
    return {
        ...tokens,
        grid: px(tokens.grid),
        space: objectMap(tokens.space, s => px(tokens.grid * s)),
        contentWidth: {
            page: {
                padding: tokens.contentWidth.page.padding,
                max: objectMap(tokens.contentWidth.page.max, px),
                min: px(tokens.contentWidth.page.min),
            },
        },
        border: {
            radius: objectMap(tokens.border.radius, px),
            width: objectMap(tokens.border.width, px),
        },
        shadows: tokens.shadows,
    }
}

export function makeVanillaTokens(tokens: FabricTokensRaw): FabricVanillaTokens {
    return pipe(tokens, makeFabricTokens, stringifyTokens)
}

// -------------------------------------------------------------------------------------
// Theme maker functions
// -------------------------------------------------------------------------------------

export interface FabricTheme {
    tokens: FabricTokens
    className: string
}

export function makeFabricTheme(tokens: FabricTokensRaw, className: string): FabricTheme {
    return {
        tokens: makeFabricTokens(tokens),
        className,
    }
}
