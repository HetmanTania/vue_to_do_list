<template>
    <div v-if="isHasProject" class="container-max">
        <div class="project-content">
            <h2 class="project-name">{{ openProject.name }}</h2>
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

        const openProject = computed(() => {  
            return store.getters.openProject;
        });

        const isHasProject = computed((): boolean => { 
            if(store.getters.openProject) {
                return !!store.getters.openProject;
            }
            return false;
        });

        return {
            openProject,
            isHasProject,
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