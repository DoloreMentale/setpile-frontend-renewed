import { defineStore } from "pinia";
import type { TModalType } from "~/shared";

export const useModalsStore = defineStore("modals-store", {
  state: () => ({
    type: undefined as TModalType,
    isOpen: false as Boolean,
  }),
  actions: {
    setModalState(type: TModalType, isOpen: Boolean) {
      this.type = type;
      this.isOpen = isOpen;
    },
  },
});
