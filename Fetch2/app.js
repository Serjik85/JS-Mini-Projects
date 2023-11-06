const mainEl = document.querySelector('.main');
const wrapper = document.createElement('div')

const formEl = document.createElement('form');
formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputsValue = Object.fromEntries(new FormData(e.target));
  const response = await fetch(`
  https://reqres.in/api/users/${inputsValue.name}
  `);

  if (response.ok) {
    const data = await response.json();
    wrapper.appendChild(createProfileEl(data))
    mainEl.appendChild(wrapper);
    inputEl.value = '';
  } else {
    alert("Пользователь не найден")
  }
})

const inputEl = document.createElement('input');
inputEl.classList.add('search-input');
inputEl.setAttribute('name', 'name')

const searchButtonEl = document.createElement('button')
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = "Поиск";

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);

function createProfileEl(profileData) {
  const element = document.createElement('div');
  element.classList.add('profile');
  // console.log(profileData.data[1])
  element.innerHTML = `
    <img class="search-image" src=${profileData.data[1].avatar}></img>
    <p class="search-text"><span>Имя: </span>${profileData.data[1].first_name}</p>
    <p class="search-text"><span>Фамилия: </span>${profileData.data[1].last_name}</p>
    <p class="search-text"><span>E-Mail: </span>${profileData.data[1].email}</p>
    <p class="search-text"><span>О себе: </span>${profileData.bio}</p>
  `
  element.appendChild(createDeleteBtnEl())
  return element;
}

function createDeleteBtnEl() {
  const element = document.createElement('button');
  element.classList.add('delete-button');
  element.innerText = "Удалить";
  element.addEventListener('click', (e) => {
    wrapper.innerHTML = ''
  })

  return element
}