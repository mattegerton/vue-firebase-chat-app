<template>
  <div class="chat container">
    <h2 class="center teal-text">Vue-Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text name">Matt</span>
            <span class="grey-text text-darken-3">What time shall we meet tomorrow?</span>
            <span class="grey-text time">13:31</span>
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
export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {};
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

