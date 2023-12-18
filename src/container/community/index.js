import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

//------------------------------------------------------------------------

const TAB_LIST = [
  { title: 'База знань', active: true },
  { title: 'Інформація', active: false },
]

const createTab = () => {
  const tabList = createElement('div', 'tab__list')

  TAB_LIST.forEach((tabData) => {
    const tab = createElement(
      'button',
      tabData.active
        ? 'tab button tab--active'
        : 'tab button',
      tabData.title,
    )

    tabList.append(tab)
  })

  return tabList
}

const tabList = createTab()
page.append(tabList)

const info = createElement('div', 'info')
page.append(info)

const image = createElement('img')
image.src = '/img/info_image.png'
info.append(image)

const infoTitle = createElement(
  'h2',
  'info__title',
  'Що таке база знань?',
)
info.append(infoTitle)

const infoDescription = createElement(
  'p',
  'info__description',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержитинформацию, являющуюся результатом решения предыдущих задач.',
)
info.append(infoDescription)

const infoButton = createElement(
  'button',
  'info__button',
  `Перейти до ком'юніті у Телеграм?`,
)
info.append(infoButton)
