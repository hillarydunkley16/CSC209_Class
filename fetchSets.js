function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const data = JSON.parse(this.responseText); 
        console.log(data.length)
        let setContainer = document.getElementById("viewCards"); 
        for (let i = 0; i < data.length; i++){
            console.log(i); 
            let set = document.createElement("div"); 
            // console.log(set); 
            let setTitle = document.createElement("h2"); 
            setTitle.textContent = data[i].setTitle;
            console.log(setTitle);
            set.appendChild(setTitle); 
            console.log(set); 
            
            setContainer.appendChild(set); 
        }
    }
    xhttp.open("GET", "../Output/flashCardSet.json");
    
    xhttp.send();
    }

loadDoc(); 
