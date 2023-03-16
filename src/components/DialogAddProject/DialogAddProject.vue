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
          <input v-model="projectTask" @input="inputNameProject" type="text" name="" id="name">
          <span class="invalid-input" v-show="errors.validName.value">{{errors.validName.descError}}</span>
        </div>
        <div class="add-project-form_btn">
        <button class="btn add-project-btn" type="submit">Add</button>
        <button class="btn" @click="close">Cancel</button>
      </div>
       </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, ref, reactive} from 'vue'
import { isHasRequiredLength } from '@/utils/valudation';
import { nameMinMaxLength } from '@/utils/enum';

export default defineComponent({
  setup(props, context) {
    const store = useStore();

    let projectTask = ref();
    let errors = reactive({
      validName: {
        value: false, 
        descError: `Project name must be between ${nameMinMaxLength.minlength} and ${nameMinMaxLength.maxLength} characters`,
        validation: (value: number): boolean => {
         return isHasRequiredLength(value, nameMinMaxLength.maxLength, nameMinMaxLength.minlength);
        }
      }
    });

    function inputNameProject(): void {
      errors.validName.value = errors.validName.validation(projectTask.value.length);
      console.log('valudationName', errors.validName.value);
    }

    function submit() {
      store.dispatch('addProject', projectTask.value);
      close();
    }

    function close(): void {
      context.emit('close');
    }
    
    return {
      errors,
      projectTask,
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