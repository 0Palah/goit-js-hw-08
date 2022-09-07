import localstorageService from './localstorage';
import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
console.dir(feedbackFormEl);
const userData = {};

const fillContactFormFields = () => {
  const contactFormDataFromLS = localstorageService.load('feedback-form-state');

  for (const prop in contactFormDataFromLS) {
    if (contactFormDataFromLS.hasOwnProperty(prop)) {
      //   console.log(prop);
      feedbackFormEl.elements[prop].value = contactFormDataFromLS[prop];
    }
  }
};
fillContactFormFields();

const onFormFieldsChenge = evt => {
  const { target } = evt;
  userData[target.name] = target.value;
  localstorageService.save('feedback-form-state', userData);
  console.log(target.value);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  localstorageService.remove('feedback-form-state');
  feedbackFormEl.reset();
};

feedbackFormEl.addEventListener('input', throttle(onFormFieldsChenge, 500));
feedbackFormEl.addEventListener('submit', throttle(onContactFormSubmit, 500));
