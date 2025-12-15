<template>
	<div class="users">
		<div class="search-bar">
			<input v-model="keyword" type="search" placeholder="Username / Role" class="search-box" />
			<button class="add-btn" @click="addUser">Add</button>
		</div>
		<div v-if="filteredAccounts.length > 0">
			<UserTable :accounts="paginatedAccounts" />
			<PaginationBar v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages"
					:total-items="filteredAccounts.length" :items-per-page="itemsPerPage" @page-change="handlePageChange" />
		</div>
		<div v-else class="no-results">No results found.</div>
		<NewUserModal :visible="showAddUserModal" @close="showAddUserModal = false" @submit="handleNewUser" @submitFail="showError"/>
	</div>
</template>

<script>
import UserTable from '@/components/appContentViews/usersTable/UserTable.vue';
import PaginationBar from '@/components/appContentViews/usersTable/PaginationBar.vue';
import NewUserModal from '@/components/appContentViews/usersTable/NewUserModal.vue';

import accounts from '@/assets/account.json';

export default {
	name: 'UsersView',
	components: {
		UserTable,
		PaginationBar,
		NewUserModal
	},
	data() {
		return {
			accounts: localStorage.users ? JSON.parse(localStorage.users) : [...accounts],
			currentPage: 1,
			itemsPerPage: 10,
			keyword: '',
			showAddUserModal: false
		};
	},
	methods: {
		handlePageChange(page) {
			this.currentPage = page;
		},
		addUser() {
			this.showAddUserModal = true;
		},
		handleNewUser(newUser) {
			// allPosts.value.unshift(newExperience)

			this.showShareModal = false
			this.keyword = ''
			this.currentPage = 1

			this.accounts.push(newUser);
			localStorage.users = JSON.stringify(this.accounts);
			// showSuccess();
		},
		showError() {
			// toastRef.value.showToast('提交失敗，請稍後再試', 'error')
		}
	},
	computed: {
		totalPages() {
			return Math.ceil(this.accounts.length / this.itemsPerPage);
		},
		filteredAccounts(){
			if (!this.keyword) return this.accounts
			return this.accounts.filter((p) => {
				return (
					p.name?.includes(this.keyword) ||
					p.role?.includes(this.keyword)
				)
			})
		},
		paginatedAccounts(){
			const start = (this.currentPage - 1) * this.itemsPerPage
			const end = start + this.itemsPerPage
			return this.filteredAccounts.slice(start, end)
		}
	}
};
</script>
<style scoped>
	.search-bar {
		width: 50%;
		min-width: 40rem;
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
	}

	input[type='search'] {
		width: 100%;
		margin-right: 2rem;

		&:focus {
			outline: none;
			border-color: #53629e;
			box-shadow: 0 0 5px rgba(83, 98, 158, 0.5);
		}
	}
</style>