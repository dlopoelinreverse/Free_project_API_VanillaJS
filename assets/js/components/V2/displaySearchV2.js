const displaySearchV2 = (data, cardContainer) => {
  data.map((coin) => {
    cardContainer.innerHTML += `
        <li class="card" id=${coin.id}>
            <div class="left-part">
            <div class="img-container">
                        <img class="thumb-img" src=${coin.image} alt=${coin.name}>
                    </div>
            <h2>${coin.name}</h2>
            </div>
            <div class="right-part">
                <p>Prix : ${coin.current_price}</p>
                <p>Au plus haut cets dernière 24H : ${coin.high_24h}</p>
                <p>Ath : ${coin.ath}</p>
                
            </div>
        </li>
    `;
  });
};

export default displaySearchV2;
