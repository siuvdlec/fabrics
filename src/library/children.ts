export const componentsContainer = ['div', 'ol', 'ul'] as const
export const componentsItemMap = {
    div: 'div',
    ol: 'li',
    ul: 'li',
} as const
export type ComponentsContainer = typeof componentsContainer[number]
export type ComponentsItem = typeof componentsItemMap[ComponentsContainer]

type Element<P> = React.ReactElement<P> | null
type Elements<P> = Array<React.ReactElement<P> | null> | null

export type ReactElementChildren<P> =
    | Element<P>
    | Elements<P>
    // Elements in the middle
    | [Element<P>, Elements<P>, Element<P>]
    | [Element<P>, Element<P>, Elements<P>, Element<P>, Element<P>]
    | [Element<P>, Element<P>, Element<P>, Elements<P>, Element<P>, Element<P>, Element<P>]
    // Elements at the end
    | [Element<P>, Elements<P>]
    | [Element<P>, Element<P>, Elements<P>]
    | [Element<P>, Element<P>, Element<P>, Elements<P>]
    | [Element<P>, Element<P>, Element<P>, Element<P>, Elements<P>]
    | [Element<P>, Element<P>, Element<P>, Element<P>, Elements<P>, Elements<P>]
    | [Element<P>, Element<P>, Element<P>, Element<P>, Elements<P>, Elements<P>, Elements<P>]
    // Elements at the beginning
    | [Elements<P>, Element<P>]
    | [Elements<P>, Element<P>, Element<P>]
    | [Elements<P>, Element<P>, Element<P>, Element<P>]
    | [Elements<P>, Element<P>, Element<P>, Element<P>, Element<P>]
    | [Elements<P>, Element<P>, Element<P>, Element<P>, Element<P>, Element<P>]
    | [Elements<P>, Element<P>, Element<P>, Element<P>, Element<P>, Element<P>, Element<P>]
    // Element at the beginning
    | [Element<P>, Elements<P>, Elements<P>]
    | [Element<P>, Elements<P>, Elements<P>, Elements<P>]
    | [Element<P>, Elements<P>, Elements<P>, Elements<P>, Elements<P>]
    | [Element<P>, Elements<P>, Elements<P>, Elements<P>, Elements<P>, Elements<P>]
    // Element at the end
    | [Elements<P>, Elements<P>, Element<P>]
    | [Elements<P>, Elements<P>, Element<P>]
    | [Elements<P>, Elements<P>, Elements<P>, Element<P>]
    | [Elements<P>, Elements<P>, Elements<P>, Elements<P>, Element<P>]
