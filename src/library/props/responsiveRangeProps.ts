import { breakpointsDictMap, breakpointNames, BreakpointNames, RestBreakpointNames } from '../../css/breakpoints'

export interface ResponsiveRangeProps {
    above?: BreakpointNames
    below?: RestBreakpointNames
}

export type ResponsiveRangeFlatProps = {
    [K in BreakpointNames]: boolean
}

export const resolveResponsiveRangeFlatPropsOptional = <T, F, UF extends boolean | undefined>(
    rangeProps: ResponsiveRangeFlatProps | undefined,
    t: T,
    f: F,
    undefinedAsFalse?: UF
):
    | {
          [K in BreakpointNames]: T | F
      }
    | (UF extends true ? F : undefined) =>
    // eslint-disable-next-line no-nested-ternary
    (rangeProps ? breakpointsDictMap(b => (rangeProps[b] ? t : f)) : undefinedAsFalse ? f : undefined) as
        | {
              [K in BreakpointNames]: T | F
          }
        | (UF extends true ? F : undefined)

export const resolveResponsiveRangePropsOptional = <T, F>(hide: ResponsiveRangeProps | undefined, t: T, f: F) =>
    hide ? resolveResponsiveRangeFlatPropsOptional(resolveResponsiveRangeProps(hide), t, f) : undefined

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
