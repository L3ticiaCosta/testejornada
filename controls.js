export default {
    junp: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}