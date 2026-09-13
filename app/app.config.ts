export default defineAppConfig({
  ui: {
    colors: {
      primary: 'crust',
      neutral: 'stone',
      success: 'green',
    },
    tabs: {
      slots: {
        list: 'overflow-x-auto flex-nowrap justify-start sm:justify-center w-full',
        trigger: 'w-max flex-shrink-0 whitespace-nowrap min-w-max'
      }
    }
  },
})