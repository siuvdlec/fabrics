import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { AllHTMLAttributes, createElement, ElementType, forwardRef } from 'react'
import { Atoms, atoms, Space } from '../../css/atoms/atoms'
import { sprinkles } from '../../css/atoms/sprinkles.css'
import { DataAttributes, useDataAttributes } from '../../hooks/useDataAttributes'
import type { ResponsiveProp } from '../../library/props/responsiveProp'

export type ResponsiveSpace = ResponsiveProp<Space>

export interface BoxDataAttribute {
    dataAttributes?: DataAttributes
    dataTest?: string
}

export interface BoxDataIdentifier {
    dataI?: string
    dataT?: string
}

export interface BoxBaseProps extends Omit<Atoms, 'reset' | 'color' | 'background'> {
    className?: ClassValue
}

export const boxPaddingNames = [
    'padding',
    'paddingX',
    'paddingY',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
] as const
export type BoxPaddingNames = typeof boxPaddingNames[number]

export type BoxPadding = Pick<BoxBaseProps, BoxPaddingNames>

export const boxMarginNames = [
    'margin',
    'marginX',
    'marginY',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
] as const
export type BoxMarginNames = typeof boxMarginNames[number]

export type BoxMargin = Pick<BoxBaseProps, BoxMarginNames>

export interface BoxProps
    extends BoxBaseProps,
        Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'>,
        BoxDataAttribute,
        BoxDataIdentifier {
    component?: ElementType
    debugName?: string
}

export const Box = forwardRef<HTMLElement, BoxProps>(
    ({ component = 'div', className, dataAttributes, dataTest, ...props }, ref) => {
        const atomProps: Record<string, unknown> = {}
        const nativeProps: Record<string, unknown> = {}

        for (const key in props) {
            if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
                atomProps[key] = props[key as keyof typeof props]
            } else {
                nativeProps[key] = props[key as keyof typeof props]
            }
        }

        const atomicClasses = atoms({
            reset: typeof component === 'string' ? component : 'div',
            ...atomProps,
        })

        const combinedClasses = clsx(atomicClasses, className)

        return createElement(component, {
            className: combinedClasses.length === 0 ? undefined : combinedClasses.trim(),
            ...nativeProps,
            ...useDataAttributes(dataAttributes, dataTest),
            ref,
        })
    }
)
