const addButton = document.querySelector('#submit-button');
const contactName = document.querySelector('#contact-name');
const contactNumber = document.querySelector('#contact-number');
const phoneBook = document.querySelector('.phone-book');

const addNewContact = () => {
    if (contactName.value !== "" && contactNumber.value !== "") {
        new item(contactName.value, contactNumber.value);
        contactName.value = "";
        contactNumber.value = "";
    } else {
        alert('Uzupełnij pola');
    }
}

addButton.addEventListener('click', addNewContact);

class item {
    constructor(name, number) {
        this.createDiv(name, number);
    }
    
    createDiv(name, number) {
        const singleContact = document.createElement('div');
        phoneBook.appendChild(singleContact);

        const input = document.createElement('input');
        input.value = `${name} (${number})`;
        input.disabled = true;
        input.type = "text";

        const editButton = document.createElement('button');
        editButton.innerHTML = "Edit";

        const removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove";

        singleContact.appendChild(input);
        singleContact.appendChild(editButton);
        singleContact.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(singleContact));
    }

    edit = (input) => input.disabled = !input.disabled;
    remove = (item) => phoneBook.removeChild(item);
}