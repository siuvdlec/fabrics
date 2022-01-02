import type { FabricTokensRaw } from '../makeTheme'

export const tokens: FabricTokensRaw = {
    name: 'std',
    displayName: 'Standard',
    contentWidth: {
        page: {
            max: {
                mobile: '100%',
                mobileXl: '100%',
                tablet: 1024,
                desktop: 1024,
            },
            padding: {
                mobile: 'none',
                mobileXl: 'none',
                tablet: 'std',
                desktop: 'std',
            },
            min: 320,
        },
    },
    grid: 4,
    space: {
        micro: 0.5,
        xxsmall: 1,
        xsmall: 2,
        small: 3,
        std: 4,
        medium: 6,
        large: 8,
        xlarge: 10,
        xxlarge: 12,
        extraLarge: 22,
    },
    transitions: {
        medium: 'all .5s ease',
        fast: 'all .1s ease',
    },
    border: {
        radius: {
            small: 2,
            std: 4,
            medium: 6,
        },
        width: {
            small: 1,
            std: 2,
            large: 3,
        },
    },
    shadows: {
        medium: '0px 2px 8px rgba(0, 0, 0, 0.12)',
        strong: '0 0 15px -3px #777',
    },
}
