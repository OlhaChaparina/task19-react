
import React, { useState } from 'react';
import styles from './contacts.module.css';



const contactsData = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

function Contacts() {
    const [search, setSearch] = useState('');
    const [genderFilters, setGenderFilters] = useState({ male: true, female: true });

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleFilterChange = (gender) => {
        setGenderFilters((prevFilters) => ({
            ...prevFilters,
            [gender]: !prevFilters[gender],
        }));
    };

    const filteredContacts = contactsData.filter((contact) => {
        const nameMatch = contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(search.toLowerCase());

        const genderMatch = genderFilters[contact.gender];

        return nameMatch && genderMatch;
    });

    return (
        <div className={styles.title}>
            <div>
                <h1>Contacts </h1>
                <div className={styles.card}>
                    <input className={styles.search} type="text" placeholder="Search..." value={search} onChange={handleSearchChange} />
                </div>
            </div>
            <div>
                <label>
                    <input className={styles.check} type="checkbox" checked={genderFilters.male} onChange={() => handleFilterChange('male')} /> Male
                </label>
                <label>
                    <input className={styles.check} type="checkbox" checked={genderFilters.female} onChange={() => handleFilterChange('female')} /> Female
                </label>
            </div>
            <div>
                {filteredContacts.map((contact, index) => (
                    <Contact key={index} contact={contact} />
                ))}
            </div>
        </div>
    );
}

function Contact({ contact }) {
    return (
        <div>
            <div className={styles.border}>
                <p>Name: {contact.firstName} {contact.lastName}</p>
                <p>Phone: {contact.phone}</p>
                <p>Gender: {contact.gender}</p>
            </div>
        </div>
    );
}

export default Contacts;