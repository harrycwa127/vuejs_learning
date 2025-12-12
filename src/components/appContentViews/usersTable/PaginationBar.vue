<template>
	<div class="pagination-container">
		<div class="pagination-info">
			Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} entries
		</div>

		<div class="pagination-controls">
			<button class="pagination-btn prev-btn" :disabled="currentPage === 1"
				@click="$emit('page-change', currentPage - 1)">
				← Pervious
			</button>

			<div class="page-numbers">
				<button v-for="page in visiblePages" :key="page" class="page-btn"
					:class="{ active: page === currentPage }" @click="$emit('page-change', page)">
					{{ page }}
				</button>
			</div>

			<button class="pagination-btn next-btn" :disabled="currentPage === totalPages"
				@click="$emit('page-change', currentPage + 1)">
				Next →
			</button>
		</div>
	</div>
</template>

<script>
    export default {
        name: "PaginationBar",
        props: {
            currentPage: { type: Number, required: true },
            totalPages: { type: Number, required: true },
            totalItems: { type: Number, required: true },
            itemsPerPage: { type: Number, default: 10 }
        },
        emits: ['page-change'],
        computed: {
            startItem() {
                return (this.currentPage - 1) * this.itemsPerPage + 1
            },
            endItem() {
                return Math.min(this.currentPage * this.itemsPerPage, this.totalItems)
            },
            visiblePages() {
                const pages = []
                const maxVisible = 5
                let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2))
                let end = Math.min(this.totalPages, start + maxVisible - 1)

                if (end - start + 1 < maxVisible) {
                    start = Math.max(1, end - maxVisible + 1)
                }

                for (let i = start; i <= end; i++) {
                    pages.push(i)
                }

                return pages
            }
        }
    };
</script>

<style scoped>
.pagination-controls {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;
	gap: 10px;

	& button {
		background: #1a3d64;
		border: none;
		color: white;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.2s;
	}
}

.page-numbers .page-btn {
	background: none;
	color: black;

	&.active {
		background: #1a3d64;
		color: white;
	}
}
</style>