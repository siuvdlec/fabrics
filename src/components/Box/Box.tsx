import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { AllHTMLAttributes, createElement, ElementType, forwardRef } from 'react'
import { Atoms, atoms } from '../../css/atoms/atoms'
import { sprinkles } from '../../css/atoms/sprinkles.css'

export interface BoxBaseProps extends Omit<Atoms, 'reset' | 'background'> {
    className?: ClassValue
}

export interface BoxProps extends BoxBaseProps, Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> {
    component?: ElementType
}

export const Box = forwardRef<HTMLElement, BoxProps>(({ component = 'div', className, ...props }, ref) => {
    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in props) {
        if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
            atomProps[key] = props[key as keyof typeof props]
        } else {
            nativeProps[key] = props[key as keyof typeof props]
        }
    }

    const userClasses = clsx(className)

    const atomicClasses = atoms({
        reset: typeof component === 'string' ? component : 'div',
        ...atomProps,
    })

    const combinedClasses = `${atomicClasses}${userClasses ? ` ${userClasses}` : ''}`

    return createElement(component, {
        className: combinedClasses,
        ...nativeProps,
        ref,
    })
})

Box.displayName = 'Box'
