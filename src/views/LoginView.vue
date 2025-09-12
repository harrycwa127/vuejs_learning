<template>
	<div class="login">
		<div class="loginDiv">
			<h1 class="title">Login</h1>

			<div class="row">
				<label for="username">Username: </label>
				<input type="text" placeholder="Username" />
			</div>
			<div class="row">
				<label for="password">Password: </label>
				<input type="password" placeholder="Password" />
			</div>
			<div class="loginBtnRow">
				<button class="loginBtn" @click="handleLogin">Login</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'LoginView',
	methods: {
		handleLogin() {
			this.$router.push('/home');
		}
	}
};
</script>

<style scoped>
div.login {
	display: grid;
	height: 100vh;
	place-items: center;
	align-items: center;
}

div.contentDiv {
	display: grid;
	justify-content: center;
	width: 25%;
}

.title {
	text-align: center;
	margin-top: 10px
}

.row {
	display: grid;
	margin-bottom: 10px;
}

.loginBtnRow {
	justify-content: center;

	&>button {
		width: 100%;
		background-color: #393e46;
		color: #dfd0b8;
	}
}

div.loginDiv {
	background-color: #393e46;
	padding: 30px;
	border-radius: 10px;
}
</style>