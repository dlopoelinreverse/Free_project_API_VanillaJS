import Coin from "../class/Coin.js"
import Card from "../class/Card.js"

const searchData = (data) => {
    const searchBtn = document.getElementById("search");
    
    const cardContainer = document.getElementById("cardContainer")
    let coins = [];
    let selectedIds = [];
    let selectedCards = []
    let Cards = []
    console.log(data)
        if(data.coins.length > 0) {
            for(const coin of data.coins) {
                
            //      let token = new Coin(coin.id, coin.name, coin.api_symbol, coin.symbol, coin.market_cap_rank)
            //      coins.push(token)
            // }
            // console.log(coins)
            // coins.map(coin => {
                
                let card = new Card(coin.id, coin.name, coin.api_symbol, coin.symbol, coin.market_cap_rank)
                cards.push(card)
                console.log(cards)
            }
            // cardContainer.innerHTML += `
            // <li class="card" >
            //     <h3 id=${coin.id}>${coin.name}</h3>
            // </li>
            
            // `
             }
             
             const cards = document.getElementsByClassName("card");
             
             for(const card of cards) {
                 card.addEventListener("click", (e) => {
                     if(!selectedIds.includes(e.target.id)) selectedIds.push(e.target.id)
                     coins.filter(coin => selectedIds.includes(coin.id)).map(coin => {
                         if(!selectedCards.includes(coin)) selectedCards.push(coin)
                     })
                     if(selectedCards.length == 2) selectedCards[0].compare(selectedCards[1].marketCapRank);
                     console.log(selectedCards)
                     
                 })
                 
                 
             }
             
            //  console.log(cards)
        } else {
            console.log("Cannot found any coins with this search")
        }
    
}

export default searchData