<!DOCTYPE html>
<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <link href="style.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="jquery.min.js"></script>
  <script type="text/javascript" src="script.js"></script>
  <title>Coming Soon</title>
  
</head>
<body id="index" onload="">
  <div id="wrap">
    <a href="http://host.pressnow.com.au/webmail/src/login.php" id="mail">
      
    </a>
    <div id="content">
      <div id="contact" class="message">
        <p class="message-button">
          Please contact us via email 
          <a href ="#" class="message-button" >click here v</a>
        </p>
        <div id="logo">
          <img src="images/logo.png"/>
        </div>
      </div>
      <div id="form">
        <p class="short-message">
          Please contact us via email 
        </p>
        <form method="post" action="email.php">
          <input id="name" type="text" name="name" />
          <input id="email" type="text" name="email" />
          <textarea id="comments" name="comments"></textarea>
          <button id="submit" type="submit" value="Submit">SUBMIT</button>
        </form>
      </div>
      <div id="thanks" class="message">
        <p>
          Your message was sent successfully. Thanks
        </p>
        <div id="logo">
          <img src="images/logo.png"/>
        </div>
      </div>
    </div>
    <div id="footer">
      <a href="http://www.omidesign.com" target="_blank">Website Design Melbourne </a>
      <div id="omi">OMiDESIGN</div>
    </div>
  </div>
</body>
