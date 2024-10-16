const input = document.querySelector('input')
const p = document.querySelector('p')

function search() {
    for (const contact of contacts) {
        if(input.value.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = `Contato encontrado: ${contact.name} tel:${contact.number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado"
        }
    }
}

const contacts = [
    {name:"Luan", number:"(51)99358-6706" }, 
    {name:"Maria", number:"(51)99957-4310"} ,
    {name:"Eliane", number:"(51)98922-0966"} ,
    {name:"Lucas", number:"(51)99283-5062"}
]