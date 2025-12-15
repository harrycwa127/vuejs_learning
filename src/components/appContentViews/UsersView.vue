<template>
	<div class="users">
		<div class="search-bar">
			<input v-model="keyword" type="search" placeholder="Username / Role" class="search-box" />
			<button class="add-btn" @click="addUser">Add</button>
			<button class="edit-btn" @click="editUser">Edit</button>
			<button class="del-btn" @click="delUser">Delete</button>
		</div>
		<div v-if="filteredAccounts.length > 0">
			<UserTable ref="userTable" :accounts="paginatedAccounts" :items-per-page="itemsPerPage"/>
			<PaginationBar v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages"
					:total-items="filteredAccounts.length" :items-per-page="itemsPerPage" @page-change="handlePageChange" />
		</div>
		<div v-else class="no-results">No results found.</div>
		<UserModal :visible="showUserModal" :selectedUser="selectedUser" @close="showUserModal = false" @submit="handleNewUser" @edit="handleUpdateUser"/>
	</div>
</template>

<script>
import UserTable from '@/components/appContentViews/usersTable/UserTable.vue';
import PaginationBar from '@/components/appContentViews/usersTable/PaginationBar.vue';
import UserModal from '@/components/appContentViews/usersTable/UserModal.vue';

import accounts from '@/assets/account.json';

export default {
	name: 'UsersView',
	components: {
		UserTable,
		PaginationBar,
		UserModal
	},
	data() {
		return {
			accounts: localStorage.users ? JSON.parse(localStorage.users) : [...accounts],
			currentPage: 1,
			itemsPerPage: 10,
			keyword: '',
			showUserModal: false,
			selectedUser: null
		};
	},
	methods: {
		handlePageChange(page) {
			this.currentPage = page;
		},
		addUser() {
			this.selectedUser = null;
			this.showUserModal = true;
		},
		editUser() {
			if(this.$refs.userTable.selectedUsers && this.$refs.userTable.selectedUsers.length !== 1){
				alert("Please select one user!");
				return;
			}else{
				const selectedUser = this.accounts.find(acc => acc.name === this.$refs.userTable.selectedUsers[0]);
				this.selectedUser = selectedUser;

				this.showUserModal = true;
			}
		},
		handleNewUser(newUser) {
			this.showUserModal = false
			this.keyword = ''
			this.currentPage = 1

			this.accounts.push(newUser);
			localStorage.users = JSON.stringify(this.accounts);

			// clear selected users in table
			this.$refs.userTable.selectedUsers = [];
			// showSuccess();
		},
		handleUpdateUser(userName, updatedUser) {
			this.showUserModal = false
			this.keyword = ''
			this.currentPage = 1

			const index = this.accounts.findIndex(acc => acc.name === userName);
			if(index !== -1){
				this.accounts.splice(index, 1, updatedUser);
				localStorage.users = JSON.stringify(this.accounts);
				// showSuccess();
			}else{
				this.showError();
			}

			// clear selected users in table
			this.$refs.userTable.selectedUsers = [];
		},
		delUser() {
			const selectedUserName = this.$refs.userTable.selectedUsers;
			if(selectedUserName.length == 0) alert("No user selected!");

			for(let i = 0; i < selectedUserName.length; i++){
				const username = selectedUserName[i]
				this.accounts = this.accounts.filter(acc => acc.name !== username);
			}

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

		& button {
			margin-left: 0.5rem;
		}
	}

	input[type='search'] {
		width: 100%;

		&:focus {
			outline: none;
			border-color: #53629e;
			box-shadow: 0 0 5px rgba(83, 98, 158, 0.5);
		}
	}
</style>