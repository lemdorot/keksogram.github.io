/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: getComments, getDescription, pictures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return getDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pictures", function() { return pictures; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var DESCRIPTIONS = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

var getComments = () => {
  var commentsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(6, 15);
  var commentList = [];

  for (var i = 0; i < commentsCount; i++) {
    var count = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(1, 2);
    if (count == 1) commentList.push(COMMENTS[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(0, COMMENTS.length - 1)]);
    else {
      var comment1 = COMMENTS[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(0, COMMENTS.length - 1)];
      var comment2 = COMMENTS[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(0, COMMENTS.length - 1)];

      while (true) {
        if (comment1 == comment2) {
          comment2 = COMMENTS[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(0, COMMENTS.length - 1)];
        } else {
          break;
        }
      }

      commentList.push(comment1 + ' ' + comment2);
    }
  }
  return commentList;
}

var getDescription = () => {
  return DESCRIPTIONS[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(0, DESCRIPTIONS.length - 1)];
}

var fillPictures = () => {
  var pictures = [];
  for (var i = 0; i < 25; i++) {
    pictures.push({
      url: 'photos/' + (i + 1) + '.jpg',
      likes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(15, 200),
      comments: getComments(),
      description: getDescription(),
    });
  }
  return pictures;
}

var pictures = fillPictures();


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: sliderChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderChange", function() { return sliderChange; });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./src/validate.js");


var uploadFile = document.querySelector('#upload-file');
var imgUpload = document.querySelector('.img-upload__overlay');
var uploadCancel = imgUpload.querySelector('#upload-cancel');
var scale = imgUpload.querySelector('.img-upload__scale');
var scalePin = document.querySelector('.scale__pin');
var scaleValue = document.querySelector('.scale__value');
var scaleLevel = document.querySelector('.scale__level');
var scaleSlider = document.querySelector('.scale__line');
var effectChrome = document.querySelector('#effect-chrome');
var effectSepia = document.querySelector('#effect-sepia');
var effectMarvin = document.querySelector('#effect-marvin');
var effectPhobos = document.querySelector('#effect-phobos');
var effectHeat = document.querySelector('#effect-heat');
var imgUploadPreview = document.querySelector('.img-upload__preview img');

uploadFile.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
});

uploadCancel.addEventListener('click', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  uploadFile.value = '';
});

var effectRadioList = document.querySelectorAll("[name='effect']");

var resetEffect = function () {
  imgUploadPreview.style.removeProperty('filter');
  scalePin.style.left = '100%';
  scaleValue.value = parseInt(scalePin.offsetLeft / scaleSlider.offsetWidth * 100);
  scaleLevel.style.width = scaleValue.value + '%';
}

for (var i = 0; i < effectRadioList.length; i++) {
  effectRadioList[i].addEventListener('click', function (evt) {
    if (evt.target.value === 'none') {
      resetEffect();
      imgUploadPreview.className = '';
      scale.classList.add('hidden');
    }
    else {
      scale.classList.remove('hidden');
      resetEffect();
      imgUploadPreview.className = 'effects__preview--' + evt.target.value;
    }
  });
}

var updateEffect = function () {
  if (effectChrome.checked) {
    imgUploadPreview.style.filter = 'grayscale(' + scaleValue.value / 100 + ')';
  }
  if (effectSepia.checked) {
    imgUploadPreview.style.filter = 'sepia(' + scaleValue.value / 100 + ')';
  }
  if (effectMarvin.checked) {
    imgUploadPreview.style.filter = 'invert(' + scaleValue.value + '%)';
  }
  if (effectPhobos.checked) {
    imgUploadPreview.style.filter = 'blur(' + scaleValue.value / 100 * 3 + 'px)';
  }
  if (effectHeat.checked) {
    imgUploadPreview.style.filter = 'brightness(' + scaleValue.value / 100 * 3 + ')';
  }
}

var sliderChange = () => {
  scalePin.addEventListener('mousedown', function (event) {
    event.preventDefault();

    var shiftX = event.clientX - scalePin.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - scaleSlider.getBoundingClientRect().left + scalePin.offsetWidth / 2;

      if (newLeft < 0) {
        newLeft = 0;
      }
      var rightEdge = scaleSlider.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      scalePin.style.left = newLeft + 'px';
      scaleValue.value = parseInt(scalePin.offsetLeft / scaleSlider.offsetWidth * 100);
      scaleLevel.style.width = scaleValue.value + '%';
      updateEffect();
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  });

  scalePin.ondragstart = function () {
    return false;
  };
}

Object(_validate__WEBPACK_IMPORTED_MODULE_0__["validate"])();


/***/ }),

/***/ "./src/galary.js":
/*!***********************!*\
  !*** ./src/galary.js ***!
  \***********************/
