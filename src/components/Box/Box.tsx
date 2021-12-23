import type { FC } from 'react'
import * as style from './Box.css'

export interface BoxProps {}

export const Box: FC<BoxProps> = ({ children }) => {
    return <div className={style.className}>{children}</div>
}
