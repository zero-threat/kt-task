<template>
    <div class="homepage">
        <TaskList />
    </div>
</template>

<script>
import TaskList from '../components/TaskList.vue'
    export default {
        components: {
            TaskList
        }
    }
</script>

<style lang="scss" scoped>
.homepage {
    width: 42%;
}

@media screen and (max-width: 425px) {
    .homepage {
        width: 80%;
    }
}
</style>