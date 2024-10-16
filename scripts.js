const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const contactsList = document.getElementById("contactsList");

const contacts = [
    {name:"Luan", number:"(51)99358-6706" }, 
    {name:"Maria", number:"(51)99957-4310"} ,
    {name:"Eliane", number:"(51)98922-0966"} ,
    {name:"Lucas", number:"(51)99283-5062"}
]

function searchContact() {
    const nameSearched = searchInput.value.toLowerCase();
    contactsList.innerHTML = "";

    let itFound = false;

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name.toLowerCase().includes(nameSearched)) {
            const p = document.createElement("p");
            p.textContent = `${contacts[i].name} - ${contacts[i].number}`;
            contactsList.appendChild(p);
            itFound = true;
          }
    }

    if (!itFound) {
        contactsList.innerHTML = "<p>Contato não encontrado.</p>";
    }
}
searchButton.addEventListener("click", searchContact);