const toggleCalcBtns = (state) => {
  const firstBtn = document.querySelector('.popup_calc_button'),
        secondBtn = document.querySelector('.popup_calc_profile_button');

  if (state.width && state.height) {
    firstBtn.removeAttribute('disabled');
  } else {
    firstBtn.setAttribute('disabled', true);
  }

  if (state.type && state.profile) {
    secondBtn.removeAttribute('disabled');
  } else {
    secondBtn.setAttribute('disabled', true);
  }

};

export default toggleCalcBtns;