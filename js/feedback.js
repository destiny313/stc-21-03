const feedbakName = document.getElementById('feedbackName');
const feednackSeat = document.getElementById('feedbackSeat');
const feedbackText = document.getElementById('feedbackText');
const feedbackAgree = document.getElementById('feedbackChk');
const feedbackAgreeLabel = document.querySelector('.checkbox__label');
const feedbackSendBtn = document.getElementById('feedbackSend');

function clearFeedbackField() {
    feedbakName.value = '';
    feednackSeat.value = '';
    feedbackText.value = '';
    feedbackAgree.checked = false;
       
}

function sendFeedback() {    
    let feedbackData = {
        name: feedbakName.value,
        seat: feednackSeat.value,
        feedback: feedbackText.value
      };

    fetch('http://inno-ijl.ru/multystub/stc-21-03/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(feedbackData)
      })
      .then(data => data.json())
          .then(data => {
              if (data.success) {
                // console.log(data.body);
                clearFeedbackField();    
              }
              else {
                  alert('Передача данных не удалась!');
              }
          })
    
    
}


feedbackSendBtn.onclick = function() {
    if (feedbackAgree.checked) {
        sendFeedback();               
    }
    else {
        feedbackAgreeLabel.style.color = 'red';        
    }
}