var jobTitle = document.querySelector('.jobTitle');

function randomizeInterval(interval) {
    return interval + Math.random() * interval;
}

function delElChar(el) {
    el.innerText = el.innerText.substring(0, el.innerText.length - 1);
}

function delElText(el, interval = 100) {
        return new Promise(resolve => {
            delElChar(el);
        
            if (el.innerText.length === 0) {
                return resolve();
            }
            
            setTimeout(() => {
                resolve(delElText(el, interval)) ;
            }, randomizeInterval(interval));
        })
}

function addElChar(el, char) {
    el.innerText = el.innerText + char;
}

function addElText(el, text,  interval = 800) {
    while (el.innerText.length < text.length) {
        setTimeout(addElChar, randomizeInterval(), el, text[el.innerText.length]);
    }
}

['interface developer', 'full-stack developer'].forEach(jobTitleText => {
    delElText(jobTitle).then(() => {
        console.log('pippo');
    });
});