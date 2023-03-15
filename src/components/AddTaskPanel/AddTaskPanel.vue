<template>
  <div class="project-tasks_add">
    <button class="add-btn btn-round">
      <img class="svg" src="@/icons/plus.svg" alt="">
    </button>
    <span>Add Task</span>
  </div>
  <div class="add-task-form">
    <form @submit.prevent="submit">
      <div class="add-task-form_input">
          <input v-model="nameTask" @input="inputName" type="text" name="name" id="" placeholder="Task name">
          <span class="invalid-input" v-show="errors.validName.value">{{errors.validName.descError}}</span>
          <input v-model="descTask" @input="inputDesc"  type="text" name="desc" id="" placeholder="Task description">
          <span class="invalid-input" v-show="errors.validName.value">{{errors.validDesc.descError}}</span>
      </div>
      <div class="add-task-form_btn">
        <button class="btn add-task-btn" type="submit">Add Task</button>
        <button class="btn">Cancel</button>
      </div>
    </form>
    
  </div>
</template>

<script lang="ts">
import { isHasRequiredLength } from '@/utils/valudation';
import { nameMinMaxLength, descMinMaxLength } from '@/utils/enum';
import { computed, reactive, ref } from 'vue'
export default {
  setup() {
    let nameTask = ref();
    let descTask = ref();

    let errors = reactive({
      validName: {
        value: false, 
        descError: `Task name must be between ${nameMinMaxLength.minlength} and ${nameMinMaxLength.maxLength} characters`,
        validation:  (value: number): boolean => {
         return isHasRequiredLength(value, nameMinMaxLength.maxLength, nameMinMaxLength.minlength);
        }
      },
      validDesc: {
        value: false, 
        descError: `Task description must contain up to ${descMinMaxLength.maxLength} characters`,
        validation:  (value: number): boolean => {
         return isHasRequiredLength(value, nameMinMaxLength.maxLength);
        }
      }
    })

    function submit(): void {
      console.log('submit');
      console.log(nameTask.value);
      
    }

    function inputName(): void {
      errors.validName.value = errors.validName.validation(nameTask.value.length);
      console.log('valudationName', errors.validName.value);
    }

    function inputDesc(): void {
      errors.validDesc.value = errors.validDesc.validation(descTask.value.length);
      console.log('descTask', errors.validDesc.value);
    }
    

    return {
      nameTask,
      descTask,
      errors,
      inputName,
      inputDesc,
      
      
      submit
    }

  }
}
</script>

<style lang="scss">
@import './addTaskPanel.scss';
</style>