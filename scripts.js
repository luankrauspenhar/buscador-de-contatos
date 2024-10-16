const input = document.querySelector('input')
const p = document.querySelector('p')

function search() {
    let i = 0;
    let found;
  
    do {
      if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
        found = contacts[i];
      }
      i++;
    } while (i < contacts.length);
  
    if (found) {
      p.innerHTML = `Contato encontrado: Nome: ${found.name}, Telefone: ${found.number}`;
    } else {
      p.innerHTML = 'Contato não encontrado.';
    }
  }









const contacts = [
    {name:"Luan", number:"(51)99358-6706" }, 
    {name:"Maria", number:"(51)99957-4310"} ,
    {name:"Eliane", number:"(51)98922-0966"} ,
    {name:"Lucas", number:"(51)99283-5062"}
]