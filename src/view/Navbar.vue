<template>
  <div id="nav" class="border mb-5">
    <router-link to="/" class="border p-3 rounded ml-3 shadow-sm">انتخاب واحد</router-link>
    <router-link to="/calculate-avg" class="border p-3 rounded ml-3 shadow-sm">محاسبه معدل</router-link>
    <router-link to="/to-do-list" class="border p-3 rounded shadow-sm"> لیست کار</router-link>
    <!--            |-->
    <!--                        <router-link to="/calculator" class="fontSize">ماشین حساب</router-link>-->
  </div>

</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>