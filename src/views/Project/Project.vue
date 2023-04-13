<template>
    <div class="container-max">
        <div class="project-content">
            <h2 class="project-name">{{ currentOpenProject.name }}</h2>
            <project-tasks></project-tasks>
            <add-task-panel></add-task-panel>
        </div>
    </div>
    
</template>

<script lang="ts">
import ProjectTasks from '@/components/ProjectTasks/ProjectTasks.vue';
import AddTaskPanel from '@/components/AddTaskPanel/AddTaskPanel.vue';
import { defineComponent, computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    setup() {
        const store = useStore();

        const currentOpenProject = computed(() => {  
            return store.getters.currentOpenProject;
        });

        return {
            currentOpenProject,
        }
    },
    components: {
        ProjectTasks, 
        AddTaskPanel,
    }
})
</script>

<style
ProjectTasks lang="scss">
@import '@/style/color.scss';
@import './project.scss';
</style>