import { objectMap } from '../library/object'
import type { BreakpointNames } from './breakpoints'

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

export interface FabricTokensIn {
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

export type FabricTokens = ReturnType<typeof decorateTokens>

const px = (v: string | number) => (typeof v === 'string' ? v : `${v}px`)

const decorateTokens = (tokens: FabricTokensIn) => {
    return {
        grid: px(tokens.grid),
        space: objectMap(
            {
                ...tokens.space,
                none: 0,
            },
            px
        ),
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
        shadows: {
            ...tokens.shadows,
            none: 'none',
        },
    }
}

export function makeVanillaTheme(tokens: FabricTokensIn) {
    const decoratedTokens = decorateTokens(tokens)

    return decoratedTokens
}
