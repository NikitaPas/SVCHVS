getTranslate(JSON.parse(localStorage.getItem('language')));
let activeElements = document.querySelector(".header_list");
activeElements.addEventListener('click', function(e) {
    const headerElements = document.querySelectorAll(".header_item");
    const target = e.target;
    Array.from(headerElements).forEach(headerElements => {
        headerElements.classList.remove("active");
    })
    target.classList.add("active");
    console.log("clock)");
})

const i18Obj = {
    'en': {
        'main_title': 'WE KEEP THINGS CLEAN AND SIMPLE',
        'main_subtitle': "So clean you’ll go crazy wondering why it’s so clean",
        'main_button_link': "SEE OUR WORK",
        'research': "Research",
        'research_text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.",
        'build_text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.",
        'optimize_text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.",
        'build': "Build",
        'optimize':"Optimize",
        'title_design':"The design process, at its best, integrates the aspirations of art, science, and culture.",
        'title_team':"THE TEAM",
        'founder': "Founder",
        'developer': "Developer",
        'designer': "Designer",
        'title_testimonials': "Testimonials",
        'subtitle_testimonials_1': "Vestibulum sed commodo nunc, eu aliquet sem. Curabitur semper, sem ut posuere tincidunt, sem velit sollicitudin odio, quis hendrerit sapien nunc sit amet sem. Ut sollicitudin dignissim ligula nec porta.",
        'subtitle_testimonials_2': "Curabitur semper, sem ut posuere tincidunt, sem velit sollicitudin odio, quis hendrerit sapien nunc sit amet sem. Ut sollicitudin dignissim ligula nec porta.",
        'subtitle_testimonials_first': "ROBERT SHAPIRO, CEO OF TRULR",
        'subtitle_testimonials_second': "LILA STOKINOVA, DESIGNER AT NIKE",
        'get_in': "Get in touch with us"
    },
    'ru': {
        'main_title': 'МЫ СДЕЛАЕМ ВЕЩИ ЧИСТЫМИ И ПРОСТЫМИ',
        'main_subtitle':"Так чисто, что вы сойдете с ума, задаваясь вопросом, почему это так чисто.",
        'main_button_link': "Посмотреть наши работы",
        'research': "Исследователь",
        'research_text': "Какие-то набор слов машина автомобиль покраска дешёво продам гараж",
        'build_text': "Какие-то набор слов машина автомобиль покраска дешёво продам гараж",
        'optimize_text': "Какие-то набор слов машина автомобиль покраска дешёво продам гараж",
        'build': "Построить",
        'optimize':"Оптимизровать",
        'title_design':"Процесс проектирования в лучшем случае объединяет устремления искусства, науки и культуры.",
        'title_team':"Команда",
        'founder': "Основатель",
        'developer': "Разработчик",
        'designer': "Дизайнер",
        'title_testimonials': "Отзывы",
        'subtitle_testimonials_1': "Но сейчас это хорошо, футбольные грузовики Всегда болтал, хотелось бы подставить разработчика, хотелось бы его ненавидеть, хотелось бы узнать, кто такой хендрерит сапиен сейчас. В целях обеспечения безопасности имущества, ни калитки, ни калитки.",
        'subtitle_testimonials_2': "Всегда болтал, хотелось бы подставить разработчика, хотелось бы его ненавидеть, хотелось бы узнать, кто такой хендрерит сапиен сейчас. В целях обеспечения безопасности имущества, ни калитки, ни калитки.",
        'subtitle_testimonials_first': "Роберт Шапиро, СЕО из трулр",
        'subtitle_testimonials_second': "Лила Стокинова, дизайнер в найк",
        'get_in': "На связи с нами"
    }
}

function getTranslate(lang){
    let elements = document.querySelectorAll("[data-i18]");
    console.log(elements)
    Array.from(elements).forEach(elements => {
        console.log(elements);
        let attribute = elements.getAttribute("data-i18");
        console.log(attribute);
        elements.textContent = lang[attribute];
    })
    localStorage.language = JSON.stringify(lang);
    console.log(localStorage.getItem('language'));
}

const sections = document.querySelectorAll(['.subtitle_testimonials', '.testimonials_container', '.team_container'])
let theme = document.querySelector("#darkBtn")

theme.addEventListener("click", e => SwitchTheme(e.currentTarget))

function getTheme(theme){
    
    if(theme === "dark") {
        sections.forEach(el => {
            el.classList.add("dark-theme")
        })
        theme.setAttribute("value", "dark")
        theme.style.color = "#000"
    }
}



function SwitchTheme(target){
    if(target.getAttribute("value") === "light") {
        sections.forEach(el => {
            el.classList.add("dark-theme")
        })
        target.setAttribute("value", "dark")
        target.style.color = "#000"
    }
    else {
        sections.forEach(el => {
            el.classList.remove("dark-theme")
        })
        target.setAttribute("value", "light")
        target.style.color = "#fff"
    }
}





