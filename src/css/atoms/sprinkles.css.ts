import {
    ConditionalValue,
    RequiredConditionalValue,
    defineProperties,
    createSprinkles,
    createMapValueFn,
    createNormalizeValueFn,
} from '@vanilla-extract/sprinkles'
import { breakpoints, breakpointNames, BreakpointNames } from '../breakpoints'
import { responsiveProperties, unresponsiveProperties } from './atomicProperties'

const unresponsiveAtomicProperties = defineProperties({
    properties: unresponsiveProperties,
})

const responsiveAtomicProperties = defineProperties({
    defaultCondition: 'mobile',
    conditions: {
        mobile: {},
        mobileXl: {
            '@media': `screen and (min-width: ${breakpoints.mobileXl}px)`,
        },
        tablet: {
            '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
        },
        desktop: {
            '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
        },
    },
    responsiveArray: breakpointNames,
    properties: responsiveProperties,
    shorthands: {
        padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        paddingX: ['paddingLeft', 'paddingRight'],
        margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
        marginY: ['marginTop', 'marginBottom'],
        marginX: ['marginLeft', 'marginRight'],
        gap: ['rowGap', 'columnGap'],
    },
})

export const sprinkles = createSprinkles(unresponsiveAtomicProperties, responsiveAtomicProperties)

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
    typeof responsiveAtomicProperties,
    Value
>
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
    typeof responsiveAtomicProperties,
    Value
>

export type RequiredResponsiveObject<Value> = Partial<Record<BreakpointNames, Value>> &
    Record<typeof breakpointNames[0], Value>

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicProperties)
export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties)
