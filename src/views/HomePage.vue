<template>
    <h2>Home</h2>

    <div>
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Users'}">Users</router-link>
    </div>
</template>

<style>
.router-link-exact-active {
  font-weight: bold;
  color: red;
}
</style>