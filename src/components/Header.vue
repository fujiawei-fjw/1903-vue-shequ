<template>
  <div class="header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="https://www.vue-js.com/public/images/vue.png" alt />
        <h1>Vue.js</h1>
      </router-link>
      <router-link to="/topic/create">
        <div v-if="userInfo">发不话题</div>
      </router-link>
      <router-link to="/topic/create">
        <div>
          <span>{{shuliang}}</span> 未读消息
        </div>
      </router-link>
      <div v-if="!userInfo" class="login">
        <input type="text" v-model="text" />
        <button @click="login">登录</button>
      </div>
      <div v-else class="logout">
        <img :src="userInfo.avatar_url" alt />
        <button @click="logout">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
// 存储登录状态  一般使用浏览器的本地存储功能   1.cookie  2.sessionStorage   3.localStorage
// local 和 session 的区别  local 一直存储知道不想存了  session 关闭窗口就消失
// 用法 ⬇️   一般存储安全信息
// 存储 localSrorage.setItem('属性名','属性值')    sessionStorage.setItem('属性名','属性值')
// 获取 localSrorage.getItem('属性名') session用法一致
// 清空  localSrorage.removeItem('属性名')   全部清空sessionStorage.clear()  session用法一致

// 存储的属性值不能是对象类型  一般村  boolean  number  string
// 存储的数据可以不在浏览器的 开发者工具(F12) 下的 Application  内查看
import { log } from "util";
import axios from "axios";
export default {
  name: "tou",
  data() {
    return {
      text: "676de471-b66a-4ccb-a3e1-bb060d1b4e5c",
      userInfo: null,
      shuliang: 0
    };
  },
  created() {
    if (sessionStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          this.userInfo = res.data;
          // console.log(res.data);
        });
    }
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        axios
          .get(
            `https://www.vue-js.com/api/v1/message/count?accesstoken=${sessionStorage.getItem(
              "token"
            )}`
          )
          .then(res => {
            // console.log(res.data);
            this.shuliang = res.data.data;
          });
      }
    }
  },
  methods: {
    login() {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: this.text
        })
        .then(res => {
          // console.log(res.data);
          this.userInfo = res.data;
          // 将得到的信息存储到本地浏览器
          sessionStorage.setItem("token", this.text);
          sessionStorage.setItem("user_id", res.data.id);
        });
    },
    logout() {
      sessionStorage.clear();
      this.userInfo = null;
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 55px;
  background-color: rgb(30, 83, 8);
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
}
.header-inner {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-inner > .logo {
  display: flex;
  align-items: center;
  color: #fff;
}
.header-inner > .logo > img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.header-inner > .logo > h1 {
  margin: 0;
}
.header-inner > .login {
  /* display: flex; */

  justify-content: flex-end;
}
.header-inner .logout {
  display: flex;
  align-items: flex-end;
}
.header-inner .logout img {
  width: 40px;
  height: 40px;
}
</style>
