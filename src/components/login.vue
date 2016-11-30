<template>
  <div id="login">
      	<h2>login</h2>
      	<input type="text" v-model="user" placeholder="edit me">
      	<p>{{user}}</p>
      	<!-- <input type="password" v-model="password" name=""> -->
      	<button ng-click="login()">Login</button>
      	<router-link to="/contain">Login</router-link>
    </div>
</template>
<script>
	import Vue from "vue";
	
</script>