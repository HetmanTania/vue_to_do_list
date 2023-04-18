<template>
  <div class="dialog">
    <div class="dialog-bg" @click="close"></div>
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{submitKey}} project</h2>
      </div>
      <form class="project-form" v-on:submit.prevent="submit">
        <div class="project_input">
          <label for="name">Name</label>
          <input :disabled="isDisableInput" v-model="project.name" @input="inputNameProject" type="text" name="" id="name"/>
          <span class="invalid-input" v-show="errors.validName.value">{{errors.validName.descError}}</span>
        </div>
        <div class="dialog_btn">
          <button :disabled="isDisableSubmit" class="btn project-btn" type="submit">{{ submitKey }}</button>
          <button class="btn" @click="close">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType, reactive, computed } from "vue";
import { IProject, IActionsMap } from "@/types/interface";
import useProject from '@/сomposable/useProject';

const submitMap: IActionsMap = {
  add: "Add",
  delete: "Delete",
  edit: "Edit",
};

export default defineComponent({
  props: {
      propsProject:  {
        type: Object as PropType<IProject>,
        required: true
      },
      action:{
        type: String,
        required: true
      }
  },
  setup(props, context) {
      const project = reactive({...props.propsProject});
      const {errors, inputNameProject} = useProject(project);

      const close = (): void => {
        context.emit("close");
      };

      const submit = (): void => {
        if(submitKey.value.length) {
          context.emit('doAction', project, `${submitKey.value.toLowerCase()}`);
          close();
        }
      }

      const submitKey = computed((): string => {
        if(props.action) {
          return submitMap[props.action as keyof IActionsMap];
        }
        return '';
      });

      const isDisableSubmit = computed((): boolean => {
        return !(!errors.validName.value && project.name.length)
      })

      const isDisableInput = computed((): boolean => {
        return props.action === 'delete'
      })

      return {
        project,
        errors,
        submitKey,

        submit,
        close,
        inputNameProject,
        isDisableSubmit,
        isDisableInput,
      }
  },
});
</script>


<style lang="scss">
@import './dialogActionProject.scss';
</style>