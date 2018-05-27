ymaps.ready(function () {
		    var myMap = new ymaps.Map('mapYandex', {
		            center: [58.010821, 56.240073],
		            zoom: 14
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		            hintContent: 'Office in Perm',
		            balloonContent: 'Office in Perm'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/pin.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-30, -40]
		        });

		    myMap.geoObjects
		        .add(myPlacemark);
		});
		ymaps.ready(function () {
		    var myMap = new ymaps.Map('mapGoogle', {
		            center: [58.010821, 56.240073],
		            zoom: 14
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		            hintContent: 'Office in Perm',
		            balloonContent: 'Office in Perm'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/pin.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-30, -40]
		        });

		    myMap.geoObjects
		        .add(myPlacemark);
		});
		ymaps.ready(function () {
		    var myMap = new ymaps.Map('mapDoubleGis', {
		            center: [58.010821, 56.240073],
		            zoom: 14
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		            hintContent: 'Office in Perm',
		            balloonContent: 'Office in Perm'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/pin.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-30, -40]
		        });

		    myMap.geoObjects
		        .add(myPlacemark);
		});