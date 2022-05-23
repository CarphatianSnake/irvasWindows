import checkNumInputs from './checkNumInputs';
import toggleCalcBtns from './toggleCalcBtns';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = (event, element, prop) => {
    element.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
              element.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
              toggleCalcBtns(state);
            } else {
              state[prop] = item.value;
              toggleCalcBtns(state);
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            toggleCalcBtns(state);
            break;
        };
      });
    });
  };
  
  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;