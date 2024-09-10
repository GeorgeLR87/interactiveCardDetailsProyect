export const formatCardNumber = (cardNumber: string) => {

    const limited = cardNumber.slice(0, 19)
    const formatted = limited.replace(/(\d{4})(?=\d)/g, '$1 ')

    return formatted
}

export const formatMonth = (month: string): string => {
    const numMonth = Number(month)
    if (isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
        return ''
    }
    return numMonth < 10 ? `0${numMonth}` : `${numMonth}`
}

export const formatYear = (year: string): string => {
    const numYear = Number(year)
    if (isNaN(numYear) || numYear < 0 || numYear > 99) {
        return ''
    }
    return numYear < 10 ? `0${numYear}` : `${numYear}`
}

export const formatCVC = (cvc: string): string => {
    const cleanedCVC = cvc.replace(/\D+/g, '')
    return cleanedCVC.slice(0, 3);
}