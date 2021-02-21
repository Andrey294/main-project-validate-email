document.addEventListener("DOMContentLoaded", function(){
    //! Поле инпута почты
    let emailInput =  $(".email");
    //! Функция при нажатии 
    $(function() {
      $(".btn-submit").on("click", validateForm);
      emailInput.on("blur", validateBlur);
      //! Переменные для сравнения фильтрации
      let gmail = 'gmail.com';
      let ukr = 'ukr.net';
      let mail = 'mail.ru';
        
    //* Validate email
    function validateEmail(email) {
      //! Создаём масив с двух частей до @ и после
      let emailPart = email.split('@')
      //! Условие
      if (emailPart[1]) {
        if (emailPart[0] & emailPart[1] == gmail ||emailPart[0] & emailPart[1] == ukr||emailPart[0] & emailPart[1] == mail) {
          return 1
        } else {
          return 0
        }
      } else {
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
            emailInput.css({'border':'none'});
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
        emailInput.css({'border':'none'});
      } else {
        $error.fadeIn();
        $error.text(" Введите коректный почтовый адрес");
        emailInput.css({'border':'2px solid red'});
      }
      return false;
    }
  });
 
});

