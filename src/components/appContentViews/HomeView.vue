<template>
	<div class="about">
		<p>This is a website built with Vue.js for learning</p>
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