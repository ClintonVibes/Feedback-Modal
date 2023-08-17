document.addEventListener("DOMContentLoaded", function () {

        const subscribeButton = document.getElementById("subscribeButton");

        const feedbackModal = document.getElementById("feedbackModal");
        const closeModalButton = document.getElementById("closeModal");

        function showFeedbackModal() {
                feedbackModal.style.display = "flex";
        }

        function closeFeedbackModal() {
                feedbackModal.style.display = "none";
        }

        subscribeButton.addEventListener("click", function () {
                showFeedbackModal();
        });

        closeModalButton.addEventListener("click", closeFeedbackModal);

});



