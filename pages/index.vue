<template>
  <div>
    <h1>Get Notified</h1>
    <div>device token:{{ idToken }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listenersStarted: false,
      idToken: "",
    };
  },
  mounted() {
    this.startListeners();
  },
  methods: {
    // FCM NOTIFICATION FUNCTIONS
    async startListeners() {
      await this.startOnMessageListener();
      await this.startTokenRefreshListener();
      await this.requestPermission();
      await this.getIdToken();
      this.listenersStarted = true;
    },
    startOnMessageListener() {
      try {
        this.$fire.messaging.onMessage((payload) => {
          console.info("Message received : ", payload);
          console.log(payload.notification.body);
        });
      } catch (e) {
        console.error("Error : ", e);
      }
    },
    startTokenRefreshListener() {
      try {
        this.$fire.messaging.onTokenRefresh(async () => {
          try {
            await this.$fire.messaging.getToken();
          } catch (e) {
            console.error("Error : ", e);
          }
        });
      } catch (e) {
        console.error("Error : ", e);
      }
    },
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission();
        console.log("GIVEN notify perms");
        console.log("show111",permission);
      } catch (e) {
        console.error("Error : ", e);
      }
    },
    async getIdToken() {
      try {
        this.idToken = await this.$fire.messaging.getToken();
        console.log("TOKEN ID FOR this browser");
        console.log(this.idToken);
      } catch (e) {
        console.error("Error : ", e);
      }
    },
  },
};
</script>