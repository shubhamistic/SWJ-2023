(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    const id = urlSearchParams.get('id');

    console.log(id);
})();