import { ref, reactive} from 'vue'
import { isHasRequiredLength } from '@/utils/valudation';
import { nameMinMaxLength } from '@/utils/enum';

export default function useProject(name: string) {
    const projectName = ref(name);

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
        if(projectName.value) {
          errors.validName.value = errors.validName.validation(projectName.value.length);
        }
    }

    return {
        projectName,
        errors,
        inputNameProject
    }
}