let commonImported = false

export const markCommonImported = () => {
    commonImported = true
}

export const ensureCommonImported = () => {
    if (!commonImported) {
        throw new Error(
            'Fabric components imported before common.\n' +
                'Make sure to import the Fabric common module before importing any components.\n' +
                'This ensures the CSS reset does not override the component styles.\n' +
                '\n' +
                ' e.g.\n' +
                "import 'fabric/css/common'; // <-- Must be first\n" +
                "import { Box } from 'fabric/components'\n"
        )
    }
}
