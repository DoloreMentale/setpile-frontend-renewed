import type { Component } from "vue";

import { storeToRefs } from "pinia";
import { LoginModal, RegisterModal, SignUpModal } from "~/widgets";

export const useModals = () => {
  const modalsStore = useModalsStore();

  const { type, isOpen } = storeToRefs(modalsStore);
  const { setModalState } = modalsStore;

  const modals: { [key: string]: Component } = {
    login: LoginModal,
    register: RegisterModal,
    "sign-up": SignUpModal,
  };

  const selectedModal = computed(() => {
    if (!type.value) return undefined;

    return modals[type.value];
  });

  return {
    isOpen,
    selectedModal,
    setModalState,
  };
};
