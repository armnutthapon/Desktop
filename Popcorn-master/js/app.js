document.addEventListener('init', function(event) {
        var page = event.target;

        if (page.id === 'page1') {};

    }

);

document.querySelector('ons-tabbar').addEventListener('reactive', function(event) {
    if (event.index == 0) {
        document.querySelector('#myNavigator_search').popPage();
    } else if (event.index == 1) {
        document.querySelector('#myNavigator').popPage();
    } else if (event.index == 2) {
        document.querySelector('#Navigator_profile').popPage();
    }
})