// import the function that checks the URL
import { checkUrlValidation } from './urlValidation'

const serverURL = 'https://localhost:8000/api'

const scoreTag = document.querySelector(".score_tag");
const agreement = document.querySelector(".agreement");
const text = document.querySelector(".text");
const errorSection = document.querySelector(".error-section");
const resultSection = document.querySelector(".result-section");

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;
    
    // Check if the URL is valid
    
        console.log(checkUrlValidation(formText));
        // If the URL is valid, send it to the server using the serverURL constant above
        if(checkUrlValidation(formText) == true){
            document.getElementById('name').classList.remove("error");
            errorSection.style.display = 'none';
            resultSection.style.display = 'block';
            sendData(formText);

        }
        else {
            document.getElementById('name').classList.add("error");
            errorSection.style.display = 'block';
            resultSection.style.display = 'none';        
        }
}

// Function to send data to the server
function sendData (url){
       
    fetch("/postURL", {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },

        // send the URL into the post body
        body: JSON.stringify({
            URL: url
        }),       
    })

    .then(response => {
        // Check if the response is valid
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })

    .then(data => {
        scoreTag.innerHTML = data.score_tag;
        agreement.innerHTML = data.agreement;
        text.innerHTML = data.text;
    })

    .catch(error => {
        console.error('Error:', error);
    });

}

// Export the handleSubmit function
export { handleSubmit };
