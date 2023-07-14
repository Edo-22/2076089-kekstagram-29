import { getRandomNumber, idCommentGenerator, idGenerator, urlGenerator } from "./random-functions.js";
import { getData } from "./data.js";

const messageGenerator = function () {
  let message = getData.MESSAGES[getRandomNumber(0, getData.MESSAGES.length - 1)];
  if (getRandomNumber(1, 2) === 2) {
    message += ' ' + getData.MESSAGES[getRandomNumber(0, getData.MESSAGES.length - 1)];
  }
  return message;
}

const commentGenerator = function () {
return {
  id: idCommentGenerator(),
  avatar: `img/avatar-${getRandomNumber(1, getData.AVATARS_COUNT)}.svg`,
  message: messageGenerator(),
  name: getData.NAMES[getRandomNumber(0, getData.NAMES.length - 1)]
}
}
const getPhotoDescription = function () {
  return {
  id: idGenerator(),
  url: `photos/${urlGenerator()}.jpg`,
  description: getData.DESCRIPTIONS[getRandomNumber(0, getData.DESCRIPTIONS.length - 1)],
  likes: getRandomNumber(getData.MIN_LIKES_COUNT, getData.MAX_LIKES_COUNT),
  comments: Array.from({length: getRandomNumber(0, getData.COMMENTS_COUNT)}, commentGenerator),
  }
}

export {getPhotoDescription};
