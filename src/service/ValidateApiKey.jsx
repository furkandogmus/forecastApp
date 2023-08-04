export const validateApiKey = async key => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=${key}&units=metric`)
    return response.status < 300
}
