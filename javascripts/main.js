$(function(){
  $('.navigation a').click(function(e){
    $(this.hash).ScrollTo();
    return false;
  });

  $('.carousel').carousel();

  $(".gallery a").fancybox({
    transitionIn: 'elastic',
    transitionOut: 'elastic'
  });

  var script = document.createElement("script");
  script.src = "http://api.map.baidu.com/api?v=1.4&callback=showMap";
  document.body.appendChild(script);

  $("#rsvp-form").validate();
  $("#rsvp-form").submit(form_submit)

  $('#photos .thumbnails').bricks({maxRowHeight: 150});

  $('#photos a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('#photos .thumbnails').bricks({maxRowHeight: 150});
  })
});
