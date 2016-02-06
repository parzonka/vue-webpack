<template>
  <div class="users">
    <h1>Users</h1>
    <ul v-for="user in users">
      <li>{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [{
        name: 'foo'
      },
      {
        name: 'bar'
      }]
    }
  }
}
</script>
