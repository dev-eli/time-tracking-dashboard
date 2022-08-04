let data =[];

fetch('data.json')
.then(res => res.json())
.then(loadingData => {
    data = loadingData;
    //console.log(data);
})

let buttons = document.getElementsByClassName('btn');
for (button of buttons) {
    button.addEventListener('click', setActive);
}

let info = document.getElementsByClassName('frontTileInfo');
console.log(info);


function setActive() {
    console.log(this.id);
    this.style.color = 'white';
    for (button of buttons) {
        if (button.id === this.id) {
            this.style.color = 'white'
        } else {
            button.style.color = 'hsl(235, 45%, 61%)';
        }
    }

    for (let i = 0; i< info.length;i++) {
        console.log(info[i].children[0]);
        info[i].children[0].innerHTML = data[i]['timeframes'][this.id].current+'hrs';

        switch (this.id) {
            case 'daily':
                info[i].children[1].innerHTML = "Yesterday - " +data[i]['timeframes'][this.id].previous +"hrs";
                break;
            case 'weekly':
                info[i].children[1].innerHTML = "Last Week - " +data[i]['timeframes'][this.id].previous+"hrs";
                break;
            case 'monthly':
                info[i].children[1].innerHTML = "Last Month - " +data[i]['timeframes'][this.id].previous+"hrs";
                break;
        }
        //info[i].children[1].innerHTML = data[i]['timeframes'][this.id].previous;
    }
    console.log(data)

}
