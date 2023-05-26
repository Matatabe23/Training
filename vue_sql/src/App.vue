<template>
	<div>
		<div class="conteiner">
			<div class="reg">
				<h3>Вход</h3>
				<input class="reg-down" v-model="email" type="text" placeholder="Email">
				<input class="reg-down" v-model="password" type="text" placeholder="Password">
				
			</div>
		</div>
	</div>
</template>

<script>
import user from './user.js';

export default {
	data() {
		return {
			user: user,
			email: '' ,
			password: '',

		};
	},
	async mounted() {
		// const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
		// this.posts = response.data;
	},
};
</script>

<style>
* {
	margin: 0;
	background-color: #1f242d;
}
body{
	background-color: #1f242d;
}
.reg{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.reg h3{
	color: #0ef;
	font-size: 45px;
}
.reg-down{
	border: none;
	border-radius: 20px;
	margin-top: 15px;
	padding: 15px 20px;
	background-color: #0ef;
	box-shadow: 0 0 10px #0ef;
}
.reg-down::placeholder{
	color: black;
}
</style>