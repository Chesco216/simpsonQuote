import { results } from "./results";

/**
 * 
 * @param { HTMLDivElememnt } container 
 * @param { HTMLImgElement } imgCard 
 * @param { Promise<object> } data
 */
export const guess = async ( container, imgCard, data ) => {

    container.innerHTML = '';

    const button = document.querySelector('#send');
    button.disabled = false;
    document.querySelector('#back').disabled = true;

    const imgpath = '../../unknown.jpg';
    
    container.append(data.quote);
    imgCard.src = imgpath;

    const box = document.createElement('input');
    container.append(box);
    
    button.addEventListener( 'click', () => {
        results( container, imgCard, data, box.value );
    })

}