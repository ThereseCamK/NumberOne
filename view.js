let picture = "https://mysticalnumbers.com/wp-content/uploads/2012/06/Number-1-Meaning-One.jpg";



show();
function show(){
    let html = '';

    html += `
    
      
    
        <div class="main">
   
        <h1>FørstePlass!!</h1>

        <img onclick="showNumberOne()" src="${picture}">
       
        </div>
    `;
   appDiv.innerHTML = html;
}

function showNumberOne(){
    if(picture == "https://mysticalnumbers.com/wp-content/uploads/2012/06/Number-1-Meaning-One.jpg"){
        picture = 
        "https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/190115991_827072641553645_2084823265890803824_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_t8Khaf_hw8AX869RGr&_nc_ht=scontent-arn2-1.xx&oh=00_AT_5soVWQjElmT1Q1lGYEEXFiZrNALehEISkmDuTg4f8vw&oe=620020A0"
        ;
    }
    else picture =  "https://mysticalnumbers.com/wp-content/uploads/2012/06/Number-1-Meaning-One.jpg";
   
    show()
}