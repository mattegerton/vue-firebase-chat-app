<template>
  <div class="new-msg">
    <form @submit.prevent="createMessage">
      <input type="text" name="message" placeholder="Send a message..." v-model="newMessage">
      <p class="notext" v-if="errorText">{{ errorText }}</p>
    </form>
  </div>
</template>

<script>
import fb from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        fb.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestampe: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        console.log("no message.");
        this.errorText = "You must first enter a message";
      }
    }
  }
};
</script>
