// const write = document.querySelector(".header__write");
// const popup =  document.querySelector(".popup");
// const wrapper = document.querySelector(".wrapper");

// const PopupShow = () => {

//     popup.classList.toggle("popup_active");
//     wrapper.classList.toggle("wrapper_active");



// };
// document.onclick = function(e){
//     if ( event.target.className != 'popup_active' ) {
//         popup.classList.remove("popup_active");
//     };
// };


// write.addEventListener("click", PopupShow);



const colseBtn = document.querySelector('.close');
const write = document.querySelector(".header__write");
const popup = document.querySelector('.popup');
const wrapper = document.querySelector(".wrapper");

const togglePopup = () => {
    popup.classList.toggle('popup_active');
    wrapper.classList.toggle("wrapper_active");
}
write.addEventListener('click', e => {
    e.stopPropagation();
  
    togglePopup();
  });
colseBtn.addEventListener('click', e => {
  e.stopPropagation();

  togglePopup();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_popup = target == popup || popup.contains(target);
  let its_colseBtn = target == colseBtn;
  let popup_is_active = popup.classList.contains('popup_active');
  
  if (!its_popup && !its_colseBtn && popup_is_active) {
    togglePopup();
  }
})