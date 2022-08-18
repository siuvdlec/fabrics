import type { FabricTokensRaw } from '../makeTheme'

export const tokens: FabricTokensRaw = {
    name: 'std',
    displayName: 'Standard',
    typography: {
        fontFamily: {
            std: "'Mulish', sans-serif",
            alt: "'Kanit', sans-serif",
        },
        color: {
            std: 'black',
            selection: 'white',
        },
        fontSizeRoot: {
            value: 16,
            unit: 'px',
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            bold: '700',
        },
        letterSpacing: {
            s: { value: 0.005, unit: 'em' },
            m: { value: 0.01, unit: 'em' },
            l: { value: 0.04, unit: 'em' },
        },
        lineHeight: {
            xs: { value: 1 },
            s: { value: 1.15 },
            m: { value: 1.2 },
            l: { value: 1.3 },
        },
    },
    contentWidth: {
        page: {
            max: {
                unit: 'px',
                value: 1312,
            },
            min: {
                unit: 'px',
                value: 280,
            },
        },
    },
    grid: 4,
    space: {
        none: { value: 0, unit: 'px' },
        '3xs': { value: 0.5, unit: 'px' },
        xxs: { value: 1, unit: 'px' },
        xs: { value: 2, unit: 'px' },
        s: { value: 3, unit: 'px' },
        m: { value: 4, unit: 'px' },
        l: { value: 6, unit: 'px' },
        xl: { value: 8, unit: 'px' },
        xxl: { value: 10, unit: 'px' },
        '3xl': { value: 12, unit: 'px' },
    },
    transitions: {
        medium: 'all .5s ease',
        fast: 'all .1s ease',
    },
    border: {
        radius: {
            xs: { value: 4, unit: 'px' },
            s: { value: 8, unit: 'px' },
            m: { value: 16, unit: 'px' },
            l: { value: 24, unit: 'px' },
        },
        width: {
            s: { value: 1, unit: 'px' },
            m: { value: 2, unit: 'px' },
        },
    },
    shadows: {
        'drop-0': '1px 4px 8px rgba(0, 0, 0, 0.05), 0px 10px 16px rgba(0, 0, 0, 0.08)',
        'drop-1': '2px 4px 8px rgba(0, 0, 0, 0.06), 2px 14px 24px rgba(0, 0, 0, 0.1)',
    },
    dimmer: {
        light: 'rgba(255, 255, 255, 0.9)',
        dark: 'rgba(58, 58, 58, 0.6);',
    },
}
