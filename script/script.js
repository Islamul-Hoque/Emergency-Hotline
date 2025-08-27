function getId(id){
    return document.getElementById(id);      
}

//Call Buttons Functionalities
getId('Left-Side-container').addEventListener('click', function(e){
    if(e.target.closest('.call-btn')){
        const callBtn = e.target.closest('.call-btn');

        const serviceName = callBtn.parentNode.parentNode.children[1].children[0].innerText;
        const callNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText;
        const time = new Date().toLocaleTimeString();

    // Coins Calculation
        const initialCoin = Number(getId('coins').innerText);

        if(initialCoin < 20){
            return alert('❌ You don’t have enough coins! You need at least 20 coins to make a call.')
        }

        const currentCoins = initialCoin - 20;
        getId('coins').innerText = currentCoins;
        alert(`📞 Calling ${serviceName} ${callNumber} ...`);

    // Get Call History Container
            const callHistoryContainer = getId('Call-History-Container');
            const createDiv = document.createElement('div')
            createDiv.innerHTML = `
                <div class="bg-[#f2f2f2] px-3 py-2 mb-2 rounded-[0.8rem] flex justify-between items-center">
                    <div>
                        <h2 class="text-[0.7rem] font-semibold">${serviceName}</h2>
                        <p class="text-sm text-[#5c5c5c]">${callNumber}</p>
                    </div>
                    <div class="text-[0.7rem]">${time}</div>
                </div>`;
            callHistoryContainer.appendChild(createDiv);
    }
})

// Call History Functionalities
getId('clear-btn').addEventListener('click', function(){
    getId('Call-History-Container').innerText = '';
})


