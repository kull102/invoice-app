<template>
    <div class="modal flex">
        <div class="modal-content">
            <p>Are you sure you want to exit? Your change will not be saved!</p>
            <div class="actions flex">
                <button @click="closeModal" class="purple">Return</button>
                <button @click="closeInvoice" class="red">Close</button>

            </div>
        </div>
    </div>
</template>


<script>
import {useStore} from "../stores/index"
export default {
    setup() {
    const myStore = useStore()

    return { myStore }
    },
  name: "modal",
  methods: {
    closeModal() {
      this.myStore.modalToggle()
    },

    closeInvoice() {
        this.myStore.modalToggle()
        this.myStore.invoiceToggle()
        if (this.myStore.editInvoice) {
            this.myStore.editToggle();
        }
    },
  },
};
</script>


<style lang="scss" scoped>
.modal {
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
