import {  defineStore } from 'pinia'
import db from '../firebase/firebaseInit.js'
export  const useStore = defineStore('store', {
  state: () => {
      return {
          invoiceData:[],
          invoiceModal: null,
          modalActive:null,
          invoicesLoaded:null,
          currentInvoiceArray:null,
          editInvoice:null
      }
  },
  actions: {
    invoiceToggle() {
      this.invoiceModal = !this.invoiceModal
    },
    modalToggle() {
      this.modalActive = !this.modalActive
    },
    setCurrentInvoice(id){
      this.currentInvoiceArray = this.invoiceData.filter(invoice => 
         invoice.invoiceId === id
      )
    },
    editToggle(){
      this.editInvoice =!this.editInvoice
    },
    deleteInvoice(id){
      this.invoiceData = this.invoiceData.filter(invoice => {
        return invoice.docId !== id
      })
    },
    updateStatusToPaid(id){
      this.invoiceData.forEach(invoice =>{
        if(invoice.docId === id){
          invoice.invoicePaid=true
          invoice.invoicePending=false
        }
      })
    },
    updateStatusToPending(id){
      this.invoiceData.forEach(invoice =>{
        if(invoice.docId === id){
          invoice.invoicePaid=false
          invoice.invoicePending=true
          invoice.invoiceDraft=false
        }
      })
    },
    async getInvoices() {
      const getData = db.collection("invoices");
      const results = await getData.get();
      results.forEach((doc) => {
        if (!this.invoiceData.some((invoice) => invoice.docId === doc.id)) {
          const data = {
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
            billerStreetAddress: doc.data().billerStreetAddress,
            billerCity: doc.data().billerCity,
            billerZipCode: doc.data().billerZipCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientName,
            clientEmail: doc.data().clientEmail,
            clientStreetAddress: doc.data().clientStreetAddress,
            clientCity: doc.data().clientCity,
            clientZipCode: doc.data().clientZipCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDateUnix,
            invoiceDate: doc.data().invoiceDate,
            paymentTerms: doc.data().paymentTerms,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            paymentDueDate: doc.data().paymentDueDate,
            productDescription: doc.data().productDescription,
            invoiceItemList: doc.data().invoiceItemList,
            invoiceTotal: doc.data().invoiceTotal,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoicePaid: doc.data().invoicePaid,
          };
          this.invoiceData.push(data)
        }
      });
      this.invoicesLoaded = true;
    },
    async updateInvoice({docId,routeId}){
      this.deleteInvoice(docId)
      await this.getInvoices()
      this.invoiceToggle()
      this.editToggle()
      this.setCurrentInvoice(routeId)
    },
    async deleteInvoicee(docId){
      const getInvoice = db.collection('invoices').doc(docId)
      await getInvoice.delete()
      this.deleteInvoice(docId)
    },
    async updatePaidDB(docId){
      const getInvoice = db.collection('invoices').doc(docId)
      await getInvoice.update({
        invoicePaid:true,
        invoicePending:false
      })
      this.updateStatusToPaid(docId)
    },
    async updatePendingDB(docId){
      const getInvoice = db.collection('invoices').doc(docId)
      await getInvoice.update({
        invoicePaid:false,
        invoicePending:true,
        invoiceDraft:false

      })
      this.updateStatusToPending(docId)
    }
  }
})

