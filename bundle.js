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

/***/ "./src/backend.js":
/*!************************!*\
  !*** ./src/backend.js ***!
  \************************/
/*! exports provided: upload, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
var URLPost = 'https://24.javascript.pages.academy/kekstagram';
var URLGet = 'https://24.javascript.pages.academy/kekstagram/data';
var SERVER_ANSWER_OK = 200;

var upload = function (data, onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === SERVER_ANSWER_OK) {
      onLoad(xhr.response);
    } else {
      onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 5000;

  xhr.open('POST', URLPost);
  xhr.send(data);
}

var load = function (onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === SERVER_ANSWER_OK) {
      onLoad(xhr.response);
    } else {
      onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 5000;

  xhr.open('GET', URLGet);
  xhr.send();
};


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
/*! exports provided: renderPictures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPictures", function() { return renderPictures; });
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview */ "./src/preview.js");
/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picture */ "./src/picture.js");



var bigPicture = document.querySelector('.big-picture');
var bigPictureCancel = bigPicture.querySelector('.cancel');
var pictureFragment = document.createDocumentFragment();
var pictureList = document.querySelector('.pictures');

var addClickToPictures = (pictures, button, index) => {
  button.addEventListener('click', function (evt) {
    bigPicture.classList.remove("hidden");
    Object(_preview__WEBPACK_IMPORTED_MODULE_0__["fillBigPicture"])(pictures[index]);
  });
}

var addPictureLinkHandlers = (pictures) => {
  var pictureList = document.querySelectorAll('.picture__link');

  for (var i = 0; i < pictureList.length; i++) {
    var button = pictureList[i];
    addClickToPictures(pictures, button, i);
  }
}

var renderPictures = (pictures) => {
  for (var i = 0; i < pictures.length; i++) {
    pictureFragment.appendChild(Object(_picture__WEBPACK_IMPORTED_MODULE_1__["renderPicture"])(pictures[i]))
  }

  pictureList.appendChild(pictureFragment);
  addPictureLinkHandlers(pictures);
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend */ "./src/backend.js");
/* harmony import */ var _photo_sorting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-sorting */ "./src/photo-sorting.js");





var form = document.querySelector('.img-upload__form');

Object(_form__WEBPACK_IMPORTED_MODULE_1__["sliderChange"])();

form.addEventListener('submit', function (evt) {
  Object(_backend__WEBPACK_IMPORTED_MODULE_2__["upload"])(new FormData(form), function (response) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
  });
  evt.preventDefault();
});

Object(_backend__WEBPACK_IMPORTED_MODULE_2__["load"]) (function (data) {
  Object(_galary__WEBPACK_IMPORTED_MODULE_0__["renderPictures"])(data);
  Object(_photo_sorting__WEBPACK_IMPORTED_MODULE_3__["photoSorting"])(data);
});


/***/ }),

/***/ "./src/photo-sorting.js":
/*!******************************!*\
  !*** ./src/photo-sorting.js ***!
  \******************************/
/*! exports provided: photoSorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoSorting", function() { return photoSorting; });
/* harmony import */ var _galary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galary */ "./src/galary.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var photoFilterElement = document.querySelector('.img-filters');
var photoFilterButtonElements = document.querySelectorAll('.img-filters__button');

var photoSorting = function (pictures) {
  photoFilterElement.classList.remove('img-filters--inactive');

  photoFilterElement.addEventListener('click', function (evt) {
    for (var i = 0; i < photoFilterButtonElements.length; i++) {
      photoFilterButtonElements[i].classList.remove('img-filters__button--active');
    }

    evt.target.classList.add('img-filters__button--active');
    makeGalleryClear();

    switch (evt.target.id) {
      case ('filter-popular') :
        Object(_galary__WEBPACK_IMPORTED_MODULE_0__["renderPictures"])(pictures);
        break;
      case ('filter-new') :
        Object(_galary__WEBPACK_IMPORTED_MODULE_0__["renderPictures"])(getNewPhotos(pictures));
        break;
      case ('filter-discussed') :
        Object(_galary__WEBPACK_IMPORTED_MODULE_0__["renderPictures"])(sortPhotosByComments(pictures));
        break;
    }
  });

  var makeGalleryClear = function () {
    var picturesToRemove = document.querySelectorAll('.picture__link');
    picturesToRemove.forEach(function (photo) {
      photo.remove();
    });
  };

  var getRandomPhotos = function () {
    var newPhotoArr = new Set();

    return function (pictures) {
      if (newPhotoArr.size != 0) {
        return Array.from(newPhotoArr);
      } else {
        while (true) {
          newPhotoArr.add(pictures[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomNumber"])(0, pictures.length - 1)]);
          if (newPhotoArr.size == 10) {
            break;
          }
        }

        return Array.from(newPhotoArr);
      }
    }
  };

  var getNewPhotos = getRandomPhotos();

  var sortPhotosByComments = function (pictures) {
    var tempArr = pictures.slice();
    return  tempArr.sort((a, b) => b.comments.length - a.comments.length);
  }
};


/***/ }),

/***/ "./src/picture.js":
/*!************************!*\
  !*** ./src/picture.js ***!
  \************************/
/*! exports provided: renderPicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPicture", function() { return renderPicture; });
var pictureTemplate = document.querySelector('#picture').content;

var renderPicture = (picture) => {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__stat--likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__stat--comments').textContent = picture.comments;

  return pictureElement;
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
var bigPicture = document.querySelector('.big-picture');
var socialComments = bigPicture.querySelector('.social__comments');

var createComments = (picture) => {
  var comments = '';
  for (var i = 0; i < picture.comments.length; i++) {
    comments = comments + '<li class="social__comment social__comment--text"><img class="social__picture" src="'+ picture.comments[i].avatar + '" alt="Аватар комментатора фотографии" width="35" height="35"> <p class="social__text">' + picture.comments[i].message + '</p> </li>';
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
/*! exports provided: getRandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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