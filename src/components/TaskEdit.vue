<template>
    <form class="def-form def-form_long">
        <input type="text" v-model="name">
        <button
            class="btn"
            @click.prevent="updateTask"
        >
            Сохранить
        </button>
    </form>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        data() {
            const currentTask = this.$store.getters.findTask(this.$route.params.id)
            return {
                name: currentTask.name
            }
        },
        methods: {
            ...mapMutations(['UPDATE_TASK']),
            updateTask() {
                this.UPDATE_TASK({ id: this.$route.params.id, name: this.name })
                this.$router.push('/page/1')
                this.$emit('set-page', 1)
            }
        }
    }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 700px) {
    input {
        font-size: 16px;
    }
    
    .def-form {
        width: 60%;
    }
}

@media screen and (min-width: 320px) and (max-width: 600px) {
    input {
        font-size: 14px;
    }
}
</style>