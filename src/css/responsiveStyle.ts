import type { StyleRule } from '@vanilla-extract/css'
import { breakpointNames, BreakpointNames, breakpoints, firstBreakpointName } from '../css/breakpoints'

type CSSProps = Omit<StyleRule, '@media' | '@supports'>

export type ResponsiveStyle = {
    [k in BreakpointNames]?: CSSProps
}

export interface ResponsiveStyleFn {
    (confBreak: ResponsiveStyle): StyleRule
}

const makeMediaQuery = (breakpoint: BreakpointNames, styles: CSSProps) =>
    Object.keys(styles).length === 0 ? {} : { [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles }

export const responsiveStyle = (confBreak: ResponsiveStyle): StyleRule => {
    const allRestBreak = breakpointNames
        .slice(1)
        .map(b => ({ b, s: confBreak[b] }))
        .filter((bs): bs is typeof bs & { s: Exclude<typeof bs['s'], undefined> } => typeof bs.s !== 'undefined')
        .map(bs => makeMediaQuery(bs.b, bs.s))

    return {
        ...confBreak[firstBreakpointName],
        ...(allRestBreak.length === 0 ? {} : { '@media': allRestBreak.reduce((c, s) => ({ ...c, ...s }), {}) }),
    }
}
