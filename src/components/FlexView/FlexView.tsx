import * as React from 'react'
import { ComponentsContainer, componentsItemMap, ComponentsItem, ReactElementChildren } from '../../library/children'
import { Box, BoxProps } from '../Box/Box'
import type { ItemProps } from './Item'

export interface ContainerProps
    extends Omit<FlexViewContextValue, 'componentItem'>,
        Omit<BoxProps, 'display' | 'children'> {
    children: ReactElementChildren<ItemProps>
    itemsJustifyContent?: BoxProps['justifyContent']
    itemsAlignItems?: BoxProps['alignItems']
    component?: ComponentsContainer
}

export interface FlexViewContextValue extends Pick<BoxProps, 'justifyContent' | 'alignItems'> {
    componentItem: ComponentsItem
}

export const FlexViewContext = React.createContext<FlexViewContextValue>({
    componentItem: 'div',
})

export const Container: React.FC<ContainerProps> = ({
    children,
    itemsJustifyContent,
    itemsAlignItems,
    component,
    ...allBoxProps
}) => {
    return (
        <Box display="flex" {...allBoxProps} component={component}>
            <FlexViewContext.Provider
                value={{
                    justifyContent: itemsJustifyContent,
                    alignItems: itemsAlignItems,
                    componentItem: componentsItemMap[component ?? 'div'],
                }}
            >
                {children}
            </FlexViewContext.Provider>
        </Box>
    )
}
