import { objectMap } from '../../library/object'
import { vars } from '../../themes/vars.css'
import { getScaleFactorObj, scaleMap } from '../scaleFactor'

export const unresponsiveProperties = {
    overflow: ['hidden', 'scroll', 'visible', 'auto'],
    overflowX: ['hidden', 'scroll', 'visible', 'auto'],
    overflowWrap: {
        normal: 'normal',
        anywhere: 'anywhere',
        breakWord: 'break-word',
    },
    userSelect: ['none'],
    outline: ['none'],
    opacity: [0],
    zIndex: {
        0: 0,
        1: 1,
        2: 2,
    },
    cursor: {
        auto: 'auto',
        pointer: 'pointer',
        notAllowed: 'not-allowed',
        grab: 'grab',
    },
    pointerEvents: ['none'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    transition: vars.transitions,
    textTransform: {
        none: 'none',
        capitalize: 'capitalize',
        uppercase: 'uppercase',
        lowercase: 'lowercase',
    },
    fontWeight: vars.typography.fontWeight,
    fontFamily: vars.typography.fontFamily,
    textDecoration: {
        overline: 'overline',
        lineThrough: 'line-through',
        underline: 'underline',
    },
    fontStyle: {
        normal: 'normal',
        italic: 'italic',
        oblique: 'oblique',
    },
    letterSpacing: vars.typography.letterSpacing,
    whiteSpace: {
        breakSpaces: 'break-spaces',
        normal: 'normal',
        nowrap: 'nowrap',
    },
    textOverflow: {
        ellipsis: 'ellipsis',
    },
} as const

export type UnresponsiveProperties = keyof typeof unresponsiveProperties

export const responsiveProperties = {
    display: {
        block: 'block',
        inline: 'inline',
        none: 'none',
        inlineBlock: 'inline-block',
        flex: 'flex',
        inlineFlex: 'inline-flex',
    },
    position: ['relative', 'absolute', 'fixed'],
    borderRadius: {
        none: '0px',
        full: '9999px',
        half: '50%',
        ...vars.border.radius,
    },
    lineHeight: vars.typography.lineHeight,
    height: scaleMap,
    width: scaleMap,
    minWidth: {
        0: '0%',
        ...scaleMap,
    },
    maxWidth: scaleMap,
    rowGap: vars.space,
    columnGap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingRight: vars.space,
    paddingLeft: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    alignItems: {
        flexStart: 'flex-start',
        center: 'center',
        flexEnd: 'flex-end',
    },
    justifyContent: {
        flexStart: 'flex-start',
        center: 'center',
        flexEnd: 'flex-end',
        spaceBetween: 'space-between',
        spaceAround: 'space-around',
        spaceEvenly: 'space-evenly',
    },
    flexDirection: {
        row: 'row',
        rowReverse: 'row-reverse',
        column: 'column',
        columnReverse: 'column-reverse',
    },
    flexWrap: {
        wrap: 'wrap',
        nowrap: 'nowrap',
    },
    flexShrink: [0, 1],
    flexGrow: [0, 1],
    flex: [0, 1],
    textAlign: ['left', 'center', 'right'],
    boxShadow: {
        none: 'none',
        ...vars.shadows,
    },
    fontSize: objectMap(getScaleFactorObj(), v => `${v}rem`),
} as const

export type ResponsiveProperties = keyof typeof responsiveProperties
