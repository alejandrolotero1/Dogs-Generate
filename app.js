const URL ="https://random.dog/woof.json";
const btnGenerate = document.getElementById("btnGenerate");
const mainCards = document.getElementById("main");


const fetchData = async (api) =>{
    const res = await fetch(api);
    const data = await res.json();
    return data;
}

const generateCards = (value) =>{
    let content =document.createElement("div");
    content.classList.add("contentCards");


    let img = document.createElement("img");
    img.classList.add("imgContent");
    img.setAttribute("src",value.url)
    // let request =(typeof img);
    // console.log(request);
    

    mainCards.appendChild(img)
}





// const getCharacter = () =>{
//     fetch(dogs).then(res => res.json()).then(data =>{
//     let img = document.createElement("img");
//     img.classList.add("imgContent");
//     let urlImg =data[0].dogs.image;
//     img.setAttribute('src',url);
//     mainCards.appendChild(img);
//     })
// }

const getAllCharacters = async()=>{
    const data = await fetchData(URL);
    generateCards(data);
}
btnGenerate.addEventListener('click',getAllCharacters);

/*const getCharacter = () =>{
    fetch(url).then(res => res.json()).then(data => {
        textGenerate.textContent = data[0].character;

        container.setAttribute('src',data[0].image)
    })
} */