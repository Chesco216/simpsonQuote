/**
 * 
 * @param {string}  API url
 * @returns {promise} data 
 */

export const getQuote = async () => {

    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
    const res = await fetch(url);
    const dataA = await res.json();
    const data = dataA[0];
    
    return data;
}