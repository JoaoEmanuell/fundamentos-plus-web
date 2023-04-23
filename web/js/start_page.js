function start_page(main_box, data_json){

    // Clear main box
    main_box.innerHTML = '';

    // Add title
    let div = document.createElement('div');
    div.className = 'container d-flex justify-content-center';
    const h1 = document.createElement('h1');
    h1.className = 'green mt-4';
    h1.innerHTML = 'Ciclos';
    div.appendChild(h1);
    main_box.appendChild(div);

    // Add cycles

    // Initial div

    div_cycles = document.createElement('div');
    div_cycles.className = 'container mt-4 d-flex justify-content-center div-cycles';

    // Align div

    const div_align_itens = document.createElement('div');
    div_align_itens.className = 'd-flex flex-column align-items-start';

    // Cycles

    data_json.then((data) => {
        
        const cycles = data.cycles;
        
        let count = 1;
        let green_button_class = ''
        for (const cycle in cycles) {
            // Number button
            const number_button = document.createElement('a');
            if (cycles[cycle].unlocked) {
                green_button_class = 'green-button';
            } else {
                green_button_class = 'green-button-disabled';
            }
            if (count !== Object.keys(cycles).length){
                number_button.className = green_button_class;
            } else {
                number_button.className = `${green_button_class}-not-connected`;
            }
            number_button.innerHTML = count;

            // Title
            const title = document.createElement('p');
            title.className = 'p-title-cycle-box';
            title.innerHTML = cycles[cycle].title;

            // Lesson
            const lesson = document.createElement('p');
            lesson.className = 'p-lesson-cycle-box';
            lesson.innerHTML = `${Object.keys(cycles[cycle].lessons).length} Lições`

            // Add title and lesson

            const div_for_title_lesson = document.createElement('div');
            div_for_title_lesson.appendChild(title);
            div_for_title_lesson.appendChild(lesson);

            // Add in div to cycle

            const div_to_cycle = document.createElement('div');
            div_to_cycle.className = 'mb-4 d-flex justify-content-center cycle-box';
            div_to_cycle.appendChild(number_button);
            div_to_cycle.appendChild(div_for_title_lesson);
            div_to_cycle.id = count;
            
            // Click event
            
            div_to_cycle.addEventListener('click', () => {
                cycle_page(main_box, data_json, div_to_cycle.id);
            });

            // Add in align itens
        
            div_align_itens.appendChild(div_to_cycle);

            // Count
            count++;
        };
    });

    div_cycles.appendChild(div_align_itens);
    main_box.appendChild(div_cycles);
}