<template>
	<div class="about">
		<p>Welcome to my website for learning Vue.js</p>
		<div class="vueIconDiv">
			<img class="vueIcon" src="../../assets/logo.png" alt="vueIcon" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeView'
};
</script>

<style>
	div.vueIconDiv {
		display: flex;
		justify-content: center;
		margin-top: 5rem;
	}
</style>