<template>
    <teleport to="body">
        <transition name="fade">
            <div v-if="visible" class="toast" :class="type">
                {{ message }}
            </div>
        </transition>
    </teleport>
</template>
<script>
export default {
    name: "ToastWidget",
    expose: ['showToast'],
    data() {
        return {
            visible: false,
            message: '',
            type: 'success',
        };
    },
    methods: {
        showToast(message, type = 'success', duration = 5000) {
            this.message = message;
            this.type = type;
            this.visible = true;

            setTimeout(() => {
                this.visible = false;
            }, duration);
        }
    }
};
</script>

<style scoped>
.toast {
    position: fixed;
    top: 70px;
    right: 20px;
    padding: 12px 18px;
    border-radius: 8px;
    color: white;
    font-size: larger;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    opacity: 0.95;
    z-index: 9999;
    transition: all 2s ease;
}

.toast.success {
    background: #4caf50;
}

.toast.error {
    background: #f44336;
}

.toast.warning {
    background: #ff9800;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>