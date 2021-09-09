
const API_URL = "https://xkcd.vercel.app/?comic=";

const comicNumberForm = document.getElementById('comicNumberForm');

let comicNumber = 100;
let numOfComics = 3;

window.onload = function() {
    updateComics(comicNumber, numOfComics);
};


comicNumberForm.onsubmit = (e) => { 
        e.preventDefault();
    
        const comicNum = Number(document.getElementById('comicNumber').value);
        updateComics(comicNum,numOfComics);
        comicNumber = Number(comicNum)
      
};

const updateComics = (comicNumber, numOfComics) =>{

    const comicNumberList = []

    switch (numOfComics){
        case 1:
            comicNumberList.push(comicNumber);
            break;
        case 5:
            for (let i =0; i < numOfComics; i++){
                comicNumberList.push(comicNumber + i - 2)
            }
            break;
        default:
            for (let i = 0; i < numOfComics; i++){
                comicNumberList.push(comicNumber + i - 1)
            }
    }

    const cardDiv = document.getElementById("card-div");
    removeAllChildNodes(cardDiv);
    // console.log(`[DEBUG] comicNumberList : ${comicNumberList}`);

    const dataList = fetchComics(comicNumberList)
        .then(dataList => {
            // console.log(dataList);
            const html = dataList.map(data => {
                return card(data);
            }).join("");
            cardDiv.insertAdjacentHTML("afterbegin",html);
        })
        .catch((err) => {
                console.log('Fetch Error : ', err);
        });

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const card = (data) => {return `
                            <div class="card hover:shadow-lg">
                                <img src=${data.img} alt="noodles"
                                    class="flex justify-items-center sm:h-1/2 md:max-h-full md:min-w-full object-contain">
                                <div class="m-4">
                                    <div class="flex justify-between">
                                        <span class="font-bold text-xl">${data.title}</span>
                                        <span class="badge text-sm">number : ${data.num}</span>
                                    </div>
                                    <span class="block text-gray-700 text-base">${data.alt}</span>
                                </div>
                            </div>
                            `
}

const fetchComics = async (comicNumberList) => {
    const requests = comicNumberList.map(comicNum => {
        
        const url = API_URL+comicNum

        return fetch(url, {
           
            headers: {
                method: 'GET',         
            }
                     }) 
                    .then(resp => {
                        if (!resp.ok) {
                            throw Error("Error");
                        }
                        return resp.json();
                    })
                    .catch((err) => {
                        // There was an error
                        console.log('Fetch Error : ', err);
                    });
    })
    return Promise.all(requests)
  }

function changeNumOfComics() {
    const selectBox = document.getElementById("numOfComics");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    // alert(selectedValue);
    console.log(`changeNumOfComics : ${selectedValue}`);
    numOfComics = Number(selectedValue);
    updateComics(comicNumber, numOfComics);

}

function nextButton() {
    console.log("next button");
    comicNumber += 1
    updateComics(comicNumber, numOfComics)
}

function prevButton() {
    console.log("prev button");
    comicNumber -= 1;
    updateComics(comicNumber, numOfComics);
}




