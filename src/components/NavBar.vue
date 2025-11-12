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
	background-color: #D9CFC7;
	padding: 10px;
	display: flex;
	align-items: center;
	margin-bottom: 5px;
}

div.navItems {
	display: flex;
    height: 2rem;
}

button.navItem {
	background-color: inherit;
	border: none;
	color: black;
	cursor: pointer;
	width: 5rem;
}

img.navIcon {
	margin-right: 20px;
}

button.navItem.active {
	background-color: #C9B59C;
	color: black;
}
</style>
