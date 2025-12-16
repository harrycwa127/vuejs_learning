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
		<ToastWidget ref="toastRef"/>
	</div>
</template>

<script>
import accounts from '@/assets/account.json';
import { useUserStore } from '@/store/user';

import ToastWidget from '@/components/widget/ToastWidget.vue';

export default {
	name: 'LoginPage',
	components: {
		ToastWidget
	},
	methods: {
		handleLogin() {
			const username = document.querySelector('input[placeholder="Username"]').value;
			const password = document.querySelector('input[placeholder="Password"]').value;

			const users = localStorage.users ? JSON.parse(localStorage.users) : [...accounts];
			const account = users.find(acc => acc.name === username && acc.password === password);
			if(account){
				const userStore = useUserStore();
				userStore.setUser({ name: account.name, role: account.role });
				this.$router.push('/home');
			}else{
				this.showError('Invalid username or password');
			}
		},
		showSuccess(message='Successfully!') {
			this.$refs.toastRef.showToast(message, 'success')
		},
		showError(message='Error!') {
			this.$refs.toastRef.showToast(message, 'error')
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
		padding: 3px;
	}
}

div.loginDiv {
	background-color: #D9CFC7;
	padding: 30px;
	border-radius: 10px;
	border: 1px solid gray;
}
</style>