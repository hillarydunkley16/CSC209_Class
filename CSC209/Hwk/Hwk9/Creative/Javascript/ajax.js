function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let ul = document.createElement("ul"); 
        const obj = JSON.parse(this.responseText);
        console.log(obj); 
        for (let i = 0; i < obj.length; i++){
            entry = obj[i]; 
            console.log(entry['uname']); 
            let li = document.createElement('li'); 
            li.innerHTML = entry['uname']; 
            ul.appendChild(li); 
        }
        document.getElementById("demo").innerHTML = ul.innerHTML; 
        // document.getElementById("demo").innerHTML =
        // this.responseText;
    }
    xhttp.open("GET", "./Output/users.json");
    
    xhttp.send();
    }