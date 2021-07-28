
const links = document.querySelectorAll('a');
const tempSecs = document.getElementById("test").children;
console.log(tempSecs.length)

links.forEach(link =>{
    link.addEventListener('click', () =>{
        let tempNavs = document.querySelectorAll('.navbar-active');
        if(tempNavs != null){
           tempNavs.forEach(temp =>{
               temp.classList.remove('navbar-active');
           })
        }
        link.parentElement.classList.add('navbar-active');

        

       let index = getIndex(link);

       tempSecs[index].classList.add('active');
    
    })
})

function getIndex (temp){
    let tempIndex = 0;
    for (let i = 0; i < links.length; i++){
        if(links[i] ===  temp){
            tempIndex = i;
        }
        if (tempSecs.length > i){
        tempSecs[i].classList.remove('active');
        console.log(i)
        }
    }
    if (tempIndex > tempSecs.length){
        return 0;
    }
    else{return tempIndex};
}