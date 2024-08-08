// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

// const firebaseConfig = {
//     databaseURL: process.env.DATABASE_URL
// }

//CONFIGURATION-----------------

//Step 1 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"; //firebase Import Code
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js"; //Step 5 code after setting up realtime database

//Step 2
const firebaseConfig = { //configuration details for required feature i.e. realtime database
    databaseURL:   "https://chrome-lead-tracker-extension-default-rtdb.asia-southeast1.firebasedatabase.app/" //STEp 4
                // STEP-7 Replacing actula URL with process.env.DATABASE_URL
}

// console.log(firebaseConfig.databaseURL)


//Step 3

const app = initializeApp(firebaseConfig); // It is using intializeApp function and taking firebaseConfig object to initialize app
const database = getDatabase(app) //STEP 6

//ACTUAL CODE---------------

const referenceInDb = ref(database, "Leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDb, inputEl.value)
    console.log(inputEl.value)
    inputEl.value = ""
    
})