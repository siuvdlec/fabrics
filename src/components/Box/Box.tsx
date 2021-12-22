import type { FC } from 'react'
import * as style from './Box.css'

export interface BoxProps {}

export const Box: FC<BoxProps> = () => {
    return <div className={style.className}>Hello</div>
}
