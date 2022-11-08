import { ref } from "#imports";
import { nanoid } from "nanoid";

export interface Toast {
  id: string;
  icon: string;
  title: string;
  body: string;
  destroy: () => void;
}

const toasts = ref<Toast[]>([]);

const useToast = () => {
  const removeToast = (id: string) => {
    const removeIndex = toasts.value.findIndex((toast) => toast.id === id);
    toasts.value.splice(removeIndex, 1);
  };

  const showToast = ({
    ms,
    icon,
    title,
    body,
  }: Omit<Toast, "id" | "destroy"> & { ms?: number }) => {
    const id = nanoid();
    const destroy = () => removeToast(id);
    const toast: Toast = { id, icon, title, body, destroy };
    toasts.value.push(toast);
    ms && setTimeout(destroy, ms);
    return toast;
  };

  return {
    showToast,
    toasts,
  };
};

export default useToast;
