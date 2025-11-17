<template>
	<div id="errorPage">
		<div class="error">
			<h1 class="title">Error 404: Page Not Found</h1>
			<div class="backDiv">
				<button class="backBtn" @click="handleBack">Back to Login</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ErrorPage',
	methods: {
		handleBack() {
			this.$router.push('/');
		}
	}
};
</script>

<style>
#errorPage {
	display: grid;
	height: 100vh;
	place-items: center;
	align-items: center;
}

div.backDiv {
	display: flex;
	justify-content: center;
	margin-top: 20px;
}

button.backBtn {
	width: 150px;
	background-color: #53629e;
	color: white;
	padding: 3px;
	border-radius: 10px;
	cursor: pointer;
}
</style>