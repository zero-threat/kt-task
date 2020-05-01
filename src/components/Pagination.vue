<template>
    <div class="pagination">
        <div class="pagination__wrapper">
            <div class="pagination__button" v-for="page in pages" :key="page">
                <router-link :to="{ name: 'Page', params: { pageNumber: page } }">
                    <button 
                        :class="current === page ? 'btn btn_is-active' : 'btn'"
                        @click="$emit('set-page', page)"
                    >
                        {{ page }}
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            total: Number,
            perPage: Number,
            current: Number
        },
        computed: {
            pages() {
                const totalPages = []
                for (let i = 0; i < this.total; i++) {
                    if (Number.isInteger(i / this.perPage)) {
                        totalPages.push(i / 10 + 1)
                    }
                }
                return totalPages
            }
        }
    }
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;

    &__wrapper {
        // width: 10%;
        display: flex;
        justify-content: space-between;
    }

    &__button {
        margin-left: 15%;
        width: 50%;
    }

    button {
        height: 23px;
        border-radius: 100%;
    }
}
.router-link-exact-active {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    transition: ease all 0.3s;
    transform: scale(1.3);
    text-decoration: none;
}
</style>