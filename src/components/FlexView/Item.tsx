import { ReactNode, useContext } from 'react'
import { ResponsiveRangeProps, resolveResponsiveRangePropsOptional } from '../../library/props/responsiveRangeProps'
import { Box, BoxProps } from '../Box/Box'
import { FlexViewContext } from './FlexView'

export interface ItemProps
    extends Omit<BoxProps, 'component' | 'display' | 'justifyContent' | 'alignItems' | 'children'> {
    children: ReactNode
    hide?: ResponsiveRangeProps
}

export const Item = ({ children, hide, ...allBoxProps }: ItemProps): JSX.Element => {
    const { alignItems, justifyContent, componentItem } = useContext(FlexViewContext)

    const display = alignItems || justifyContent ? 'flex' : 'block'

    return (
        <Box
            minWidth={0}
            display={resolveResponsiveRangePropsOptional(hide, 'none', display) ?? display}
            justifyContent={justifyContent}
            alignItems={alignItems}
            component={componentItem}
            {...allBoxProps}
        >
            {children}
        </Box>
    )
}
