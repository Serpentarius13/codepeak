
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("vue-date-picker", VueDatePicker);
});
