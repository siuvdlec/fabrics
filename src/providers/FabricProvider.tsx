import '../globalStyle/reset.css'
import type { FC } from 'react'

export const FabricProvider: FC = ({ children }) => {
    return (
        <>
            <style type="text/css">{`html{line-height: 1.15; font-size: 16px} body{margin:0; font-family: 'IBM Plex Mono', monospace;}}`}</style>
            {children}
        </>
    )
}
