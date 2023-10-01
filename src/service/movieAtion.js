export const searchProduct = async (title) => {
    let resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=${title}`)
    return resp.json()
}

export const fetchUpcoming = async () => {
    let resp = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
    return resp.json()
}
export const fetchPopular = async () => {
    let resp = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
    return resp.json()
}
export const fetchNowPlaying = async () => {
    let resp = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
    return resp.json()
}
export const fetchToprate = async () => {
    let resp = await fetch(" https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
    return resp.json()
}