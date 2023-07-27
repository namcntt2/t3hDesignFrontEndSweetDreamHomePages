$('.aside-phkhcct-slick').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay:true,
    arrows:true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../btl/img/aside/aside-phkhcct/prev.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../btl/img/aside/aside-phkhcct/next.png'>",
    responsive:[{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },},
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },}
    ]
});
