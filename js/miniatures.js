import { getPhotoDesription } from "./generators";

const getMiniatures = () => {

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoDescriptions = Array.from({length: 25}, getPhotoDesription);

const pictureListFragment = document.createDocumentFragment();

photoDescriptions.forEach (({photoUrl, description, likesNumber, getComments}) => {

  let newElement = pictureTemplate.cloneNode(true);

  newElement.querySelector('.picture__img').src = photoUrl;
  newElement.querySelector('.picture__img').alt = description;
  newElement.querySelector('.picture__likes').textContent = likesNumber;
  newElement.querySelector('.picture__comments').textContent = getComments.length;

  fragment.appendChild(newElement);
});
return pictureListFragment;
}

export {getMiniatures};
