<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
     <ul>
      <li><a v-link="{ path: '/hello' }">Go to Hello</a></li>
      <li><a v-link="{ path: '/users' }">Go to Users</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
