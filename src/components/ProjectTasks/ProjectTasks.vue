<template>
    <ul class="project-tasks">
      <li v-for="task in tasks" :key="task.id" class="project-tasks_task">
        <input type="checkbox" name="" id="">
            <div class="checkbox">
                <img class="svg" src="@/icons/check.svg" alt="">
            </div>
        <label class="task-name">{{task.name}}</label>
      </li> 
    </ul> 
    <div></div>
</template>

<script lang="ts">
import { ITask } from "@/types/interface";
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";


export default defineComponent({
  setup() {
    const store = useStore();

    console.log('ff');
    
    onMounted(() => {
      store.dispatch('setOpenProjectFirst');
      console.log(store.getters.openProject.tasks);
      
    })

    const tasks = computed((): ITask[] | [] => {  
      return store.getters.openProject.tasks;
    });

    const isHasTasks = computed((): boolean => { 
      console.log('isHasTasks computed', store.getters.openProject.task);
      
      if(store.getters.openProject?.task) {
        console.log('isHasTasks', store.getters.openProject.tasks);
        
        return !!store.getters.openProject.tasks.length;
      }
      return false;
    });

    return {
      tasks,
      isHasTasks,
    }
  },

});
</script>

<style lang="scss">
@import './projectTasks.scss';
</style>