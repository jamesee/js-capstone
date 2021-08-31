
const API_URL = "https://xkcd.vercel.app/?comic=";

const comicNumberForm = document.getElementById('comicNumberForm');

// comicNumberForm.onsubmit = async function(e) { 
//     e.preventDefault();

//     const comicNumber = document.getElementById('comicNumber').value;

// 	console.log(`[DEBUG] comicNumber : ${comicNumber}`);

//     let response = await fetch(API_URL+comicNumber);

//     console.log(`[DEBUG] response.status ${response.status}`);

//     if (response.status === 200) {
//        let data = await response.json();
//        console.log(data);
//     }

// };

// backup
// comicNumberForm.onsubmit = (e) => { 
//         e.preventDefault();
    
//         const comicNumber = document.getElementById('comicNumber').value;
    
//     	// console.log(`[DEBUG] comicNumber : ${comicNumber}`);
    
//         fetch(API_URL+comicNumber)
//             .then(resp => {
//                 if (!resp.ok) {
//                     throw Error("Error");
//                 }
//                 // console.log(resp);
//                 return resp.json();})
//             .then(data => console.log(data))
//             .catch((err) => {
//                 // There was an error
//                 console.log('Fetch Error : ', err);
//             });
        
// };

comicNumberForm.onsubmit = (e) => { 
        e.preventDefault();
    
        const comicNumber = document.getElementById('comicNumber').value;
        const comicNumberList = []

        for (let i =0; i < 5; i++){
            comicNumberList.push(comicNumber-2+i)
        }

        console.log(`[DEBUG] comicNumberList : ${comicNumberList}`);

        fetchComics(comicNumberList)
        .then(resp => {
            // if (!resp.ok){
            //     throw Error(err)
            // }
            console.log(resp);
            resp.json;
        })
        .then(data => console.log(data))
        .catch((err) => {
                console.log('Fetch Error : ', err);
        });
        
};

const fetchComics = async (comicNumberList) => {
    const requests = comicNumberList.map(comicNum => {
        
        const url =API_URL+comicNum

        return fetch(url) 
                    .then(resp => {
                        if (!resp.ok) {
                            throw Error("Error");
                        }
                        return resp.json();
                    })
                    .then(data => console.log(data))
                    .catch((err) => {
                                // There was an error
                                console.log('Fetch Error : ', err);
                    });
    })
    return Promise.allSettled(requests) // Waiting for all the requests to get resolved.
  }


   
function changeNumOfComics() {
    const selectBox = document.getElementById("numOfComics");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    // alert(selectedValue);
    console.log(`changeNumOfComics : ${selectedValue}`);
}



function nextButton() {
    console.log("next button");
}

function prevButton() {
    console.log("prev button");
}




