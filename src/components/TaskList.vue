<template>
    <div class="task-list">
        <TaskEdit 
            v-show="false"
            v-on:set-page="setPage"
        />
        <AddTask v-on:set-page="setPage" />
        <Spinner v-if="isLoading" />
        <div class="task-wrapper">
            <div class="sort">
                <img src="../assets/sort.png" @click="SORT_TASKS" v-if="!isLoading">
            </div>
            <Task 
                v-for="task in collection" 
                :key="task.id" 
                :task="task" 
            />
        </div>
        <Pagination
            v-if="tasks.length > 10"
            :total="tasks.length"
            :perPage= 10
            :current="currentPage"
            v-on:set-page="setPage"
        />
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import Task from './Task';
    import Pagination from './Pagination';
    import AddTask from './AddTask'
    import TaskEdit from './TaskEdit'
    import Spinner from './Spinner';

    export default {
        components: {
            Task,
            Pagination,
            AddTask,
            TaskEdit,
            Spinner
        },
        data() {
            return {
                currentPage: +this.$route.params.pageNumber,
                pagination: {
                    startIndex: 0,
                    endIndex: 9
                }
            }
        },
        computed: {
            ...mapGetters(['tasks', 'isLoading']),
            collection() {
                return this.paginate(this.tasks);
            }
        },
        methods: {
            ...mapMutations(['SORT_TASKS']),
            setPage(page) {
                this.pagination = this.paginator(this.tasks.length, page)
                window.scrollTo(0, 0)
            },
            paginate(data) {
                return data.slice(this.pagination.startIndex, this.pagination.endIndex + 1)
            },
            paginator(totalItems, currentPage) {
                const startIndex = (currentPage - 1) * 10
                const endIndex = Math.min(startIndex + 10 - 1, totalItems - 1);
                return {
                    currentPage: currentPage,
                    startIndex: startIndex,
                    endIndex: endIndex,
                }
            }
        },
        mounted() {
            this.tasks.length ? null : this.$store.dispatch('fetchTasks')
        }
    }
</script>

<style lang="scss" scoped>
.task-list {

    img {
        cursor: pointer;
        width: 7%;
        border-radius: 5px;

        &:hover {
            transition: all ease 0.2s;
            box-shadow: 1px 1px 5px 0px #1dad3cbf;
        }
    }
}

.task-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
}
</style>