<template>
  <div class="dialog">
    <div class="dialog-bg" @click="close"></div>
    <div class="dialog-content">
        <div class="dialog-header">
            <h2>Add project</h2>
        </div>
       <form class="add-project-form" v-on:submit.prevent="submit">
        <div class="add-project_input">
          <label for="name">Name</label>
          <input v-model="projectName" @input="inputNameProject" type="text" name="" id="name">
          <span class="invalid-input" v-show="errors.validName.value">{{errors.validName.descError}}</span>
        </div>
        <div class="dialog_btn">
          <button class="btn add-project-btn" type="submit">Add</button>
          <button class="btn" @click="close">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, ref, reactive} from 'vue';
import useProject from '@/сomposable/useProject';

export default defineComponent({
  setup(_, context) {
    const store = useStore();
    const {projectName, errors, inputNameProject} = useProject('');

    function submit() {
      store.dispatch('addProject', projectName.value);
      close();
    }

    function close(): void {
      context.emit('close');
    }
    
    return {
      errors,
      projectName,
      inputNameProject,
      close,
      submit,
    }
  }
})
</script>

<style lang="scss">
@import './dialogAddPtoject.scss';
</style>