fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
.then(response => response.json())
.then(data => {
    // console.log(data)
    // console.log(data[0].author)
 
    const buttonsList = document.getElementById('carousel-buttons');
    const carouselCardsList = document.getElementById('all-carousels');


    for (let i = 0; i<50; i++){
        let buttonsDiv= document.createElement('div');
        if(i==0){
            const theButton =`<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`
            buttonsDiv.innerHTML=theButton;
        }
        else{
            const theButton = `
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`;
        buttonsDiv.innerHTML=theButton;

        }
        // const theButton = `
        // <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>
        
        // `;
        // buttonsDiv.innerHTML=theButton;
        buttonsList.appendChild(buttonsDiv);


        const quote = data[i].quote;
        const author = data[i].author;
        // console.log(author)
        let itemDiv= document.createElement('div');        
        if (i==0){
            itemDiv.className = 'carousel-item active';
        }
        else{
            itemDiv.className = 'carousel-item';
        }
        const itemInfo =`
        <div class="row align-items-center">
            <div class="img-col col-sm-2">
                <img src="img/pngaaa.com-4073931.png" class="img-fluid" alt="...">
            </div>
            <div class="col-sm-8 my-text">
                <h5 id="first" class="p-3"><img src="img/double-quote-serif-left-32.ico" class="p-1" alt="''">${quote}</h5>
                <p id="second" class="p-3">- ${author}</p>
            </div>
        </div> 
        `
        itemDiv.innerHTML = itemInfo;
        carouselCardsList.appendChild(itemDiv);;
    }
    


})