<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link
          @click.native="total = 856"
          :class="$route.fullPath===$publicUrl + '/'||$route.fullPath===$publicUrl + '/?tab=all' ? 'active' : ''"
          :to="$publicUrl + '/?tab=all'"
        >全部</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 15"
          :class="$route.fullPath===$publicUrl + '/?tab=good'?'active':''"
          :to="$publicUrl + '/?tab=good'"
        >精华</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 3"
          :class="$route.fullPath===$publicUrl + '/?tab=weex'?'active':''"
          :to="$publicUrl + '/?tab=weex'"
        >weex</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 247"
          :class="$route.fullPath===$publicUrl + '/?tab=share'?'active':''"
          :to="$publicUrl + '/?tab=share'"
        >分享</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 577"
          :class="$route.fullPath===$publicUrl + '/?tab=ask'?'active':''"
          :to="$publicUrl + '/?tab=ask'"
        >问答</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 30"
          :class="$route.fullPath===$publicUrl + '/?tab=job'?'active':''"
          :to="$publicUrl + '/?tab=job'"
        >招聘</router-link>
      </li>
    </ul>
    <div class="content">
      <ul v-if="topics.length">
        <li v-for="topic in topics" :key="topic.id">
          <router-link :to="$publicUrl + `/user/${topic.author.loginname}`">
            <img :style="{width:'30px',hight:'30px'}" :src="topic.author.avatar_url" alt />
          </router-link>

          <div>
            <span>{{topic.reply_count}}</span>/
            <span>{{topic.visit_count}}</span>
          </div>
          <span
            v-if="$route.fullPath===$publicUrl + '/'||$route.fullPath===$publicUrl + '/?tab=all' ? 'active' : '' ||topic.top||topic.good"
            :class="{tab:true,active:topic.top||topic.good}"
          >{{topic.top?'置顶':topic.good?'精华':topic.tab==='share'?'分享':topic.tab==='ask'?'问答':topic.tab==='job'?'招聘':'weex'}}</span>

          <router-link class="txt" :to="$publicUrl + `/topic/${topic.id}`">{{topic.title}}</router-link>

          <span class="time">{{myMoment(topic.last_reply_at)}}</span>
        </li>
      </ul>
      <img
        v-else
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562737238334&di=271f9c7ceb6b1853b0466a7ce7ceadd9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d0f55b8e0674a8012126cecf461b.gif"
        alt
      />
    </div>
    <el-pagination
      @current-change="changePage"
      background
      layout="prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      total: 856
    };
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const tab = this.$route.query.tab || "all";
        const num = this.$route.query.num || 1;
        this.topics = [];
        axios
          .get(`https://www.vue-js.com/api/v1/topics/?tab=${tab}&page=${num}`)
          .then(res => {
            // console.log(res.data.data[0]);

            this.topics = res.data.data;
          });
      }
    }
  },
  methods: {
    myMoment(item) {
      moment.locale("zh-cn");
      return moment(item).fromNow();
    },
    changePage(num) {
      const tab = this.$route.query.tab || "all";
      this.$router.push(`/?tab=${tab}&page=${num}`);
    }
  }
};
</script>

<style>
.home {
  width: 80%;
  margin: 0 auto;
}
.home .nav {
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #ccc;
}
.home .nav li {
  margin-right: 25px;
}
.home .nav li a {
  color: #333;
}
.active {
  color: #fff;
  background-color: #369219;
  padding: 0 10px;
  border-radius: 3px;
}
.home .content {
  background-color: #fff;
}
.home .content ul {
  margin: 0;
  padding: 0;
}
.home .content ul li {
  padding: 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
}
.home .content ul li:hover {
  background-color: #e5e5e5;
}
.home .content ul li > img,
.home .content ul li > div,
.home .content ul li > span {
  margin-right: 10px;
  border-radius: 3px;
  flex-shrink: 0;
  /* 不允许放大 */
}
.home .content ul li > span {
  padding: 0 5px;
}
.home .content ul li .txt {
  color: #444;
  white-space: nowrap;
  /* 禁止折行 */
  overflow: hidden;
  text-overflow: ellipsis;
  /* 显示三个点 */
}
.home .content ul li .txt:hover {
  text-decoration: underline;
}
.home .content ul li .tab {
  background-color: #ccc;
}
.home .content ul li .active {
  background-color: #369219;
}
.home .content ul li .time {
  flex-shrink: 0;
  /* 禁止缩小 */
  flex-grow: 1;
  /* 占满剩余空间 */
  text-align: right;
}
</style>
