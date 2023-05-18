document.addEventListener('DOMContentLoaded', function () {
    var chatboxBody = document.querySelector('.chatbox-body');
    var chatInput = document.querySelector('.chatbox-input input[type="text"]');
    var chatButton = document.querySelector('.chatbox-input button');
    
    chatButton.addEventListener('click', function () {
        sendMessage();
    });
    
    chatInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendMessage();
        }
    });
    
    function sendMessage() {
        var messageText = chatInput.value;
        if (messageText.trim() !== '') {
            appendMessage(messageText, 'sent');
            chatInput.value = '';
            scrollToBottom();
            
            // Simulate delay before receiving response
            setTimeout(function () {
                let responseText = getResponse(messageText);
                console.log("responseText "+ responseText)
                appendMessage(responseText, 'received');
                scrollToBottom();
            }, 1000);
        }
    }
    
    function appendMessage(message, sender) {
        var messageElement = document.createElement('div');
        messageElement.classList.add('chatbox-message', sender);
        var messageContent = document.createElement('p');
        messageContent.textContent = message;
        messageElement.appendChild(messageContent);
        chatboxBody.appendChild(messageElement);
    }
    
    function scrollToBottom() {
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
    


    function getResponse(message) {
        // Bu kısımda OpenAI API'sini kullanarak gerçek bir cevap alabilirsiniz.
        // GPT-3.5 gibi dil modelleri kullanarak chat botunuzu özelleştirebilirsiniz.
        // Ancak bu örnekte model çağırma işlemini dahil etmiyorum.
        // Sadece statik bir mesaj döndürüyorum.
        
        return "Merhaba! Ben bir chat botum.";
    }
});
