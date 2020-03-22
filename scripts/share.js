if (navigator.share) {
    console.log("share is supported")
    document.querySelectorAll("[data-share-url]").forEach(($share) => {
        const $button = document.createElement('button');
        $button.innerHTML = "Partagez !";
        $share.parentNode.append($button);

        $button.addEventListener(
            'click',
            share.bind(this, $share),
        )
    })

} else {
    console.warn("share is NOT supported")
}
