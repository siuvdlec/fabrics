import type { FabricsTokensRaw } from '../makeTheme'

export const tokens: FabricsTokensRaw = {
    name: 'default',
    displayName: 'Default',
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
            xl: { value: 1.5 },
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
        none: { value: 0, unit: 'px' }, // 0px
        '3xs': { value: 0.5, unit: 'px' }, // 2px
        xxs: { value: 1, unit: 'px' }, // 4px
        xs: { value: 2, unit: 'px' }, // 8px
        s: { value: 3, unit: 'px' }, // 12px
        m: { value: 4, unit: 'px' }, // 16px
        l: { value: 6, unit: 'px' }, // 24px
        xl: { value: 8, unit: 'px' }, // 32px
        xxl: { value: 10, unit: 'px' }, // 40px
        '3xl': { value: 12, unit: 'px' }, // 48px
    },
    transitions: {
        medium: 'all .5s ease',
        fast: 'all .1s ease',
    },
    border: {
        radius: {
            xs: { value: 2, unit: 'px' },
            s: { value: 4, unit: 'px' },
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
