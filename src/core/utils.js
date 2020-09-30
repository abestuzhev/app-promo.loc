export function createAction(elements){
    const arr = [];
    elements.map( item => {
        
        if(item.actionStatus){
            arr.push(toHTML(item));      
            $root.innerHTML = arr.join('');
        }        
    });
}

export function toHTML(item){
    return `
        <div>${item.productTitle}</div>
    `
}

export async function request(url, method = 'GET', data = null){
    const headers = {};
    let body;

    try{
        if(data){
            headers['Content-Type'] =  'application/json';
            body = JSON.stringify(data);
        }
        const response = await fetch(url, {
            method,
            headers,
            body
        });
        return await response.json();
    }catch(e){
        throw new Error(e.message);
    }    
}