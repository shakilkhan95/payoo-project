function getValue(id, type){
    if(type === 'element'){
        const element = document.getElementById(id);
        return element;
    } else if (type === 'value'){
        const value = document.getElementById(id).value;
        return value;
    } else if(type === 'text'){
        const text = document.getElementById(id).innerText;
        return text;
    }
}