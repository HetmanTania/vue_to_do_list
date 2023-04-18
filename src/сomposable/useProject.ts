import { ref, reactive} from 'vue'
import { isHasRequiredLength } from '@/utils/valudation';
import { nameMinMaxLength } from '@/utils/enum';
import { IProject } from '@/types/interface';

export default function useProject(propsProject: IProject) {
    const project = propsProject;
    const errors = reactive({
        validName: {
          value: false, 
          descError: `Project name must be between ${nameMinMaxLength.minlength} and ${nameMinMaxLength.maxLength} characters`,
          validation: (value: number): boolean => {
           return isHasRequiredLength(value, nameMinMaxLength.maxLength, nameMinMaxLength.minlength);
          }
        }
    });
    
    function inputNameProject(): void {
        if(project.name) {
          errors.validName.value = errors.validName.validation(project.name.length);
        }
    }

    return {
        
        errors,
        inputNameProject
    }
}