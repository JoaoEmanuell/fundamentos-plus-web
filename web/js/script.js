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

const data_json = request_get(url_to_data_json);

start_page(main_box, data_json);