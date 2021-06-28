const openBtnPrize = document.getElementById('btn-prize-open');
const closeBtnPrize = document.querySelector('.prizeWindow__close');
const sendBtnPrize = document.querySelector('.prizeWindow__input')
const prizeWindow = document.querySelector('.prizeShade');
const namePrize = document.querySelector('.prizeWindow__userName');
const mailPrize = document.querySelector('.prizeWindow__userEmail');
const selectedPrize = document.querySelector('.prizeWindow__selectPrize');
const checkPrize = document.getElementById('chkPrz');
const selectedPrizeLabel = document.querySelector('.prizeWindow__checkboxLabel');


function clearPrizeField() {
    namePrize.value = '';
    mailPrize.value = '';
    selectedPrize.value = '';
    checkPrize.checked = false;

    namePrize.style.border ='';        
    mailPrize.style.border ='';        
    selectedPrize.style.border ='';        
    
       
}

function sendPrizeData() {    
    let dataPrz = {
        name: namePrize.value,
        mail: mailPrize.value,
        prize: selectedPrize.value
      };

    fetch('http://inno-ijl.ru/multystub/stc-21-03/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(dataPrz)
      })
      .then(data => data.json())
          .then(data => {
              if (data.success) {
                // console.log(data.body);                
                clearPrizeField();
                prizeWindow.style.display = 'none';    
              }
              else {
                  alert('Передача данных не удалась!');
              }
          })
    
    
}

openBtnPrize.onclick = function() {    
    prizeWindow.style.display = 'block';
}

closeBtnPrize.onclick = function() {
    clearPrizeField();
    prizeWindow.style.display = 'none'; 
}

sendBtnPrize.onclick = function() {
    checkField();
    if (checkField()) {
        sendPrizeData(); 
    }
    else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function checkField() {
    let fieldIsCorrect = true;
    if (!namePrize.value) {
        namePrize.style.border ='2px solid red';
        fieldIsCorrect = false;        
    } else {
        namePrize.style.border ='';
    }
    if (!mailPrize.value) {
        mailPrize.style.border ='2px solid red';
        fieldIsCorrect = false;        
    } else {
        mailPrize.style.border ='';
    }
    if (!selectedPrize.value) {
        selectedPrize.style.border ='2px solid red';
        fieldIsCorrect = false;           
    } else {
        selectedPrize.style.border ='';
    }
    if (!checkPrize.checked) {
        selectedPrizeLabel.style.color = 'red';
        fieldIsCorrect = false;           
    } else {
        selectedPrizeLabel.style.color = '';
    }
    return fieldIsCorrect;
}