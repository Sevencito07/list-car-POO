
class Car{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addCar(item){
     const list = document.getElementById('list');
     const element = document.createElement('div')
     element.innerHTML=`
    <ul>
    <li>name car :${item.name} </li>
    <li>price car :${item.price}</li>
    <li>year car : ${item.year}</li>
    <button name="delete"id="clicked">delete</button>
    </ul>
     `;
     list.appendChild(element)
    }
    resetForm(){
        document.getElementById('conten-form').reset();

    }

    deleteCar(element){
      if(element.name === 'delete'){
        element.parentElement.parentElement.remove()
      }
     
    }
    showAlert(){
        
    }
}
function message(msg, type="success"){

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "green" : "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();

} 

document.getElementById('conten-form')
   .addEventListener('submit', function(e){
    e.preventDefault()
    const name  = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year  = document.getElementById('year').value;

    const car = new Car(name, price, year)
    const ui = new UI()
    //if(name ==='' || price==='' || year===''){
    //   return message('empty space xxx', 'error')
    //}
    ui.addCar(car)
   /// ui.resetForm()
    message('adding product..')



   })
   document.getElementById('list').
        addEventListener('click', (e)=>{
        const ui = new UI()
        ui.deleteCar(e.target)
        message("deleting list", "error" )
        e.preventDefault()
       })