function hello(){
  alert("hello");
}
jQuery(function($){
  alert("asdasdasdas");
    $('#id_radio1').click(function(){
      hello();
    });
  });
// $(document).ready(function () {
//   alert("asdasdasdasd");
//    $('#id_radio1').change(function () {
//       $('#div2').hide('fast');
//       $('#div1').show('fast');
// });
// $('#id_radio2').click(function () {
//      $('#div1').hide('fast');
//      $('#div2').show('fast');
// });
// });
