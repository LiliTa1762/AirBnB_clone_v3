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
