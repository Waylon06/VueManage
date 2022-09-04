<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" alt="" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<sapn>2021-7-19</sapn></p>
          <p>上次登录地点：<sapn>武汉</sapn></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HomeName",
  data() {
    return {
      userImg: require("../../src/assets/images/user.png"),
    };
  },
};
</script>

<style>
</style>