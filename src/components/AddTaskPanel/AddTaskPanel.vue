<template>
  <div v-if="isOpenPanel" @click="dialogAddTask.open" class="project-tasks_add">
    <button class="add-btn btn-round">
      <img class="svg" src="@/icons/plus.svg" alt="">
    </button>
    <span>Add Task</span>
  </div>
  <div v-if="isOpenDialog" class="add-task-form">
    <form @submit.prevent="addTask">
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
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex';
import useDialog from '@/сomposable/useDialog';
import useTask from '@/сomposable/useTask';
import { IProject } from '@/types/interface';
export default {
  setup() {
    
    const store = useStore();
    let nameTask = ref('');
    let descTask = ref('');

    let dialogAddTask = useDialog();
    const {errors, inputNameTask} = useTask(nameTask);

    
    function addTask(): void {
      const task = {
        name: nameTask.value,
        desc: descTask.value
      };
      store.dispatch('addTask', task);
      clear();
    }

    const isOpenDialog = computed((): boolean => {
      return dialogAddTask.isOpen.value;
    })

    const isOpenPanel = computed((): boolean => {
      return !!store.getters.openProject.id;
    })

    const clear = () => {
      nameTask.value = '';
      descTask.value = '';
    }

    const isDisable = computed((): boolean => {
      return !(!errors.validName.value && nameTask.value.length);
    })

    watch(() => store.getters.openProject, () => {
      dialogAddTask.close();
    })

 
    return {
      nameTask,
      descTask,
      errors,
      isOpenDialog,
      isOpenPanel,
      isDisable,

      inputNameTask,
      dialogAddTask,
      addTask,
    }

  }
}
</script>

<style lang="scss">
@import './addTaskPanel.scss';
</style>