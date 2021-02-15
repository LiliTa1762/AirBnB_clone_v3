const amenities = {};
$('document').ready(function () {
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    if (Object.keys(amenities).length) {
      $('.amenities H4').text(Object.values(amenities).join(', '));
    } else {
      $('.amenities H4').html('&nbsp;');
    }
  });
});

$('document').ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', data => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  data: '{}',
  dataType: 'json',
  contentType: 'application/json',
  succeess: function (data) {
    for (let i = 0; i < data.length; i++) {
      const dataPl = data[i];
      $('.places').append('<article><h2>' + dataPl.name + '</h2><div class="price_by_night"><p>$' + dataPl.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + dataPl.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + dataPl.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + dataPl.number_bathrooms + '</p></div></div><div class="description"><p>' + dataPl.description + '</p></div></article>');
    }
  }
});
