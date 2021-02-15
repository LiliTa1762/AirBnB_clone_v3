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


/* Task 3 */

$('document').ready(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/', data => {
        if (data.status === 'OK'){
            $('DIV#api_status').addClass('available');
        }
        else {
            $('DIV#api_status').removeClass('available');
        }
    });
});
