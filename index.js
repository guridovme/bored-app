const titleNode = document.querySelector('.js-title');
const activityNode = document.querySelector('.js-activity');
const goBtnNode = document.querySelector('.js-go-button');
const bodyBackgroundNode = document.querySelector('body');

const changeActivity = () => {
fetch ("http://www.boredapi.com/api/activity/")
    .then(data => data.json())
    .then(res => {
        if (res.status !== 'success') {
            activityNode.innerText = res.activity;
        } else {
            console.log('Ошибка');
        }
        updateTitle();
        changeBackground();
    });
};

const updateTitle = () => {
    titleNode.innerText = 'Ура, теперь не скучно 🔥';
};
const changeBackground = () => {
    bodyBackgroundNode.classList.add('change-body')
}


goBtnNode.addEventListener('click', changeActivity);
