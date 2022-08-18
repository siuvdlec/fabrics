import type { ResponsiveArrayByMaxLength } from '@vanilla-extract/sprinkles/dist/declarations/src/types'
import { breakpointNames, BreakpointNames, firstBreakpointName } from '../../css/breakpoints'

export type ResponsiveScalar<A> = A
export type ResponsiveDict<A> = { [K in BreakpointNames]?: A }
export type ResponsiveArray<A> = ResponsiveArrayByMaxLength<typeof breakpointNames.length, A>
export type ResponsiveProp<A> = ResponsiveScalar<A> | ResponsiveDict<A> | ResponsiveArray<A>

const isResponsiveArray = <A>(value: ResponsiveProp<A>): value is ResponsiveArray<A> => Array.isArray(value)
const isResponsiveScalar = <A>(value: ResponsiveProp<A>): value is ResponsiveScalar<A> => typeof value !== 'object'

export const getValueByBreakpointFromResponsiveProps = <A>(
    b: BreakpointNames,
    value: ResponsiveProp<A>
): A | undefined => {
    if (isResponsiveScalar(value)) {
        return value
    }

    if (isResponsiveArray(value)) {
        return value[breakpointNames.indexOf(b)] || undefined
    }

    return value[b] || undefined
}

export const resolveResponsiveProp = <K extends string | number>(
    value: ResponsiveProp<K>,
    atoms: { [k in BreakpointNames]: Record<K, string> }
): string => {
    if (typeof value !== 'object') {
        return atoms[firstBreakpointName][value]
    }

    return breakpointNames
        .map(b => {
            const v = getValueByBreakpointFromResponsiveProps(b, value)
            return typeof v === 'undefined' ? '' : atoms[b][v]
        })
        .join(' ')
}

export const resolveResponsivePropSafe = <K extends string | number>(
    value: undefined | ResponsiveProp<K>,
    atoms: { [k in BreakpointNames]: Record<K, string> }
): string | false => {
    if (typeof value === 'undefined') {
        return false
    }

    return resolveResponsiveProp(value, atoms)
}
