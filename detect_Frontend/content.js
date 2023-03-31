// content.js

//var btn=document.getElementById('popup-button');

function runScript() {

    const scriptPath = '/path/to/your/script.py';
   const p=window.location.href 
    fetch(`http://127.0.0.1:8000/api/${p}`, {

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

  chrome.tabs.query(
    {active:true},
    tabs=>{
               const tab=tabs[0];
               console.log("URL:", tab.url)
               }
                )
  
  document.getElementById('popup-button').addEventListener("click", () => {
    console.log("hello")
    runScript();
  });
