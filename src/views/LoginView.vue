<template>
    <h1>hello</h1>
    <p>{{ count }}</p>
</template>
<script>
import { mapState } from 'pinia';
import { useCounterStore } from '@/store/index';
export default {
    computed:{
        ...mapState(useCounterStore,['count'])
    }
}
</script>