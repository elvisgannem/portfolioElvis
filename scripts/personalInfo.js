const personalInfo = document.querySelector('.personal-info');

setTimeout(() => {
    personalInfo.classList.remove('hidden');
}, 2000);

const closeDescription = () => {
    personalInfo.classList.add('hidden');
}