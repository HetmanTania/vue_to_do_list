<template>
  <div class="dialog">
    <div class="dialog-bg" @click="close"></div>
    <div class="dialog-content">
        <div class="dialog-header">
            <h2>{{ title }}</h2>
        </div>
        <div class="dialog_desc">
            {{ desc }}
        </div>
        <div class="dialog_btn">
          <button class="btn add-project-btn" @click="deleteElement" type="submit">Yes</button>
          <button class="btn" @click="close">Cancel</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
    setup(_, context) {
        
        function close(): void {
            context.emit('close');
        }

        function deleteElement(): void {
            context.emit('deleteElement');
            context.emit('close');
        }

        return {
            close,
            deleteElement
        }
    }
})
</script>

<style>

</style>