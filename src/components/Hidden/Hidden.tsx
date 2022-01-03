import type { FC, ReactNode } from 'react'
import { breakpointsDictMap } from '../../css/breakpoints'
import { resolveResponsiveRangeProps, ResponsiveRangeProps } from '../../css/props/responsiveRangeProps'
import { Box } from '../Box/Box'
import * as styles from './Hidden.css'

interface HiddenProps extends ResponsiveRangeProps {
    children: ReactNode
    print?: boolean
    inline?: boolean
}

const Hidden: FC<HiddenProps> = ({ children, above, below, print, inline, ...allBoxDataProps }) => {
    const hiddenOnPrint = Boolean(print)
    const rangeProps = resolveResponsiveRangeProps({ above, below })

    const display = inline ? 'inline' : 'block'

    const responsiveDisplay = breakpointsDictMap(b => (rangeProps[b] ? 'none' : display))

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

export { HiddenProps, Hidden }
