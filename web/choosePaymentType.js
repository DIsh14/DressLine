$(document).ready(function () {
   $('#id_radio1').click(function () {
      $('#div2').hide('fast');
      $('#div1').show('fast');
});
$('#id_radio2').click(function () {
     $('#div1').hide('fast');
     $('#div2').show('fast');
});
});
