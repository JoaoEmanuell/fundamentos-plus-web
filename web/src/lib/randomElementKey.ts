export const getRandomElementKey = () => {
    const date = new Date()
    const time = date.getTime().toString()
    return time
}
