export const ascending = (data) => {
    return {
        type: 'ASCENDING',
        payload:data
    }
}

export const descending = () => {
    return {
        type: 'DESCENDING'
    }
}