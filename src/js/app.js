import * as flsFunctions from "./modules/functions.js";
import * as bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import Inputmask from "../../node_modules/inputmask/dist/jquery.inputmask.min.js";
import * as slick from "../../node_modules/slick-carousel/slick/slick.min.js";
import { Fancybox } from "@fancyapps/ui/";

// flsFunctions.isWebp();

window.addEventListener("DOMContentLoaded", () => {
  window.$ = $;

  let header = document.querySelector(".header");
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector(".menu");
  let headerHeight = document.querySelector(".header").scrollHeight;
  let fixedMenu = document.querySelector(".header__fixed");

  window.addEventListener("scroll", () => {
    // скроллинг всей шапки
    document.querySelector(".header__fixed").classList.remove("scroll");
    if(window.pageYOffset >= 80 && window.location.pathname === "/"){
      header.classList.add("header--white"),
      fixedMenu.classList.add("header--white");
    } else{
      header.classList.remove("header--white"),
      fixedMenu.classList.remove("header--white");
    }    
    if (window.location.pathname !== "/"){
      header.classList.add("header--white");
      fixedMenu.classList.add("header--white");
    }
    if ($(window).width() >= 768) {
      // "липкая шапка"
      // скроллинг меню из шапки
      window.pageYOffset >= headerHeight
        ? fixedMenu.classList.add("scroll")
        : fixedMenu.classList.remove("scroll");
    } else {
        header.classList.add("scroll");
      }
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("menu--active");

    // menuItem.forEach(
    //     item.addEventListener("click", () => {
    //         menu.classList.toggle("menu--active");
    //     })
    // );
    $(".menu__item.has-child").on("click", function () {;
      $(this).find(".menu__list").toggleClass("menu__list--active");
    });
    $(".menu__item.menu__item--back").on("click", function () {
        $(this).parent("menu__list").removeClass("menu__list--active");
    });
  });

  document.querySelectorAll('.tabs-header__item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute("href").replace("#", "");

      // удаляем active у табов
      document.querySelectorAll(".tabs-header__item").forEach((child) =>
          child.classList.remove("tabs-header__item--active")
        );
      // удаляем active у контента табов
      document.querySelectorAll(".tabs-content__item").forEach((child) =>
          child.classList.remove("tabs-content__item--active")
        );

      //добавляем класс активности нажатому табу и контенту нажатого таба
      item.classList.add("tabs-header__item--active");
      document.getElementById(id).classList.add("tabs-content__item--active");
    })
  });
});

