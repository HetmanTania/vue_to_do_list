<template>
  <div v-if="!dialogAddTask.isOpen.value" @click="dialogAddTask.open" class="project-tasks_add">
    <button class="add-btn btn-round">
      <img class="svg" src="@/icons/plus.svg" alt="">
    </button>
    <span>Add Task</span>
  </div>
  <div v-if="dialogAddTask.isOpen.value" class="add-task-form">
    <form >
      <div class="add-task-form_input">
          <input v-model="nameTask" @input="inputNameTask" type="text" name="name" id="" placeholder="Task name">
          <span class="invalid-input" v-show="errors.validName.value">{{errors.validName.descError}}</span>
          <input v-model="descTask" type="text" name="desc" id="" placeholder="Task description">
      </div>
      <div class="add-task-form_btn">
        <button :disabled="isDisable" class="btn add-task-btn" type="submit">Add Task</button>
        <button @click="dialogAddTask.close" class="btn">Cancel</button>
      </div>
    </form>
    
  </div>
</template>

<script lang="ts">
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex';
import useDialog from '@/сomposable/useDialog';
import useTask from '@/сomposable/useTask';
export default {
  setup() {
    
    const store = useStore();
    let nameTask = ref('');
    let descTask = ref('');

    let dialogAddTask = useDialog();
    const {errors, inputNameTask} = useTask(nameTask);

    
    function addTask(): void {
      const tasks = {
        name: nameTask.value,
        desc: descTask.value
      };
      // store.dispatch('addTask', tasks);
    }

    const isDisable = computed((): boolean => {
      return !(!errors.validName.value && nameTask.value.length);
    })

    return {
      nameTask,
      descTask,
      errors,
      inputNameTask,
      dialogAddTask,

      isDisable
      
    }

  }
}
</script>

<style lang="scss">
@import './addTaskPanel.scss';
</style>