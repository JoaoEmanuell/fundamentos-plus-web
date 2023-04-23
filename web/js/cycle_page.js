function cycle_page(main_box, data_json, cycle_number){
    // Clear main box
    main_box.innerHTML = '';

    // Add number
    let div = document.createElement('div');
    div.className = 'container d-flex justify-content-center';
    const number_button = document.createElement('p');
    number_button.className = 'green-button-not-connected mt-4';
    number_button.innerHTML = cycle_number;
    div.appendChild(number_button);

    main_box.appendChild(div);

    // Title
    div = document.createElement('div');
    div.className = 'container d-flex justify-content-center';
    data_json.then((data) => {
        const title = document.createElement('h5');
        title.innerHTML = data.cycles[cycle_number].title;
        div.appendChild(title);
    });
    main_box.appendChild(div);
    
    // Div to lessons

    const div_to_lessons = document.createElement('div');
    div_to_lessons.className = 'container mt-4 d-flex justify-content-center div-cycles';

    // Div to align itens

    const div_to_align_itens = document.createElement('div');
    div_to_align_itens.className = 'd-flex flex-column align-items-start';
    
    // Lessons 

    data_json.then((data) => {
        let count = 1
        const lessons = data.cycles[cycle_number].lessons;
        for (const lesson in lessons){
            // Div to lesson

            const div_lesson = document.createElement('div');
            div_lesson.className = 'mb-4 d-flex justify-content-center cycle-box';
            
            // Number

            const number_button = document.createElement('p');
            number_button.className = 'green-button-not-connected';
            number_button.innerHTML = count;

            // Title div

            const title_div = document.createElement('div');

            // Title

            const title = document.createElement('p');
            title.className = 'p-title-cycle-box';
            title.style = 'margin-top: -15px;'
            title.innerHTML = lesson;

            // Append

            title_div.appendChild(title);
            div_lesson.appendChild(number_button);
            div_lesson.appendChild(title_div);
            div_to_align_itens.appendChild(div_lesson);
            div_to_lessons.appendChild(div_to_align_itens);
            count++;
        };
    });
    main_box.appendChild(div_to_lessons);
};