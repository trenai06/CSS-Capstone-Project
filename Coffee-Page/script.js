function fullName(){
    let fullName = document.getElementById("name").value
    return fullName
}

function emailAddress(){
    let emailAddress = document.getElementById("email").value
    return emailAddress
}

function notes(){
    let notes = document.getElementById("textarea").value
    return notes
}

function drinkChoice(){
    drinkChoice = document.getElementsByName("coffee-type")
        for (i = 0; i <= drinkChoice.length; i++){
            if(drinkChoice[i].checked === true){
                let drinkType = drinkChoice[i].value
                return drinkType
            }
        }
}

function milkChoice(){
    milkChoice = document.getElementsByName("milk-option")
        for( i = 0; i <= milkChoice.length; i++){
            if(milkChoice[i].checked === true){
            let milkType = milkChoice[i].value
            return milkType
            }
        }
}

function shotChoice(){
    let shots = [];
    let string = "";
    document.querySelectorAll('[type = "checkbox"]').forEach(item => {
        
            if (item.checked){ 
                shots.push(item.value)
             } 
            }
         )
         for(i=0; i < shots.length; i++){
                // if ( i == 0 && shots.length == 1){
                //     string += `${shots[i]}`
                // } else {
                    if(0 < i && i < shots.length){
                        string += ' ' + `,` + ' ' + `${shots[i]}` 
                    } else {
                
                string += ' ' + `${shots[i]}` + ' '
            }
            console.log(string)
        }

        return string
}

function fullOrder(){
    alert(`Hello ${fullName()}! You ordered a ${drinkChoice()} with ${milkChoice()} and ${shotChoice()} . Your notes were "${notes()}". A confirmation email will be sent to ${emailAddress()}. Please click "Okay" to confirm your order.`)
}

function newMessage(){
    message = document.getElementById("ordering").innerHTML = (`Thank you for ordering! We'll see you soon!`)
}