<template>
  <div class="dialog">
    <div class="dialog-bg" @click="close"></div>
    <div class="dialog-content">
        <div class="dialog-header">
            <h2>{{ title }}</h2>
        </div>

        <div>
            {{ desc }}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        
    },
    setup(props) {
        function close() {
            console.log();
            
        }

        return {
            close
        }
    }
}
</script>

<style>

</style>