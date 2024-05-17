
(function() {
    'use strict';

    // Function to replace the URL and text
    function replaceURLAndText() {
        // Get all anchor tags on the page
        var anchors = document.getElementsByTagName('a');

        // Iterate through all anchor tags
        for (var i = 0; i < anchors.length; i++) {
            // Check if the href attribute contains '/search/people/'
            if (anchors[i].href && anchors[i].href.includes('/search/people/')) {
                // Replace the href attribute with the new URL
                anchors[i].href = anchors[i].href.replace('/search/people/', '/search/latest/');

                // Replace the text content "People" with "Latest"
                if (anchors[i].textContent.trim() === 'People') {
                    anchors[i].textContent = 'Latest';
                }
            }
        }
    }

    // Function to observe changes in the document
    function observeChanges() {
        // Select the target node
        var targetNode = document.documentElement;

        // Options for the observer (all changes)
        var config = { attributes: true, childList: true, subtree: true };

        // Callback function to execute when mutations are observed
        var callback = function(mutationsList, observer) {
            // Call the function to replace URL and text
            replaceURLAndText();
        };

        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }

    // Wait for the DOM to be fully loaded before running the functions
    window.addEventListener('load', function() {
        replaceURLAndText(); // Initial replacement on page load
        observeChanges(); // Observing changes in the document
    });
})();
