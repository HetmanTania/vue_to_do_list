import { ref, reactive} from 'vue'
import { isHasRequiredLength } from '@/utils/valudation';
import { nameMinMaxLength } from '@/utils/enum';

export default function useTask(name: any) {
    const taskName = name;

    const errors = reactive({
        validName: {
          value: false, 
          descError: `Task name must be between ${nameMinMaxLength.minlength} and ${nameMinMaxLength.maxLength} characters`,
          validation: (value: number): boolean => {
            console.log('valid name');
            
           return isHasRequiredLength(value, nameMinMaxLength.maxLength, nameMinMaxLength.minlength)
          }
        },
    });

        
    function inputNameTask(): void {
        if(taskName.value) {
          errors.validName.value = errors.validName.validation(taskName.value.length);
        }
    }

    return {
        errors,
        inputNameTask
    }
}