import { index } from "../index";

/**
 * 
 * @param { HTMLDivElement } container 
 * @param { HTMLImageElement } imgCard 
 * @param { Promise<object> } data 
 * @param { string } result 
 */
export const results = ( container, imgCard, data, result ) => {

    const button = document.querySelector('#back');
    const reslow = result.toLocaleLowerCase();
    container.innerHTML = ''

    button.disabled = false;
    document.querySelector('#send').disabled = true;
    imgCard.src = data.image;    

    if( reslow == data.character.toLocaleLowerCase() ) {
        container.append('Congratulations');
    }
    else {
        container.append('No hay esa voz pichon');
    }

    button.addEventListener( 'click' , () => {
        index();
        button.disabled = true;
    });
}