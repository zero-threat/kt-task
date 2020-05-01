<template>
    <form class="def-form">
        <input type="text" v-model="name" placeholder="Добавьте действие">
        <button
            class="btn"
            @click.prevent="addTask(name)"
        >
            <router-link to="/page/1">Добавить</router-link>
        </button>
    </form>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            ...mapMutations(['ADD_TASK']),
            addTask(name) {
                this.ADD_TASK({ id: Math.random(), name: name, isDone: false })
                this.$emit('set-page', 1)
            }
        }
    }
</script>

<style lang="scss">
.def-form {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Open Sans', sans-serif;

    input {
        outline: none;
        height: 60px;
        border: 1px solid #2c3e50;
        border-radius: 5px;
        font-size: 20px;
        text-indent: 15px;
    }

    &_long {
        width: 40%;
    }
}

.btn {
    height: 40px;
    border-radius: 12px;
    background: none;
    cursor: pointer;
    border: 1px solid #42b983;
    outline: none;
    font-family: 'Open Sans', sans-serif;

    .router-link-active {
        color: #2c3e50;
        text-decoration: none;
        font-size: 15px;
    }

    &:hover {
        transition: all ease 0.3s;
        box-shadow: 1px 1px 5px 0px #1dad3cbf;
    }
}
</style>