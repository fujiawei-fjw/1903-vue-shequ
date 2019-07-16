<template>
  <div>
    <div class="top-user">
      <div class="zhuye">
        <span>主页</span>
      </div>
      <div class="user-box">
        <div class="top-content">
          <img :src="user.avatar_url" alt />
          <span>{{user.loginname}}</span>
        </div>
        <div class="jifen">
          <span>{{user.score}} 积分</span>
          <span class="sj">注册时间{{myMoment(user.create_at)}}</span>
        </div>
      </div>
      <div class="user-box2">
        <ul>
          <li v-for="topic in user.recent_topics" :key="topic.id">
            <router-link :to="$publicUrl + `/user/${topic.author.loginname}`">
              <img :style="{width:'30px',hight:'30px'}" :src="topic.author.avatar_url" alt />
            </router-link>

            <router-link class="txt" :to="$publicUrl + `/topic/${topic.id}`">{{topic.title}}</router-link>

            <span class="time">{{myMoment(topic.last_reply_at)}}</span>
            <!-- <span class="sj">注册时间{{myMoment(user.create_at)}}</span> -->
          </li>
        </ul>
      </div>
      <div class="user-box3">
        <ul>
          <li v-for="topic in user.recent_replies" :key="topic.id">
            <router-link :to="$publicUrl + `/user/${topic.author.loginname}`">
              <img :style="{width:'30px',hight:'30px'}" :src="topic.author.avatar_url" alt />
            </router-link>

            <router-link class="txt" :to="$publicUrl + `/topic/${topic.id}`">{{topic.title}}</router-link>

            <span class="time">{{myMoment(topic.last_reply_at)}}</span>
            <!-- <span class="sj">注册时间{{myMoment(user.create_at)}}</span> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "user",
  data() {
    return {
      user: {}
    };
  },
  // created() {
  //   // 获取路由的动态参数     $route
  //   const loginname = this.$route.params.loginname;
  //   // console.log(this.$route);

  //   axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then(res => {
  //     console.log(res.data.data);
  //     this.user = res.data.data;

  //     // console.log(this.user);
  //   });
  // },
  methods: {
    myMoment(item) {
      moment.locale("zh-cn");
      return moment(item).fromNow();
    }
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      // deep: true,
      handler() {
        const loginname = this.$route.params.loginname;
        // console.log(this.$route);

        axios
          .get(`https://www.vue-js.com/api/v1/user/${loginname}`)
          .then(res => {
            console.log(res.data.data);
            this.user = res.data.data;

            // console.log(this.user);
          });
      }
    }
  }
};
</script>

<style>
.user-box {
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
}
.user-box2 {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}
.user-box3 {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}
.top-content img {
  width: 30px;
  height: 30px;
}
</style>
