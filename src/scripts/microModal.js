import MicroModal from 'micromodal';

MicroModal.init({
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    disableScroll: true,
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
});
