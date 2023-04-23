const main_box = document.getElementById('main'); // Main box
const url_to_data_json = `${window.location.href}/../json/data.json`;

async function request_get(url=''){
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });
    return response.json();
};

function back_arrow_config(visible, page_to_load, ...page_args){
    console.log('back-arrow', visible, page_to_load, page_args)
    const back_arrow = document.getElementById('back-arrow');
    const available_pages = {
        "start": start_page,
        "cycle": cycle_page
    };
    if (visible) {
        back_arrow.style = "";
    } else {
        back_arrow.style = "visibility: hidden;"
    }
    back_arrow.addEventListener('click', () => {
        if (page_to_load in available_pages){
            available_pages[page_to_load](...page_args);
        };
    });
};

const data_json = request_get(url_to_data_json);

start_page(main_box, data_json);