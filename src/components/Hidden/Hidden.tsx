import type { FC, ReactNode } from 'react'
import {
    ResponsiveRangeProps,
    resolveResponsiveRangeProps,
    resolveResponsiveRangeFlatPropsOptional,
} from '../../library/props/responsiveRangeProps'
import { Box } from '../Box/Box'
import * as styles from './Hidden.css'

export interface HiddenProps extends ResponsiveRangeProps {
    children: ReactNode
    print?: boolean
    inline?: boolean
}

export const Hidden: FC<HiddenProps> = ({ children, above, below, print, inline, ...allBoxDataProps }) => {
    const hiddenOnPrint = Boolean(print)
    const rangeProps = resolveResponsiveRangeProps({ above, below })

    const display = inline ? 'inline' : 'block'

    const responsiveDisplay = resolveResponsiveRangeFlatPropsOptional(rangeProps, 'none' as const, display)

    return (
        <Box
            display={responsiveDisplay}
            className={hiddenOnPrint ? styles.hiddenOnPrint : undefined}
            component={inline ? 'span' : 'div'}
            {...allBoxDataProps}
        >
            {children}
        </Box>
    )
}
