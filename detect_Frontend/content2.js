// content.js

//var btn=document.getElementById('popup-button');

function anotherFunction(url) {
    console.log(`The URL is: ${url}`);
    // do something with the URL value here
    const scriptPath = '/path/to/your/script.py';
    fetch(`http://127.0.0.1:8000/api/${url}`, {

       method: 'GET',

      // headers: {
      //'Content-Type': 'application/json'
       //},
       //body: JSON.stringify({ script_path: scriptPath })
    })
    .then(response => response.json())
    .then(data => {
      
      console.log(data);
      document.getElementById('result').textContent = data;   
    })
    .catch(error => {
      console.log(error);
    });
  }


function runScript() {

    chrome.tabs.query({ active: true }, tabs => {
        const url = tabs[0].url;
        anotherFunction(url);
      });
      
      

   
  }

 
  
  document.getElementById('popup-button').addEventListener("click", () => {
    console.log("hello")
    runScript();
  });