$(window).on("load", function () {
  let dropdown = $(".footer__item");
  dropdown.on("click", function () {
    $(this).toggleClass("footer__item--active");
    $(this).find(".footer__list--sub").slideToggle();
  });

  $(".slider--banner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<button type="button" class="slick-prev arrow arrow--prev arrow--banner arrow--banner__prev">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
    nextArrow:
      '<button type="button" class="slick-next arrow arrow--next arrow--banner arrow--banner__next">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
  });
  $(".tech-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".tech-text",
    arrows: false,
  });
  $(".tech-text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".tech-img",
    prevArrow:
      '<button type="button" class="slick-prev arrow arrow--prev arrow--tech arrow--tech__prev">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
    nextArrow:
      '<button type="button" class="slick-next arrow arrow--next arrow--tech arrow--tech__next">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
    dots: false,
  });
  $(".questions__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev arrow arrow--prev arrow--quest arrow--quest__prev">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
    nextArrow:
      '<button type="button" class="slick-next arrow arrow--next arrow--quest arrow--quest__next">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  if ($(window).width() < 993) {
    $(".articles__slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev arrow arrow--prev arrow--articles arrow--articles__prev">' +
        '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
        "</svg>" +
        "</button>",
      nextArrow:
        '<button type="button" class="slick-next arrow arrow--next arrow--articles arrow--articles__next">' +
        '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
        "</svg>" +
        "</button>",
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick",
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".tabs-content__item:not(:first-child)").on("load", function () {
      if ($(".tabs-content__item").hasClass("tabs-content__item--active")) {
        $(".tabs-content__item").removeClass('tabs-content__item--active"');
      }
    });
  }
  $(".company-photos").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev arrow arrow--prev arrow--company arrow--company__prev">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
    nextArrow:
      '<button type="button" class="slick-next arrow arrow--next arrow--company arrow--company__next">' +
      '<svg class="arrow-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="arrow-path" d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"/>' +
      "</svg>" +
      "</button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".dropdown").on("click", function () {
    $(this).toggleClass("dropdown--active");
    $(this).find(".dropdown-content").slideToggle();
  });

  ymaps.ready(function() {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [53.201709, 50.126451],
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),

      point = new ymaps.Placemark(
        myMap.getCenter(),
        {
          balloonContent: "цвет <strong>клиника Art-volga</strong>",
        },
        {
          preset: "islands#icon",
          // iconColor: '#0095b6',
          iconLayout: "default#image",
          iconImageHref: "../assets/img/icons/mark.png",
          // iconImageSize: [67, 81]
        }
      );
      
    myMap.geoObjects.add(point);
  });

  // Отправка формы
  $("form").on("submit", function (e) {
    e.preventDefault();
    let form = $(this);
    let formData = $(this).serialize();
    let inputDoctor = form.find('input[name="doctor"]');
    if (inputDoctor.length > 0) {
      formData += "&doctor=" + inputDoctor.val();
    }
    return $.ajax({
      type: "POST",
      url: "send.php",
      data: formData,
      success: function (e) {
        e = JSON.parse(e);
        console.log(e.result);
        if ("success" === e.result) {
          form.find(".form-message--success").css("display", "block");
        } else {
          form.find(".form-message--error").css("display", "block");
        }
        form
          .find("input[type='name'], input[type='tel'], input[name='doctor']")
          .val("")
          .val(""),
          $("form").trigger("reset");
      },
    });
  });

  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });

  $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
  //Вывод врача в форме на главной странице
  $(".stuff__item .btn").on("click", function () {
    let doctorName = $(this)
      .closest(".stuff__info")
      .find(".stuff__name")
      .text();
    $("#order").find('input[name="doctor"]').val(doctorName);
  });
  // Вывод врача в форме на детальной странице услуг
  $(".doctor .btn").on("click", function () {
    let doctorName = $(this)
      .closest(".doctor__footer")
      .find(".doctor__name")
      .text();
    $("#order").find('input[name="doctor"]').val(doctorName.trim());
  });
  // Вывод врача в форме на детальной странице врача
  $(".doctor-page .btn").on("click", function () {
    $("#order")
      .find('input[name="doctor"]')
      .val($(".doctor__name").text().trim());
  });

  $(".question").on('click', function () {
    $(this).toggleClass("question--active");
    $(this).find('.question__answer').slideToggle();
  });
});
/* $(".slider--banner").on("afterChange", function () {
  let title = $(".slick-slide.slick-active").find(".forbanner__title").html();
  let subtitle = $(".slick-slide.slick-active").find(".forbanner__subtitle").html();
  let href = '';
  if (title === "" || !$(".slick-slide.slick-active").find(".forbanner__title")) {
    title = "Современная клиника <span>ЭКО</span>";
  }
  if (subtitle === "" || !$(".slick-slide.slick-active").find(".forbanner__subtitle")) {
    subtitle = "";
  }
  switch (title.trim()) {
    case "День открытых дверей":
      href = "den-otkrytyh-dverey.html";
      break;
    case "ЭКО в подарок*":
      href = "cikl-eko-v-podarok.html";
      break;
    default:
      href = "company.html";
      break;
  }
  $(".banner--main__info .section-title--main").html(title);
  $(".banner--main__info .section-subtitle").html(subtitle);
  $(".btn--banner").attr("href", href);
}); */