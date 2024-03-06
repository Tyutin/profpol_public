export const state = () => ({
    callbackPopupIsOpen: false,
    title: 'Оставьте заявку',
    subtitle: 'Чтобы получить консультацию или сделать заказ'
})

function setDefault(state) {
  state.title = 'Оставьте заявку'
  state.subtitle = 'Чтобы получить консультацию или сделать заказ'
}

export const mutations = {
    openCallbackPopup(state) {
        state.callbackPopupIsOpen = true
    },
    closeCallbackPopup(state) {
        state.callbackPopupIsOpen = false
        setDefault(state)
    },
    closeAllPopup(state) {
        state.callbackPopupIsOpen = false
        setDefault(state)
    },
    openServicePopup(state, info) {
        state.callbackPopupIsOpen = true
        state.title = info.title
        state.subtitle = info.subtitle
    }
}
