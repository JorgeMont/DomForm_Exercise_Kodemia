const data = {
    firstName: '', 
    lastName:'', 
    birthday: '',
    gender: 'female', 
    country: 'mexico', 
    languajes: [], 
    description: ''
    };

const firstNameInput = document.querySelector('#userName');
const lastNameInput = document.querySelector('#userLastName');
const birthdayInput = document.querySelector('#birthdate');
const genderInput = document.querySelector('#gender');
const countryInput = document.querySelector('#country');
const languagesInput = document.querySelector('#languages');
const progLanguagesInput = document.querySelectorAll('.progLang');
const descriptionInput = document.querySelector('#desc');
const sendBtn = document.querySelector('#sendBtn');

firstNameInput.addEventListener('change', (event)=>{
    data.firstName = event.target.value;
});

lastNameInput.addEventListener('change', 
    (event)=>{
        data.lastName = event.target.value;
    }
);

birthdayInput.addEventListener('change', 
    (event)=>{
        data.birthday = event.target.value;
    }
);

genderInput.addEventListener('change', 
    (event)=>{
        data.gender = event.target.value;
    }
);

countryInput.addEventListener('change', 
    (event)=>{
        data.country = event.target.value;
    }
);

languagesInput.addEventListener('change', 
    ()=>{
        const knownLang = [];
        progLanguagesInput.forEach(lang => {
            if(lang.checked){
                knownLang.push(lang.value);
            }
        });
        data.languajes = [...knownLang];
    }
);

descriptionInput.addEventListener('change', 
    (event)=>{
        data.description = event.target.value;
    }
);

sendBtn.addEventListener('click',
    () => {
        const result = () => {
            for (const prop in data){
                if(data[prop] === '' || data[prop] === []){
                    return 'Faltan datos por llenar!';
                }
            }
            return data;
        }
        console.log(result());
    }
);