/*! exports provided: addPictureLinkHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPictureLinkHandlers", function() { return addPictureLinkHandlers; });
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview */ "./src/preview.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");



var bigPicture = document.querySelector('.big-picture');
var bigPictureCancel = bigPicture.querySelector('.cancel');

var addClickToPictures = (button, index) => {
  button.addEventListener('click', function (evt) {
    bigPicture.classList.remove("hidden");
    Object(_preview__WEBPACK_IMPORTED_MODULE_0__["fillBigPicture"])(_data__WEBPACK_IMPORTED_MODULE_1__["pictures"][index]);
  });
}

var addPictureLinkHandlers = () => {
  var pictureList = document.querySelectorAll('.picture__link');

  for (var i = 0; i < pictureList.length; i++) {
    var button = pictureList[i];
    addClickToPictures(button, i);
  }
}

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add("hidden");
});



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _galary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galary */ "./src/galary.js");
/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picture */ "./src/picture.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/form.js");




var pictureList = document.querySelector('.pictures');

pictureList.appendChild(_picture__WEBPACK_IMPORTED_MODULE_1__["pictureFragment"]);

Object(_galary__WEBPACK_IMPORTED_MODULE_0__["addPictureLinkHandlers"])();

Object(_form__WEBPACK_IMPORTED_MODULE_2__["sliderChange"])();


/***/ }),

/***/ "./src/picture.js":
/*!************************!*\
  !*** ./src/picture.js ***!
  \************************/
/*! exports provided: pictureFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pictureFragment", function() { return pictureFragment; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


var pictureTemplate = document.querySelector('#picture').content;

var renderPicture = (picture) => {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__stat--likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__stat--comments').textContent = picture.comments;

  return pictureElement;
}

var pictureFragment = document.createDocumentFragment();
for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__["pictures"].length; i++) {
  pictureFragment.appendChild(renderPicture(_data__WEBPACK_IMPORTED_MODULE_0__["pictures"][i]))
}


/***/ }),

/***/ "./src/preview.js":
/*!************************!*\
  !*** ./src/preview.js ***!
  \************************/
/*! exports provided: fillBigPicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillBigPicture", function() { return fillBigPicture; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


var bigPicture = document.querySelector('.big-picture');
var socialComments = bigPicture.querySelector('.social__comments');

var createComments = (picture) => {
  var comments = '';
  for (var i = 0; i < 5; i++) {
    comments = comments + '<li class="social__comment social__comment--text"><img class="social__picture" src="img/avatar-' + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(1, 6) + '.svg" alt="Аватар комментатора фотографии" width="35" height="35"> <p class="social__text">' + picture.comments[i] + '</p> </li>';
  }
  return comments;
}

var fillBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img>img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  while( socialComments.firstChild ){
    socialComments.removeChild( socialComments.firstChild );
  }
  socialComments.insertAdjacentHTML('afterbegin', createComments(picture));
}

bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
bigPicture.querySelector('.social__comment-loadmore').classList.add('visually-hidden');


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: randomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
var randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
var MAX_HASHTAGS_COUNT = 5;
var hashtagsInput = document.querySelector('.text__hashtags');

var validate = () => {
  hashtagsInput.addEventListener('blur', (evt) => {
    var hashtagsArray = hashtagsInput.value.toLowerCase().split(' ');

    if (hashtagsArray.length > MAX_HASHTAGS_COUNT) {
      hashtagsInput.setCustomValidity('Хештегов может быть не больше 5-ти');

      return;
    }

    for (var i = 0; i < hashtagsArray.length; i++) {
      if (hashtagsArray[i] === '#' || hashtagsArray[i].length === 1) {
        hashtagsInput.setCustomValidity('Хештег не может состоять из одного символа. ' + (i + 1) + ' хештег не верен');
        break;
      } else if (hashtagsArray[i].length > 20) {
        hashtagsInput.setCustomValidity('Хештег номер' + (i + 1) + ' слишком длинный');
        break;
      } else if (hashtagsArray[i].charAt(0) !== '#') {
        hashtagsInput.setCustomValidity('Хештег должен начинаться с решетки. Исправьте хештег номер ' + (i + 1));
        break;
      } else {
        hashtagsInput.setCustomValidity('');
      }

      for (var j = i + 1; j < hashtagsArray.length; j++) {
        if (hashtagsArray[j].toLowerCase() === hashtagsArray[i].toLowerCase()) {
          if (hashtagsArray[j] === hashtagsArray[i]) {
            hashtagsInput.setCustomValidity('один хештег написан дважды, совпадает хештег номер ' + (i + 1) + ' и номер ' + (j + 1));
            return;
          }
        }
      }
    }
  });
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map