const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
// gerar um código rgb aleatório como esse: #f15025
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

//gera número aleatório do comprimento de hex
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length) // para números reais com mais de 2 casas decimais Math.floor mostrará apenas primeira cas
}