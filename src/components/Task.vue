<template>
    <div :class="task.isDone ? 'task task_green' : 'task'">
        <span @click="$store.commit('TOGGLE_DONE', task.id)">{{ task.name }}</span>
        <router-link :to="{ name: 'Edit', params: { id: task.id } }">
            <img src="../assets/edit.png" alt="редактировать">
        </router-link>
        <div 
            class="delete" 
            @click="$store.commit('DELETE_TASK', task.id)"
        ></div>
    </div>
</template>

<script>
    export default {
        props: {
            task: Object
        }
    }
</script>

<style lang="scss" scoped>
.task {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    height: 40px;
    position: relative;
    font-size: 20px;
    border-radius: 5px;

    &:hover {
        box-shadow: 1px 1px 5px 0px #1dad3cbf;
    }

    span {
        cursor: pointer;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5%;
        margin-left: 3%;
    }

    &_green {
        background: #42b983;
    }
    
    img {
        width: 65%;
    }
}

.delete {
    position: absolute;
    right: 0;
    top: 7px;
    width: 25px;
    height: 25px;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:before, &:after {
        position: absolute;
        left: 12px;
        content: ' ';
        height: 25px;
        width: 2px;
        background-color: #333;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
}

@media screen and (max-width: 1150px) and (min-width: 850px) {
    .task {
        img {
            width: 100%;
        }
    }
}

@media screen and (max-width: 849px) {
    .task {
        font-size: 18px;
        
        a {
            width: 10%;
        }
    }
}

@media screen and (max-width: 425px) {
    .task {
        font-size: 16px;
    }
}

@media screen and (max-width: 320px) {
    .task {
        font-size: 14px;

        a {
            margin: 0;
        }
    }
}
</style>