fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
.then(response => response.json())
.then(data => {
    // console.log(data)
    // console.log(data[0].author)
 
    const buttonsList = document.getElementById('carousel-buttons')
    const carouselCardsList = document.getElementById('all-carousels')
    document.getElementById('first').innerText = data[0].quote
    document.getElementById('second').innerText = data[0].author

  

    // const buttonsDiv= document.createElement('div')
    // buttonsDiv.className = 'carousel-indicators col'
    // // buttonsDiv.id = 'carousel buttons'
    // const itemInfo1 =`
    // <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    // `
    // buttonsDiv.innerHTML=itemInfo1 
    // buttonsList.appendChild(buttonsDiv)



    for (let i = 1; i<50; i++){


        let buttonsDiv= document.createElement('div')     
        buttonsDiv.className = 'p-0 m-0' 


        const theButton = `
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>
        
        `
        buttonsDiv.innerHTML=theButton
        buttonsList.appendChild(buttonsDiv)
        



        



        const quote = data[i].quote
        const author = data[i]. author
        // console.log(author)
        let itemDiv= document.createElement('div')
        itemDiv.className = 'carousel-item'
        const itemInfo =`
        <div class="d-flex justify-content-between">
            <div class="col-2 carousel-item-img">
                <img src="img/images.jpeg" class="d-block " alt="...">
            </div>
            <div class="col-8 carousel-caption d-none d-md-block">
                <h5>${quote}</h5>
                <p>${author}</p>
            </div>
        </div> 
        `
        itemDiv.innerHTML = itemInfo;
        carouselCardsList.appendChild(itemDiv)







    }
    


})