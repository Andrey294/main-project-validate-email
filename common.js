document.addEventListener("DOMContentLoaded", function(){
    //! Поле инпута почты
    let emailInput =  $(".email");
    //! Функция при нажатии 
    $(function() {
      $(".btn-submit").on("click", validateForm);
      emailInput.on("blur", validateBlur);
      
        // Validate email + фильтрация условием на налчиие домена
        function validateEmail(email) {
          var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((gmail\.com)|(ukr\.net)|(mail\.ru))$/;
        
          if(emailPattern.test(email)){
              return 1;
          }else{
              return 0;
          } 
        }
         
    //* send form
    function sendForm() {
      $(".error").text("Форма отправлена").fadeIn();
    }

    //* validate email and send form after success validation
    function validateForm() {
          //! Переменные для валидации
          let email = $(".email").val();
          let $error = $(".error");
          $error.text("");
          
          if (validateEmail(email)) {
            $error.fadeOut();
            sendForm();
            emailInput.css({'border':'1px solid #3d4f9f'});
          } else {
            $error.fadeIn();
            $error.text(" Введите коректный почтовый адрес");
            emailInput.css({'border':'2px solid red'});
          }
          return false;
    }
    function validateBlur() {
      //! Переменные для валидации
      let email = $(".email").val();
      let $error = $(".error");
      $error.text("");
      
      if (validateEmail(email)) {
        $error.fadeOut();
        emailInput.css({'border':'1px solid #3d4f9f'});
      } else {
        $error.fadeIn();
        $error.text(" Введите коректный почтовый адрес");
        emailInput.css({'border':'2px solid red'});
      }
      return false;
    }
  });
 
});

