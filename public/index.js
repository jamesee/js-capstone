// https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
// https://gomakethings.com/serializing-form-data-with-the-vanilla-js-formdata-object/

const navbarRender = () => {
    return `
            <!-- Next Button -->
            <button id="prev" class="
                    btn
                    flex justify-center md:justify-end
                    bg-transparent 
                    hover:bg-pink-600 
                    text-pink-700 
                    font-semibold 
                    hover:text-white 
                    py-2 px-10 
                    border 
                    border-pink-600 
                    hover:border-transparent 
                    rounded-2xl
                    focus:ring-pink-900
                    m-2">
                    <svg class="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512"
                        style="enable-background:new -49 141 512 512;" xml:space="preserve">
                        <path id="XMLID_10_"
                            d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z">
                        </path>
                    </svg>
                Prev
            </button>

            <!-- Selector and Form -->
            <div class="flex justify-center">

                <!-- No. of Comics Selector -->
                <div class="grid grid-cols-6 gap-3">
                    <label for="listing-condition"
                        class="inline-block align-middle text-base text-right font-medium text-gray-900">
                        No. of Comics:
                    </label>
                    <select id="numOfComics" name="numOfComics"  class="
                            flex justify-center
                            w-20
                            h-10
                            pl-3
                            pr-3
                            py-5
                            px-3
                            text-base
                            border-gray-300
                            focus:outline-none
                            focus:ring-pink-500
                            focus:border-pink-500
                            sm:text-sm
                            rounded-md
                        ">
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <!-- ComicNumber Form -->
                <div class="mt-1 flex justify-between">
                    <label for="comicNumberForm" class="block text-base text-right font-medium text-gray-900">
                        Comic Number:
                    </label>
                    <form id="comicNumberForm">
                        <input type="number" name="comicNumber" id="comicNumber" required class="
                                    flex justify-center
                                    w-30
                                    h-10
                                    shadow-sm
                                    text-base
                                    text-center
                                    focus:ring-pink-500 focus:border-pink-500
                                    border-pink-600
                                    rounded-md
                                " >
                        <button type="submit" class="
                                        ml-4
                                        h-10 w-10
                                        inline-flex
                                        justify-center
                                        py-2
                                        px-2
                                        border 
                                        border-transparent
                                        shadow-sm
                                        text-base
                                        text-center
                                        font-medium
                                        rounded-md
                                        text-white
                                        bg-pink-600
                                        hover:bg-pink-700
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-offset-2
                                        focus:ring-pink-500
                                    " >GO</button>
                            
                    </form>
                    
                </div>

                </div>
            </div>

            <!-- Next Button -->
            <button id="next" class="
                btn
                flex justify-center md:justify-end
                bg-transparent 
                hover:bg-pink-600 
                text-pink-700 
                font-semibold 
                hover:text-white 
                py-2 px-10 
                border 
                border-pink-600 
                hover:border-transparent 
                rounded-2xl
                focus:ring-pink-900
                m-2">
                Next
                        <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512"
                            style="enable-background:new -49 141 512 512;" xml:space="preserve">
                            <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                    l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                    c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z" />
            </button>

        `
}

const card = (data) => {
    return `
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
        const API_URL = "https://xkcd.vercel.app/?comic=";

        const url = API_URL + comicNum

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

// https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const App = (function () {

    const State = {
        comicNum: 100,
        numOfComics: 3,
        comicsList: [99, 100, 101]
    }

    const updateComicsList = () => {
        State.comicsList = [];
        switch (State.numOfComics) {
            case 1:
                State.comicsList.push(State.comicNum);
                break;
            case 5:
                for (let i = 0; i < State.numOfComics; i++) {
                    State.comicsList.push(State.comicNum + i - 2)
                }
                break;
            default:
                for (let i = 0; i < State.numOfComics; i++) {
                    State.comicsList.push(State.comicNum + i - 1)
                }
        }
    }

    function render() {
        // app.innerHTML = navbarRender();
        console.log(`[DEBUG] comicNum: ${State.comicNum}, numOfComics: ${State.numOfComics}, comicList: ${State.comicsList}`);
        removeAllChildNodes(navbar);
        navbar.insertAdjacentHTML("afterbegin", navbarRender());
        removeAllChildNodes(app);

        fetchComics(State.comicsList)
            .then(dataList => {
                // console.log(dataList);
                const html = dataList.map(data => {
                    return card(data);
                }).join("");
                app.insertAdjacentHTML("afterbegin", html);
            })
            .catch((err) => {
                console.log('Fetch Error : ', err);
            });


        return App
    }

    function nextPage() {
        console.log("[DEBUG] next");
        State.comicNum += 1;
        updateComicsList();

        App
            .render()
            .setupEvents();
    }

    function prevPage() {
        console.log("[DEBUG] prev");
        State.comicNum -= 1;
        updateComicsList();

        App
            .render()
            .setupEvents();
    }

    function handleChange(e) {
        console.log("[DEBUG] handleChange");
        app.classList.remove(`lg:grid-cols-${State.numOfComics}`);
        State.numOfComics = Number(e.target.value);
        app.classList.add(`lg:grid-cols-${State.numOfComics}`);
        
        updateComicsList();
        App
            .render()
            .setupEvents();
    }

    function handleSubmit(e) {
        console.log("[DEBUG] handleSubmit");
        e.preventDefault();

        // https://gomakethings.com/serializing-form-data-with-the-vanilla-js-formdata-object/
        formData = new FormData(e.target);
        State.comicNum = Number(formData.get("comicNumber"));
        updateComicsList();

        App
            .render()
            .setupEvents();
    }

    function setupEvents() {
        let nextButton =
            document
                .getElementById("next")
                .addEventListener("click", App.nextPage)

        let prevButton =
            document
                .getElementById("prev")
                .addEventListener("click", App.prevPage)

        let numOfComicsSelector =
            document
                .getElementById("numOfComics")
                .addEventListener("change", App.handleChange)

        let comicNumberForm =
            document
                .getElementById("comicNumberForm")
                .addEventListener("submit", App.handleSubmit)
    }

    return { render, prevPage, nextPage, handleChange, handleSubmit, setupEvents }

})();

App
    .render()
    .setupEvents();