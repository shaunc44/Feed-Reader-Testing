UDACITY - FRONT-END NANODEGREE - PROJECT 6 - FEED READER TESTING
=================================================================
This project entailed writing multiple tests using jasmine.js to
ascertain the functionality of various aspects of the feed reader
webpage.


TESTS OVERVIEW
=================================================================
1)	The first tests determine whether the feeds are defined and
	if they have URLs and names.
2)	The next set of tests examine whether the menu changes
	visiblity when clicked.
3)	Lastly, I test that the container has at least one feed and
	also confirms that new feeds are loaded.


TEST INSTRUCTIONS
=================================================================
RSS FEEDS:
	Test 1:	Comment out the 'allFeeds' array in app.js. This will
			cause the test to fail while prompting the error 
			message "Expected 0 not to be 0".
	Test 2:	Empty one of the URLs in the 'allFeeds' array in
			app.js. The test will fail with an error message of
			"Expected 0 not to be 0".
	Test 3:	Empty one of the names in the 'allFeeds' array in
			app.js. The test will fail with an error message of
			"Expected 0 not to be 0".
THE MENU:
	Test 4:	In the index.html file delete the menu-hidden class.
			In the webpage, the menu will not be hidden by
			default and you will see an error message of
			"Expected false to be true".
	Test 5:	In the index.html file delete the menu-icon-link
			class. In the webpage, the menu will not toggle
			open or close and you will see an error message of
			"Expected true to be false".
INITIAL ENTRIES: 
	Test 6:	Empty one of the names in the 'allFeeds' array in
			app.js. The test will fail with an error message of
			"Expected 0 not to be 0".
NEW FEED SELECTION:
	Test 7:	Empty one of the names in the 'allFeeds' array in
			app.js. The test will fail with an error message of
			"Expected 0 not to be 0".


INSTALLATION
=================================================================
Open index.html in your web browser, such as FireFox or Chrome, 
or you can visit shaunc44.github.io/Feed-Reader-Testing/ to check 
out the live website. Cheers!


SUPPORT
=================================================================
If you're having issues loading the website please email Shaun
at shauncox44@gmail.com
