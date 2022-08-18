import clsx from 'clsx'
import { FC, createContext, useContext, ReactNode } from 'react'
import * as commonStyle from '../css/common/common.css'
import type { FabricTheme } from '../themes/makeTheme'

export interface FabricProviderProps extends Pick<FabricContextValue, 'env'> {
    theme: FabricTheme
    children: ReactNode
}

interface FabricContextValue {
    theme: FabricTheme
    env: 'production' | 'staging' | 'development'
    canUseDOM: boolean
}

export const FabricContext = createContext<FabricContextValue | null>(null)

const canUseDOM = typeof window !== 'undefined'

export const FabricProvider: FC<FabricProviderProps> = ({ children, theme, ...context }) => {
    return (
        <FabricContext.Provider value={{ ...context, theme, canUseDOM }}>
            <div className={clsx(theme.tokensClassName, commonStyle.typographyRoot)}>{children}</div>
        </FabricContext.Provider>
    )
}

export const useFabricContext = (): FabricContextValue => {
    const c = useContext(FabricContext)

    if (c === null) {
        throw new Error('Fabric context not found')
    }

    return c
}
