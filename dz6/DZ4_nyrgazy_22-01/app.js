const btn = document.querySelector('.get')
const box = document.querySelector('.wrapper')
btn.addEventListener('click',()=> {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(i => {
                const block = document.createElement('div')
                block.innerHTML = `
            <div class="card">
                <img class="card_img" src="${i.photo}" alt="">
                <p>${i.title}</p>
                <span>${i.price}</span>
            </div>
            `
                box.append(block)
            })
        })
})

