const barsToggle = document.querySelector('#bars')
const nav = document.querySelector('.navbar')

barsToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible')
})

const settingBtn = document.querySelector('#icon-setting')
const settingList = document.querySelector('.settings-list')

settingBtn.addEventListener('click', () => {
  settingList.classList.toggle('setting--visible');
})

