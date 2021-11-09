let bts = document.querySelectorAll('button');
for (const key in bts) {
    if (bts.hasOwnProperty(key)) {
        const bt = bts[key];
        bt.addEventListener('click', () => {
            bt.classList.toggle('open');
        });
    }
}