<?php
if (!empty($_POST['name']) and !empty($_POST['phone'])) {
  $name = htmlspecialchars($_POST["name"]);
  $phone = htmlspecialchars($_POST["phone"]);
  $description = htmlspecialchars($_POST["description"]);

  $subject = "Сообщение с сайта PROFPOL18.RU";
  $message = "СООБЩЕНИЕ С САЙТА PROFPOL18.RU\n
    Имя отправителя: $name
    Телефон отправителя: $phone
    Описание: $description";
  $headers = "From: СООБЩЕНИЕ С САЙТА PROFPOL18.RU <site@profpol18.ru>\r\n";


  if (mail('email@yandex.ru', $subject, $message, $headers) ) {
    http_response_code(200);
    exit;
  } else {
    http_response_code(400);
    exit;
  }
}
?>
