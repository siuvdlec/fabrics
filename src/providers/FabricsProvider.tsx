import clsx from 'clsx'
import { FC, createContext, useContext, ReactNode } from 'react'
import * as commonStyle from '../css/common/common.css'
import type { FabricsTheme } from '../themes/makeTheme'

export interface FabricsProviderProps extends Pick<FabricsContextValue, 'env'> {
    theme: FabricsTheme
    children: ReactNode
}

interface FabricsContextValue {
    theme: FabricsTheme
    env: 'production' | 'staging' | 'development'
    canUseDOM: boolean
}

export const FabricsContext = createContext<FabricsContextValue | null>(null)

const canUseDOM = typeof window !== 'undefined'

export const FabricsProvider: FC<FabricsProviderProps> = ({ children, theme, ...context }) => {
    return (
        <FabricsContext.Provider value={{ ...context, theme, canUseDOM }}>
            <div className={clsx(theme.tokensClassName, commonStyle.typographyRoot)}>{children}</div>
        </FabricsContext.Provider>
    )
}

export const useFabricsContext = (): FabricsContextValue => {
    const c = useContext(FabricsContext)

    if (c === null) {
        throw new Error('Fabrics context not found')
    }

    return c
}
