import { vars } from '../../themes/vars.css'
import { scaleMap } from '../scaleFactor'

export const unresponsiveProperties = {
    overflow: ['hidden', 'scroll', 'visible', 'auto'],
    userSelect: ['none'],
    outline: ['none'],
    opacity: [0],
    zIndex: {
        0: 0,
        1: 1,
        2: 2,
    },
    cursor: ['default', 'pointer'],
    pointerEvents: ['none'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    minWidth: {
        0: '0%',
    },
    //maxWidth: vars.contentWidth,
    //transition: vars.transition,
} as const

export type UnresponsiveProperties = keyof typeof unresponsiveProperties

export const responsiveProperties = {
    display: {
        none: 'none',
        block: 'block',
        inline: 'inline',
        inlineBlock: 'inline-block',
        flex: 'flex',
    },
    position: ['relative', 'absolute', 'fixed'],
    borderRadius: {
        none: '0px',
        full: '9999px',
        ...vars.border.radius,
    },
    height: scaleMap,
    width: scaleMap,
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
    flexShrink: [0],
    flexGrow: [0, 1],
    textAlign: ['left', 'center', 'right'],
} as const

export type ResponsiveProperties = keyof typeof responsiveProperties
