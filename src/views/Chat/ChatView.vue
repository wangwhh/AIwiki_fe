<template>    
    <div class="chat-container">    
      <div class="chat-wrapper">    
        <div class="chat-header">    
          <h2 class="chat-title">Chat with Assistant</h2>    
        </div>    
        <div class="chat-messages">    
          <div v-for="message in messages" :key="message.id" class="message" :class="{ 'user-message': message.role==='user', 'ai-message': message.role==='assistant'}">    
            <div class="message-bubble">
              {{ message.content }}    
            </div>    
          </div>    
        </div>    
        <div class="chat-input">    
          <input type="text" v-model="newMessage" @input="updateBubbleWidth" @keyup.enter="sendMessage" placeholder="Type your message..." class="message-input">    
          <button @click="sendMessage" class="send-button">Send</button>    
        </div>    
      </div>    
    </div>    
  </template>    
    
  <script>    

  import axios from 'axios';
  export default {  
  name: "ChatView",  
  data() {  
    return {  
      messages: [  
        { role:"assistant", content: "您好！我是Wiki AI 大模型！"},
        { role:"assistant", content: "请问我有什么能够帮助你的吗?"},
      ],  
      newMessage: ""  
    };  
  },  
  mounted() {  
    this.scrollToBottom();  
  },  
  updated() {  
    this.scrollToBottom();  
  },  
  methods: {  
    scrollToBottom() {  
      this.$nextTick(() => {  
        const chatContainer = this.$el.querySelector(".chat-messages");  
        chatContainer.scrollTop = chatContainer.scrollHeight;  
      });  
    },  
    sendMessage() {  
      if (this.newMessage.trim() !== "") {  
        this.ask(this.newMessage);
        this.messages.push({ role: 'assistant', content: "您好！请稍等！我正在思考中..." });
        this.newMessage = "";  
        this.$nextTick(() => {  
          this.scrollToBottom();  
        });  
      }  
    },  
    // simulateAIResponse(userMessage) {  
    //   setTimeout(() => {  
    //     this.messages.push({ id: this.messages.length + 1, content: "I understand that you said - " + userMessage, fromAI: true });  
    //     this.$nextTick(() => {  
    //       this.scrollToBottom();  
    //     });  
    //   }, 500);  
    // },  
    updateBubbleWidth() {  
      const input = this.$refs.messageInput;  
      const bubble = input.nextElementSibling;  
      bubble.style.width = input.value.length * 8 + 'px';  
    },
    async ask(question) {
        this.messages.push({ role: 'user', content: question });
        const CHAT_URL = 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro';
        const token = "24.e1d0ad464d7be3f81765d23e1c087fe9.2592000.1706507090.282335-46042205";
        const res = await axios.post(
            CHAT_URL,
            { messages: this.messages.slice(2) },
            { params: { 'access_token': token } },
            { Headers: {'Content-Type': 'application/json'}}
        ).then(res => {
          this.messages.pop();
          const { data } = res;
          this.messages.push({ role: 'assistant', content: data.result });
          return data;
        });
    }
  }
};   
</script>    
    
<style scoped>    
.chat-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
  .chat-wrapper {
    height: 80%;
    width: 60%;
    overflow: hidden;    
    border: 1px solid #ccc;    
    border-radius: 10px;    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);    
  }    
    
 
  .chat-header {  
    background-color: #007BFF;  
    color: #fff;  
    padding: 10px;  
    border-top-left-radius: 10px;  
    border-top-right-radius: 10px;  
  }  
    
  .chat-title {  
    margin: 0;  
  }  
    
  .chat-messages {  
    max-height: 300px;  
    overflow-y: auto;  
    padding: 10px;  
  }  
    
  .message {  
    margin-bottom: 10px;  
    display: flex;  
    align-items: flex-start;  
  }  
    
  .message-bubble {  
    padding: 10px;  
    border-radius: 10px;  
    margin: 0 5px;  
    display: inline-block;  
  }  
    
  .user-message .message-bubble {  
  background-color: #FFFFFF; /* 白色 */  
  color: #000000; /* 黑色 */  
  align-self: flex-end;  
}  
  
.ai-message .message-bubble {  
  background-color: #ADD8E6; /* 浅蓝色 */  
  color: #000000; /* 黑色 */  
  align-self: flex-start;  
}
    
  .chat-input {  
    display: flex;  
    position: fixed;
    width: 60%;
    align-items: center;  
    padding: 10px;  
    border-bottom-left-radius: 10px;  
    border-bottom-right-radius: 10px;  
    background-color: #fff;
    top: 90%;
  }  
    
  .message-input {  
    flex: 1;  
    padding: 10px;  
    border: none;  
    border-radius: 5px;  
    margin-right: 10px;  
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);  
  }  
    
  .send-button {  
    padding: 10px 20px;  
    border: none;  
    background-color: #007BFF;  
    color: white;  
    border-radius: 5px;  
    cursor: pointer;  
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);  
  }  
  </style> 