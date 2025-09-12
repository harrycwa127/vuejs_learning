<template>
	<div class="navBar">
		<img class="navIcon" src="../assets/logo.png" alt="Logo" height="50" />
		<div class="navItems">
			<button class="navItem" v-for="(item, index) in navItems" :key="index" @click="handelNavItemClicked(item)">
				{{ item.name }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	props: {
		navItems: {
			type: Array,
			default: () => [{
				name: 'Home',
				url: '/home'
			}]
		}
	},
	methods: {
		handelNavItemClicked(item) {
			this.$emit('navItemClicked', item);
			window.$('div.navItems button.navItem').removeClass('active');
			window.$(`div.navItems button.navItem:contains(${item.name})`).addClass('active');
		}
	},
	emits: ['navItemClicked'],
	mounted() {
		window.$('div.navItems button.navItem:contains(Home)').addClass('active');
	}
}
</script>

<style scoped>
div.navBar {
	background-color: #393e46;
	padding: 10px;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

button.navItem {
	background-color: inherit;
	border: none;
	color: #e6e6e6;
	margin-left: 10px;
	margin-left: 10px;
	cursor: pointer;
}

img.navIcon {
	margin-right: 20px;
}

button.navItem.active {
	background-color: #948979;
	color: #222831;
}
</style>
