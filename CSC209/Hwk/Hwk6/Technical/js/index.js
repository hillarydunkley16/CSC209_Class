//tutorials used: 
//https://www.w3schools.com/html/html_tables.asp
//https://www.w3schools.com/jsref/jsref_obj_array.asp
//https://www.w3schools.com/jsref/met_document_getelementbyid.asp
//https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp

initMat();
updateMat(1, 1, 1);
updateMat(0, 0, 1);
updateMat(2, 0, 1);
updateMat(0, 1, 1);


function initGrid(length, height){
    if (!length){
        length = LENGTH;
    }
    if (!height){
        height = HEIGHT;
    }
    
    let grid = document.getElementById("gameContainer");
    let table = document.createElement("table");
    table.id = 'grid'; 
    // console.log(mat.length);
    // dimensions are currently hard-coded, will change to be dynamic
    for (let i = 0; i < LENGTH; i++){
        let row = document.createElement("tr");
        row.id = i;
        for (let j = 0; j < HEIGHT; j++){
            let cell = document.createElement("td");
            cell.id = i + "-" + j;
            // console.log(cell.id); 
            if (mat[i][j] == 1){
                cell.setAttribute('class', 'alive'); 
                console.log(cell.className);
            }else{
                cell.setAttribute('class', 'dead')
                console.log(cell.className);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    // console.log(mat);
    grid.append(table);
    
    console.log(document.getElementById("0").innerHTML);
}

function initMat(length, height){
    // length & height are hardcoded for now, will change to be dynamic
    if (!length){
        length = LENGTH;
    }
    if (!height){
        height = HEIGHT;
    }
    console.log(`LENGTH: ${length}`);
    console.log(`HEIGHT: ${height}`);
    // console.log(mat.length);
    for(var i=0; i<height; i++) {
        mat[i] = []; 
        for (var j = 0; j < length; j++){
            mat[i][j] = 0;
        }
    }
    console.log(mat);
    return mat;
}
function updateMat(x, y, value) {
    mat[x][y]= value;
  }


function updateDimensions(){
    var newLength = document.getElementById("length").value; 
    var newHeight = document.getElementById("height").value;
    console.log(newLength); 
    console.log(newHeight);
    // let newMat = [...mat]; 
    var numtdElements = (newLength * newHeight); 
    console.log("number of td elements " + (newLength * newHeight)); 
    let grid = document.getElementById("gameContainer");
    let td = document.getElementsByTagName("td"); 
    let table = document.getElementById("grid"); 
    //check if newHeight is bigger or smaller than mat[0].length: if bigger, add elements; if smaller, pop elements
    if (mat[0].length < newHeight){
        console.log(`${mat[0].length} is smaller than ${newHeight}`)
        for (var k = mat[0].length; k > newHeight; k++){
            mat[k] = [];
            for (var l = mat.length; l > newLength; l++){
                mat[k][l] = 0;
            }
        }
        console.log(mat)
        
    }else if (mat[0].length > newHeight){
        console.log(`${mat[0].length} is bigger than ${newHeight}`)
    }
    
    // check if total number of tds is less than or more than newLength * newHeight
    //if tds is more than newLength * newHeight, remove excess elements starting from last row
    //if tds is less than newLength * newHeight, add additional elements starting from last row 
    console.log("td length " + td.length); 
    if (td.length < numtdElements){
        console.log(`number of existing td elements ${td.length} is less than the new total number of td elements ${numtdElements}.`);
        //start from 0 check if element already exists; add elements until equals newLength 
        //start from 0 check if element already exists; add elements until equals newHeight
        for (let i = 0; i < newLength; i++){
            if(!document.getElementById(i)){
                var row = document.createElement("tr");
                row.id = i;
            }else{
                var row = document.getElementById(i);
            }
            for (let j = 0; j < newHeight; j++){
                if (!document.getElementById(i + "-" + j)){
                    console.log(`cell ${i+"-"+j} doesn't exist yet`);
                    console.log(i+"-"+j);
                    let cell = document.createElement("td");
                    cell.id = i + "-" + j;
                    cell.setAttribute('class', 'dead')
                    console.log(cell.className);
                    row.appendChild(cell);
                }else{
                    console.log(`cell ${i+"-"+j} already exists`); 
                }
            }
            table.appendChild(row);
        }
        grid.append(table);
    } else if (td.length > numtdElements){
        console.log(`number of existing td elements ${td.length} is more than the new total number of td elements ${numtdElements}.`)
        console.log(mat.length); 
        console.log(mat[0].length); 
            //check the i & j of td
            //if i or j is greater than newLength or newHeight, remove, else keep. 
            for (let i = 0; i < mat.length; i++){
                for (let j = 0; j < mat[0].length; j++){
                    if ((i > newLength-1) || (j > newHeight -1)){
                        console.log(i+"-"+j);
                        console.log("out of bounds!!"); 
                        let tdElement = document.getElementById(i+"-"+j);
                        tdElement.remove(); 
                    }
                }
            }
            
    
    }
    initMat(newLength, newHeight); 
}

function evaluateGrid(){
    let m = mat.length, n = mat[0].length;
    let nextGen = [...mat]
 
    console.log(nextGen);

    // Directions of eight possible neighbors
    let directions = [
        [ 0, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, 0 ], [ 1, 1 ],
        [ -1, -1 ], [ 1, -1 ], [ -1, 1 ]
    ];

    // Update nextGen based on the grid rules
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let live = 0;

            // Count the number of live neighbors
            for (let [dx, dy] of directions) {
                let x = i + dx, y = j + dy;

                // Check if the neighbor is live
                if (x >= 0 && x < m && y >= 0 && y < n
                    && (mat[x][y] === 1 || mat[x][y] === 3)) {
                    live++;
                }
            }

            // If current cell is live and number of live neighbors is less than 2 or greater than 3, the cell will die
            if (mat[i][j] === 1 && (live < 2 || live > 3)) {
                console.log(mat[i][j]);
                // console.log(i);
                // console.log(j); 
                console.log(`${mat[i][j]} will die!`);
                nextGen[i][j] = 3;
                console.log(nextGen[i][j]);
                console.log(nextGen);
            }

            // If current cell is dead and the number of live neighbors is equal to 3, the cell will become live
            if (mat[i][j] === 0 && live === 3) {
                console.log(mat[i][j]);
                // console.log(i);
                // console.log(j); 
                console.log(`${mat[i][j]} will live!`);
                nextGen[i][j] = 2;
                console.log(nextGen[i][j]);
            }
        }
    }

    // Update and print the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // console.log("in for loop!");
            // Convert temporary values back
            if (nextGen[i][j] === 2) {
                // console.log("if statement reached");
                nextGen[i][j] = 1;
            } else if (nextGen[i][j] === 3) {
                // console.log("else if statement reached");
                // console.log(nextGen[i][j]);  
                nextGen[i][j] = 0;
                console.log(nextGen[i][j]);  
            }
        }
    }

    // console.log(nextGen);
    return nextGen;
}

function updateGrid() {
    let nextGen = evaluateGrid(); 
    console.log("element" + document.getElementById("0-0"));
    for (let i = 0; i < nextGen.length; i++) {
        // let row = document.getElementById(i);
        // console.log(row); 
        for (let j = 0; j < nextGen[0].length; j++) {
            let tdElement = document.getElementById(i+"-"+j);
            console.log(tdElement);
            console.log(nextGen[i][j]);
            if (tdElement) {
                tdElement.className = nextGen[i][j] === 1 ? "alive" : "dead";
            } else {
                console.log(`Item at ${i}-${j} not found!`);
            }
        }
    }
    
}

// console.log(updateDimensions())