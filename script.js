
/*
Desafio

1 - Mostrar tudo com ForEach
2 - Mapear com Map (Adicionar 10% de desconto em todos os produtos)
3 - Somar tudo com Reduce
4 - Filtrar com Filter

*/

const list = document.querySelector('ul')
const button = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonReduceAll = document.querySelector('.reduce-all')
const buttonFilterAll = document.querySelector('.filter-all')
let myLi = ''

function formatCurrency(value){
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

function showAll(productsArray) {
    myLi = '' // Limpa o conteudo antes de adicionar para não duplicar se clicar 2x
    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src="${product.src}" alt="">
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        name: product.name,
        price: product.price * 0.9, // Adiciona 10% de desconto
        vegan: product.vegan,
        src: product.src

    }))
    showAll(newPrices)

}

function reduceAllItems() {
    const totalValue = menuOptions.reduce((acc, product) => {
        return acc + product.price * 0.9
    }, 0) // 0 é o valor inicial do acumulador

    myLi = ''
    list.innerHTML = `
    <li>
        <p class="item-price-total">O valor total é de ${formatCurrency(totalValue)}</p>
    </li>
    `
}

function filterAllItems(){
    const veganProducts = menuOptions.filter((product) => {
        return product.vegan
    })

    showAll(veganProducts)
    
}



button.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonReduceAll.addEventListener('click', reduceAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)



