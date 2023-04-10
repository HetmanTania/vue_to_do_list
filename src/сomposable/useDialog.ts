import { computed, ref } from 'vue'

export default function useDialog() {
    const isOpen = ref(false);

    const open = (): void => {
        isOpen.value = true;
    }

    const close = (): void => {
        isOpen.value = false;
    }

    return {
        isOpen,
        open,
        close
    }
}