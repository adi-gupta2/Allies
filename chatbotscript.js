function startChat() {
  var name = document.getElementById("name").value;
  var messages = document.querySelector(".conversation");
    if (name){
  messages.innerHTML += "<div class='message'><p>Nice to meet you, " + name + ". I'm here to help you with any questions you have about your sexual orientation.</p></div>";
    }
    else{
        messages.innerHTML += "<div class='message'><p>Nice to meet you. I'm here to help you with any questions you have about your sexual orientation.</p></div>";
    }
  setTimeout(function() {
      messages.innerHTML += "<div class='message'><p>Have you ever experienced sexual attraction to someone of the opposite gender?</p></div>";
      messages.innerHTML += "<div class='input'><button onclick='answerQuestion(true)'>Yes</button><button onclick='answerQuestion(false)'>No</button></div>";
  }, 1000);
}

function answerQuestion(answer) {
  var messages = document.querySelector(".conversation");
  if (answer) {
      messages.innerHTML += "<div class='message'><p>It's okay to be attracted to people of the same gender. It doesn't mean you're any less valid as a person.</p></div>";
  } else {
      messages.innerHTML += "<div class='message'><p>That's okay too. Sexual orientation is a spectrum, and not everyone experiences attraction to the same gender.</p></div>";
  }

  setTimeout(function() {
      messages.innerHTML += "<div class='message'><p>Do you feel like you're unsure about your sexual orientation?</p></div>";
      messages.innerHTML += "<div class='input'><button onclick='answerQuestion2(true)'>Yes</button><button onclick='answerQuestion2(false)'>No</button></div>";
  }, 1000);
}

function answerQuestion2(answer) {
  var messages = document.querySelector(".conversation");
  if (answer) {
      messages.innerHTML += "<div class='message'><p>It's fine you are questioning and are on the path of self exploration.</p></div>";
  } else {
      messages.innerHTML += "<div class='message'><p>That's okay!</p></div>";
  }

  setTimeout(function() {
      messages.innerHTML += "<div class='message'><p>Have you ever felt uncomfortable or unsure when it comes to traditional gender roles and expectations in relationships?</p></div>";
      messages.innerHTML += "<div class='input'><button onclick='answerQuestion3(true)'>Yes</button><button onclick='answerQuestion3(false)'>No</button></div>";
  }, 1000);
}
function answerQuestion3(answer) {
  var messages = document.querySelector(".conversation");
  if (answer) {
      messages.innerHTML += "<div class='message'><p>It's fine as this is your perception which can stand out from the common view point.</p></div>";
  } else {
      messages.innerHTML += "<div class='message'><p>Your perception is valuable!</p></div>";
  }

  setTimeout(function() {
      messages.innerHTML += "<div class='message'><p>Have you ever found yourself questioning your sexual orientation because of societal expectations or pressures?</p></div>";
      messages.innerHTML +="<div class='input'><button onclick='answerQuestion4(true)'>Yes</button><button onclick='answerQuestion4(false)'>No</button></div>";
  }, 1000);
}

function answerQuestion4(answer) {
  var messages = document.querySelector(".conversation");
  if (answer) {
      messages.innerHTML += "<div class='message'><p>Well, you need to underestand that societal expectations has nothing to do with your identity! Embrace and love yourself!</p></div>";
  } else {
      messages.innerHTML += "<div class='message'><p>That's great one should always cherrish themselves!</p></div>";
  }

  setTimeout(function() {
      messages.innerHTML += "<div class='message'><p>Do you identify yourself as gay/lesbian/bisexual/asexual?</p></div>";
      messages.innerHTML += "<div class='input'><button onclick='answerQuestion5(true)'>Yes</button><button onclick='answerQuestion5(false)'>No</button></div>";
  }, 1000);
}
function answerQuestion5(answer) {
  var messages = document.querySelector(".conversation");
  if (answer) {
      messages.innerHTML += "<div class='message'><p>That's great. Accepting your sexual orientation can be a big step towards self-discovery and self-love.</p></div>";
  } else {
      messages.innerHTML += "<div class='message'><p>That's okay too. You don't have to put a label on your sexual orientation if you don't feel comfortable doing so.</p></div>";
  }

  setTimeout(function() {
      messages.innerHTML += "<div class='message'><p>Do you have any other questions or concerns about your sexual orientation?</p></div>";
      messages.innerHTML += "<div class='input'><input type='text' id='question' placeholder='Enter your question'><button onclick='askQuestion()'>Ask</button></div>";
  }, 1000);
}
function askQuestion() {
  var question = document.getElementById("question").value;
  var messages = document.querySelector(".conversation");
  messages.innerHTML += "<div class='message'><p>" + question + "</p></div>";

  setTimeout(function() {
      messages.innerHTML += "<div class='message'><p>I'm not a trained professional, but I'll do my best to provide you with information and resources. Here are some organizations and hotlines you can contact for more support:</p><ul><li>LGBT: 1-866-488-7386</li><li>GLAAD: 1-212-629-3322</li><li>PFLAG: 1-800-246-7746</li></ul></div>";
  }, 1000);
}
