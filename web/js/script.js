const main_box = document.getElementById('main'); // Main box

function start_page(){
    const cycles = [
        {
            'title': 'Temas Panorâmicos',
            'lessons': 5
        },
        {
            'title': 'Jesus, sua vida e sua obra',
            'lessons': 17
        },
        {
            'title': 'A Volta de Jesus',
            'lessons': 13
        },
        {
            'title': 'Jesus é a Porta do Reino',
            'lessons': 9
        },
        {
            'title': 'O Espírito Santo',
            'lessons': 9
        },
        {
            'title': 'O Deus Pai',
            'lessons': 4
        },
        {
            'title': 'O Propósito Eterno de Deus', 
            'lessons': 3
        },
        {
            'title': 'Os primeiros passos no caminho', 
            'lessons': 10
        },
        {
            'title': 'Caminhando como sacerdote', 
            'lessons': 14
        },
        {
            'title': 'No caminho da salvação', 
            'lessons': 0
        },
        {
            'title': 'Caminhando com a Igreja', 
            'lessons': 11
        },
        {
            'title': 'Caminhando com família', 
            'lessons': 8
        },
        {
            'title': 'O caráter daquele que caminha com Cristo', 
            'lessons': 24
        },
        {
            'title': 'Caminhos diferentes?', 
            'lessons': 7
        },
        {
            'title': 'Caminhos estranhos', 
            'lessons': 5
        },
        {
            'title': 'A caminhada da Igreja', 
            'lessons': 13
        },
        {
            'title': 'Nossa caminhada',
            'lessons': 12
        }
    ]

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

    let count = 1
    cycles.forEach(cycle => {
        // Number button
        const number_button = document.createElement('a');
        if (count !== cycles.length){
            number_button.className = 'green-button';
        } else {
            number_button.className = 'green-button-last';
        }
        number_button.innerHTML = count;

        // Title
        const title = document.createElement('p');
        title.className = 'p-title-cycle-box';
        title.innerHTML = cycle.title;

        // Lesson
        const lesson = document.createElement('p');
        lesson.className = 'p-lesson-cycle-box';
        lesson.innerHTML = `${cycle.lessons} Lições`

        // Add title and lesson

        const div_for_title_lesson = document.createElement('div');
        div_for_title_lesson.appendChild(title);
        div_for_title_lesson.appendChild(lesson);

        // Add in div to cycle

        const div_to_cycle = document.createElement('div');
        div_to_cycle.className = 'mb-4 d-flex justify-content-center cycle-box';
        div_to_cycle.appendChild(number_button);
        div_to_cycle.appendChild(div_for_title_lesson);

        // Add in align itens
    
        div_align_itens.appendChild(div_to_cycle);

        // Count
        count += 1
    });

    div_cycles.appendChild(div_align_itens);
    main_box.appendChild(div_cycles);
}

/*
<div class="">
<div class="mb-4 d-flex justify-content-center cycle-box">
    <a class="green-button">1</a>
    <div>
        <p class="p-title-cycle-box">Temas Panorâmicos</p>
        <p class="p-lesson-cycle-box">5 Lições</p>
    </div>
</div>
*/

start_page()