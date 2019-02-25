<template>
  <div class="chat container">
    <h2 class="center teal-text">Vue-Chat</h2>
    <div class="card">
      <div class="card-content">
        <p class="red-text nomessages" v-if="messages.length == 0">There are no messages to display</p>
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text name">{{ message.user }}</span>
            <span class="grey-text text-darken-3">{{ message.message }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage/>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage.vue";
import fb from "@/firebase/init.js";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = fb.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let doc = change.doc;
          let newMessage = {
            id: doc.id,
            user: doc.data().user,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format("LTS")
          };
          this.messages = [...this.messages, newMessage];
        }
      });
    });
  }
};
</script>

<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}

.chat {
  text-align: left;
}

.chat li {
  background: rgb(240, 240, 240);
  padding: 1em;
  padding-left: 40px;
  border-radius: 50px;
}

.chat span {
  font-size: 1.4em;
  margin-right: 4px;
  vertical-align: -webkit-baseline-middle;
}

.chat .time {
  display: block;
  float: right;
  padding-right: 3em;
}

.chat .name {
  font-weight: bold;
}
</style>

