export const firstBreakpointName = 'mobile' as const
export const breakpointNames = [firstBreakpointName, 'mobileXl', 'tablet', 'desktop'] as const

export type BreakpointNames = typeof breakpointNames[number]
export type FirstBreakpointName = typeof firstBreakpointName
export type RestBreakpointNames = Exclude<BreakpointNames, FirstBreakpointName>
export type Breakpoints = Record<BreakpointNames, number>

export const breakpoints: Breakpoints = {
    mobile: 0,
    mobileXl: 414,
    tablet: 740,
    desktop: 992,
}
