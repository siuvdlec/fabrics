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

export const isFirstBreakpoint = (b: BreakpointNames): b is FirstBreakpointName => b === firstBreakpointName

export const breakpointsDictMap = <A>(f: (b: BreakpointNames, i: number) => A): { [K in BreakpointNames]: A } =>
    breakpointNames.reduce((c, b, i) => ({ ...c, [b]: f(b, i) }), {} as { [K in BreakpointNames]: A })

export const breakpointsDictInit = <A>(a: A): { [K in BreakpointNames]: A } => breakpointsDictMap(() => a)

export const isBreakpointBelowOrEqual = (a: BreakpointNames, t: BreakpointNames): boolean => {
    const aIndex = breakpointNames.indexOf(a)
    const tIndex = breakpointNames.indexOf(t)

    return aIndex <= tIndex
}
