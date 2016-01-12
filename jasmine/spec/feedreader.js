/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? The test fails.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed in the
         * allFeeds object and ensures it has a URL defined and
         * that the URL is not empty.
         */
        it('have defined URLs that are not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* This is a test that loops through each feed in the allFeeds
         * object and ensures that name is defined and not empty.
         */
        it('have defined names that are not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // This is a test suite named "The menu"
    describe('The menu', function() {

        // Access DOM to create variable for the menu-hidden class
        var hiddenMenu = $('body').hasClass('menu-hidden');

        // This test ensures the menu element is hidden by default.
        // Analyze the HTML and CSS to determine how we're performing
        // the hiding/showing of the menu element.
        it('is hidden by default', function() {
            expect(hiddenMenu).toBe(true);
        });

        // This test ensures the menu changes visibility when the menu
        // icon is clicked while testing two expectations: does the
        // menu display when clicked and does it hide when clicked again.
        it('changes visibility when the menu icon is clicked', function() {
            // Show menu
            $('menu-icon-link').click();
            expect(hiddenMenu).toEqual(false);
            // Hide menu
            $('menu-icon-link').click();
            expect(hiddenMenu).toEqual(true);
        });

/*
        it('changes visibility when clicked', function(){
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            var menuHidden1 = $('body').hasClass('menu-hidden');
            expect(menuHidden1).toBe(false);
            menuIcon.click();
            var menuHidden2 = $('body').hasClass('menu-hidden');
            expect(menuHidden2).toBe(true);
            expect(menuHidden1).not.toEqual(menuHidden2);
        });
*/

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
