import { breakpointNames, BreakpointNames, breakpointsDictMap, RestBreakpointNames } from '../breakpoints'

export interface ResponsiveRangeProps {
    above?: BreakpointNames
    below?: RestBreakpointNames
}

export const resolveResponsiveRangeProps = (props: ResponsiveRangeProps): Record<BreakpointNames, boolean> =>
    breakpointsDictMap(k => isInRange(k, props))

const isInRange = (value: BreakpointNames, r: ResponsiveRangeProps): boolean => {
    if (!r.above && !r.below) {
        return false
    }

    const idx = breakpointNames.indexOf(value)
    const startIndex = r.above ? breakpointNames.indexOf(r.above) + 1 : 0
    const endIndex = r.below ? breakpointNames.indexOf(r.below) - 1 : breakpointNames.length

    return startIndex <= idx && idx <= endIndex
}
