<template>
  <div>
    <h1>Test</h1>
    <button @click="handleGet">click</button>
    <button @click="handlePost">post</button>
    <button @click="handlePut">put</button>
  </div>
</template>

<script>
import http from "../api/http";
export default {
  methods: {
    async handleGet() {
      const { status, data } = await http.get(
        "/resources/5cb438793a18260dccc80516"
      );
      console.log("result status---->", status);
      console.log("result data---->", data);
    },

    async handlePost() {
      const { status, data } = await http.post(
        "http://localhost:3000/users/actions/login",
        {
          email: "823406519@qq.com",
          password: "123456"
        }
      );

      localStorage.setItem("token", "Bearer " + data.token);
      console.log("设置token成功----->", localStorage.getItem("token"));
      console.log("result status---->", status);
      console.log("result data---->", data);
    },

    async handlePut() {
      const { status, data } = await http.put(
        "http://localhost:3000/users/password",
        {
          password: "123456",
          password2: "123456",
          password3: "123456"
        }
      );
      console.log("result status---->", status);
      console.log("result data---->", data);
    }
  }
};
</script>