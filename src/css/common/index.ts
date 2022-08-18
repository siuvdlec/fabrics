import { markCommonImported } from './commonTracker'

if (process.env.NODE_ENV === 'development') {
    markCommonImported()
}

// Ensure common and atoms are the lowest specificity
import './common.css'
import '../atoms/atoms'
