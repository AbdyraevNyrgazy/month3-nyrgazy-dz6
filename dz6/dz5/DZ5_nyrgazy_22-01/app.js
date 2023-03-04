const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const convert = (elem, target, isTrue) => {
    elem.addEventListener("input", ()=>{
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                if (elem === som){
                    target.value = (elem.value / data.usd).toFixed(2)
                    isTrue.value = (elem.value / data.eur).toFixed(2)
                }else if (elem === usd){
                    target.value = (elem.value * data.usd).toFixed(2)
                    isTrue.value = (elem.value * data.usd / data.eur).toFixed(2)
                } else if (elem === eur){
                    target.value = (elem.value * data.eur).toFixed(2)
                    isTrue.value = (elem.value * data.eur / data.usd).toFixed(2)
                }
                elem.value === "" ? (target.value = "") : null
                elem.value === "" ? (isTrue.value = "") : null
            })
        })
}

convert(som, usd,eur, 69)
convert(usd, som, eur,"")
convert(eur, som, usd,"")



fetch('server.php')
    .then(res => res.json())
    .then(dat => console.log(dat))
    .catch(er => console.error(er))
    .finally(red => console.log(red))