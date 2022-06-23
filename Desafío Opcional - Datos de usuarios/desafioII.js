const getPosts = (async() => {
    try {
        const respuesta = await fetch(`https://randomuser.me/api/?results=10`);
        const datos = await respuesta.json();
        const apiId = document.getElementById("user-data");

        console.log(datos);
        datos.results.forEach(element => {

            let card = `<div class="card">
                <img src="${element.picture.large}" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${(element.name.first, element.name.last)}</b></h4> 
                    <p>${element.email}</p> 
                    <p>${element.phone}</p> 
                </div>
                </div>`;
            let div = document.createElement("div");
            apiId.appendChild(div).innerHTML = card

        });

    } catch (error) {
        console.log(error);
    }
})();