import { nameMinMaxLength, descMinMaxLength } from './enum';

type TFunctionParams = number | string;
type TValidationFunc = (value: TFunctionParams) => boolean;

interface IValidation {
    descError: string,
    validation: TValidationFunc
}

const validationNameСorrectLength: IValidation = {
    descError: `Task name must be between ${nameMinMaxLength.minlength} and  ${nameMinMaxLength.maxLength} characters`,
    validation: function (value: TFunctionParams): boolean {
        return isHasRequiredLength(value, nameMinMaxLength.maxLength,  nameMinMaxLength.minlength);
    }
}

const validationDescСorrectLength: IValidation = {
    descError: `Task description must contain up to ${descMinMaxLength.maxLength} characters`,
    validation: function (value: TFunctionParams): boolean {
        return isHasRequiredLength(value, nameMinMaxLength.maxLength);
    }
}


function isHasRequiredLength(value: TFunctionParams, maxLength: number, minlength?: number): boolean {
    if(minlength && value < minlength) {
        return true;
    }
    if(value > maxLength) {
        return true;
    }
    return false;
}

export {
    isHasRequiredLength,
}