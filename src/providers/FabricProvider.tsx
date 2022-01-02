import '../css/reset.css'
import type { FC } from 'react'
import type { FabricTheme } from '../themes/makeTheme'

export interface FabricProviderProps {
    theme: FabricTheme
}

export const FabricProvider: FC<FabricProviderProps> = ({ children, theme }) => {
    return (
        <div className={theme.className}>
            <style type="text/css">{`html{line-height: 1.15; font-size: 16px} body{margin:0; font-family: 'IBM Plex Mono', monospace;}}`}</style>
            {children}
        </div>
    )
}
