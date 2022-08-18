import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box/Box'
import type { BoxDataAttribute, BoxPadding } from '../Box/Box'
import * as styles from './ContentBlock.css'

export interface ContentBlockProps
    extends BoxDataAttribute,
        Omit<BoxPadding, 'paddingLeft' | 'paddingRight'>,
        Pick<BoxProps, 'className'> {
    children: ReactNode
    width?: keyof typeof styles.width
}

export const ContentBlock = ({
    width = 'page',
    children,
    paddingX = 'm',
    className,
    ...allBoxProps
}: ContentBlockProps) => {
    return (
        <Box className={[styles.root, styles.width[width], className]} paddingX={paddingX} {...allBoxProps}>
            {children}
        </Box>
    )
}
