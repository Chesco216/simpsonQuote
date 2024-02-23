import { getQuote } from "./resources/get-qoute";
import { guess } from "./templates/guess";

export const index = async () => {

    const container = await document.querySelector('#card')
    const imgCard = await document.querySelector('img')
    const data = await getQuote();
    console.log(data);
    guess( container, imgCard, data );
    
}