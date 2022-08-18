import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../themes/vars.css'

// -------------------------------------------------------------------------------------
// Global Reset
// -------------------------------------------------------------------------------------

globalStyle('*', {
    margin: 0,
    padding: 0,
    border: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
})

// -------------------------------------------------------------------------------------
// Custom reset rule
// -------------------------------------------------------------------------------------

const fontRule = {
    font: 'inherit',
} as const

const blockRule = {
    display: 'block',
} as const

const appearanceRule = {
    appearance: 'none',
} as const

const transparentRule = {
    backgroundColor: 'transparent',
} as const

const fieldRule = [fontRule, blockRule, appearanceRule, transparentRule]

// -------------------------------------------------------------------------------------
// Custom element reset
// -------------------------------------------------------------------------------------

const ul = style({
    listStyle: 'none',
})

const ol = style({
    listStylePosition: 'inside',
})

const quote = style({
    quotes: 'none',
    selectors: {
        '&:before, &:after': {
            content: "''",
        },
    },
})

const title = style({
    fontSize: 'inherit',
    fontWeight: 'inherit',
})

const tr = style({
    verticalAlign: 'baseline',
})

const table = style({
    borderCollapse: 'collapse',
    borderSpacing: 0,
})

const mark = style([
    transparentRule,
    {
        color: 'inherit',
    },
])

const input = style([
    ...fieldRule,
    {
        outlineWidth: 0,
        selectors: {
            '&:-ms-clear': {
                display: 'none',
            },
            '&:-webkit-autofill, &:-webkit-autofill:focus': {
                WebkitBackgroundClip: 'text',
            },
            '&:-webkit-search-cancel-button': {
                WebkitAppearance: 'none',
            },
            '&:invalid, &:focus, &:hover': {
                outline: 'none',
            },
        },
    },
])

const button = style([fontRule, transparentRule])

const a = style({
    textDecoration: 'none',
    color: 'inherit',
})

const label = style({
    cursor: 'inherit',
})

// -------------------------------------------------------------------------------------
// ResetElement
// -------------------------------------------------------------------------------------

export const resetElement = {
    ul,
    ol,
    blockquote: quote,
    q: quote,
    a,
    table,
    tr,
    mark,
    button,
    input,
    select: input,
    textarea: input,
    h1: title,
    h2: title,
    h3: title,
    h4: title,
    h5: title,
    h6: title,
    label,
}

// -------------------------------------------------------------------------------------
// Normalize
// -------------------------------------------------------------------------------------

globalStyle('html', {
    lineHeight: '1.15',
    fontSize: '16px',
    WebkitTextSizeAdjust: '100%',
})

export const typographyRoot = style({
    fontSize: vars.typography.fontSizeRoot,
    lineHeight: vars.typography.lineHeight.s,
    fontFamily: vars.typography.fontFamily.std,
    fontWeight: vars.typography.fontWeight.normal,
    letterSpacing: vars.typography.letterSpacing.s,
    color: vars.typography.color.std,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
})
