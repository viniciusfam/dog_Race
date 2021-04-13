
if(localStorage.length!==0){

   localStorage.getItem('color')? document.getElementById("fim").style.backgroundColor = localStorage.getItem('color'):null;
   localStorage.getItem('fonte')? document.getElementById("nomecachorro").classList.add(localStorage.getItem('fonte')):null;
   localStorage.getItem('nome')? document.getElementById("txtnome").value = localStorage.getItem('nome'):null;
   localStorage.getItem('img')? document.getElementById('img').src = localStorage.getItem('img'):null;

}

let locals= {img:'',fonte:'',color:'',nome:'',date:''}



fetch('dogapi.php', {
    method: 'GET',
}).then(response =>(response.json()))
    .then(data => {
        for (const dogs in data) {
            let select = document.getElementById('txts');
            select.options[select.options.length] = new Option(dogs, dogs);
            select.onclick = (e) => {
                click(e)
            }
            
        }
    });


  



const fontes = ['roboto', 'kanit', 'serif', 'oxygen', 'sans']
document.getElementById('nomecachorro').innerHTML = document.getElementById("txtnome").value;
let fselect = document.getElementById('txtfonte');
fselect.onfocus=(e)=>{this.selectedIndex = -1}
fselect.onchange=(e)=>{selectFonte()}

fontes.forEach((e) => {
    let select = document.getElementById('txtfonte');
    let option = select.options[select.options.length] = new Option(e, e);
    option.id = e
    option.classList.add(e);


})




function selectFonte() {
    let font = document.getElementById("txtfonte");
    font.setAttribute("selected", true);
    let selected_font = font.options[font.selectedIndex].id;
     let label = document.getElementById("nomecachorro")
     fontes.filter(
         (e)=>(label.classList.contains(e)?
         label.classList.remove(e):
         ''
         ))
 
         label.classList.add(selected_font); 

         locals.fonte = selected_font

}

function changefonte() {
    let selectfonte = document.getElementById("txtfonte")
    let opts = selectfonte.getElementsByTagName("option")
    let name = document.getElementById("txtnome").value
    locals.nome = name

    for(const v in opts){
        opts[v].innerHTML =  name

    }
}


function changelabel() {
    let dog_name = document.getElementById("txtnome").value;
    document.getElementById("nomecachorro").innerHTML = dog_name;

}

function changeName() {

    changefonte()
    changelabel()
}




const click = (e) => {
    console.log(e)
    fetch('dogapi.php', {
        method: 'POST',
        body: e.target.value
    }).then(response => response.json())
        .then(data => {
            document.getElementById('img').src = data
            locals.img = data
        });

}

function selectColor(){
    let rgb = document.getElementById("txtcor").value;
    console.log(rgb)
    document.getElementById("fim").style.backgroundColor = rgb;
    locals.color = rgb

}


function save(){
locals.date = new Date().toString()

    for (const l in locals) {
        localStorage.setItem(l, locals[l])

    }
    
}

