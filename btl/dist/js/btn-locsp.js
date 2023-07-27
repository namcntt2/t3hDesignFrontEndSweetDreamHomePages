$(document).ready(function(){
    $('.btn-llocsp').slick({
      slidesToShow:1,
      Infinite:false,
      arrows:false,
      slidesToScroll:1,
      dots:true,
      dots: true,
      customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
    },
    });
  });