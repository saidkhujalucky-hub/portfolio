export const projects = [
  {
    name: 'ECHO', image: './assets/echo-project.png',
    url: 'https://saidkhujalucky-hub.github.io/my_game/web/',
    ru: ['3D-головоломка', 'Исследуйте затопленный город и решайте головоломки с помощью временных петель.', 'Сцена игры ECHO в затопленном городе', 'Играть в браузере', 'Игрок перемещается по трёхмерному городу. Головоломки и повторяющиеся события задают ритм исследования.'],
    uz: ['3D boshqotirma', 'Suv bosgan shaharni o‘rganing va vaqt halqalari yordamida boshqotirmalarni yeching.', 'ECHO o‘yinidagi suv bosgan shahar', 'Brauzerda o‘ynash', 'O‘yinchi uch o‘lchamli shahar bo‘ylab harakatlanadi. Boshqotirmalar va takrorlanuvchi voqealar izlanishga yo‘nalish beradi.'],
    en: ['3D puzzle game', 'Explore a flooded city and solve puzzles built around time loops.', 'A scene from the flooded city in ECHO', 'Play in browser', 'The player moves through a three-dimensional city. Puzzles and recurring events shape the pace of exploration.'],
  },
  {
    name: 'SAT Practice', image: './assets/projects/sat-practice.webp',
    url: 'https://sat12.saidkhujalucky.workers.dev/',
    ru: ['Образование', 'Подготовка к SAT с уроками, тренировочными заданиями и экзаменом на время.', 'Интерфейс тренажёра SAT Practice', 'Открыть тренажёр', 'Можно выбрать тренировку без таймера или пройти экзамен с адаптивными модулями. После разбора ошибок доступны тематические уроки и похожие задания.'],
    uz: ['Ta’lim', 'SAT uchun darslar, mashq savollari va vaqt chegaralangan imtihon.', 'SAT Practice mashq platformasining interfeysi', 'Mashqni boshlash', 'Taymersiz mashq qilish yoki moslashuvchan modullardan iborat imtihon topshirish mumkin. Xatolar tahlilidan so‘ng mavzuga oid darslar va o‘xshash savollar ochiladi.'],
    en: ['Education', 'Prepare for the SAT with lessons, practice questions and timed exams.', 'The SAT Practice study interface', 'Open SAT Practice', 'Choose untimed practice or a timed exam with adaptive modules. Review a mistake, revisit the relevant lesson and try a similar question.'],
  },
  {
    name: 'House3', image: './assets/projects/house3.webp',
    url: 'https://house3-9ws.pages.dev/',
    ru: ['Недвижимость', 'Каталог недвижимости для тех, кто подбирает дом или квартиру в аренду или для покупки.', 'Интерфейс каталога недвижимости House3', 'Открыть каталог', 'В карточке объекта можно посмотреть фотографии, цену, район, площадь и число комнат. Понравившиеся объявления сохраняются в избранном.'],
    uz: ['Ko‘chmas mulk', 'Uy yoki kvartirani sotib olish va ijaraga olish uchun ko‘chmas mulk katalogi.', 'House3 ko‘chmas mulk katalogining interfeysi', 'Katalogni ochish', 'E’londa fotosuratlar, narx, tuman, maydon va xonalar soni ko‘rsatiladi. Ma’qul kelgan e’lonlarni tanlanganlar ro‘yxatiga saqlash mumkin.'],
    en: ['Real estate', 'A property catalogue for people looking to rent or buy a house or apartment.', 'The House3 real-estate catalogue', 'Browse properties', 'Each listing shows photos, price, district, floor area and room count. Save promising properties to favourites to revisit them later.'],
  },
];

const labels = {
  ru: {selection: 'Выбрать проект', details: 'О проекте', category: 'Направление', page: 'Проекты', dismiss: 'Закрыть'},
  uz: {selection: 'Loyihani tanlash', details: 'Loyiha haqida', category: 'Yo‘nalish', page: 'Loyihalar', dismiss: 'Yopish'},
  en: {selection: 'Choose a project', details: 'Project details', category: 'Discipline', page: 'Projects', dismiss: 'Close'},
};

export function galleryControls(index, language) {
  const project = projects[index], ui = labels[language];
  const [category, summary, alt, open] = project[language];
  const thumbnails = projects.map((item, i) =>
    '<button type="button" class="project-choice" data-project="' + i + '" aria-pressed="' + (i === index) +
    '"><img src="' + item.image + '" alt="" decoding="async" loading="lazy"><span>' + item.name + '</span></button>'
  ).join('');
  return '<div class="project-copy"><span class="project-category">' + category + '</span><h2>' + project.name + '</h2><p>' + summary +
    '</p><div class="project-actions"><a class="action" href="' + project.url +
    '" target="_blank" rel="noopener noreferrer">' + open + ' <span aria-hidden="true">↗</span></a><button class="project-details" data-detail="4">' +
    ui.details + '</button></div><div class="project-choices" role="group" aria-label="' + ui.selection + '">' + thumbnails +
    '</div></div><figure class="fallback-poster"><img src="' + project.image + '" alt="' + alt + '"></figure>';
}

export function projectDetails(index, language) {
  const project = projects[index];
  const [category, , alt, open, more] = project[language];
  return '<div class="project-sheet"><img src="' + project.image + '" alt="' + alt + '"><span class="project-category">' +
    category + '</span><h2>' + project.name + '</h2><p>' + more + '</p><a class="download" target="_blank" rel="noopener noreferrer" href="' +
    project.url + '">' + open + ' ↗</a></div>';
}
