# Manual Test Cases

## Test Case 1: End-to-End Purchase Flow

**Objective:** Verify that a user can successfully log in, add a product to the cart, proceed to checkout, and complete an order.

**Preconditions:**
- User has valid login credentials (email: ykaudki777@gmail.com, password: Yogesh@123)
- The website https://rahulshettyacademy.com/client is accessible
- Product "Automation 8" is available in the product catalog

**Test Steps:**
1. Open a web browser and navigate to https://rahulshettyacademy.com/client/#/auth/login
2. Verify that the page title is displayed (should be "Let's Shop")
3. Enter "ykaudki777@gmail.com" in the email input field
4. Enter "Yogesh@123" in the password input field
5. Click the "Login" button
6. Wait for the dashboard to load and verify that product cards are displayed
7. Locate the product titled "Automation 8" in the product list
8. Click the "Add To Cart" button for "Automation 8"
9. Click on the cart icon or navigate to the cart page (routerlink='/dashboard/cart')
10. Verify that "Automation 8" is visible in the cart
11. Click the "Checkout" button
12. In the country selection field, type "ind" to filter options
13. Wait for the dropdown to appear with country options
14. Select "india" from the dropdown list
15. Verify that the email field shows "ykaudki777@gmail.com"
16. Click the "Place Order" button (btnn action__submit)
17. Verify that the success message "Thankyou for the order." is displayed
18. Note the Order ID displayed on the page
19. Click on "My Orders" or navigate to orders page (button[routerlink="/dashboard/myorders"])
20. In the orders table, locate the row with the matching Order ID
21. Click the "View Details" button for that order
22. Verify that the order details page shows the correct Order ID

**Expected Results:**
- Login is successful and dashboard loads
- Product is added to cart successfully
- Cart shows the selected product
- Checkout process completes without errors
- Country selection works correctly
- Order is placed and thank you message appears
- Order appears in the orders list with correct details

**Post-conditions:**
- User is logged out or session ends

## Test Case 2: Login and Product Display

**Objective:** Verify login functionality and that products are displayed correctly.

**Preconditions:**
- Valid login credentials
- Website accessible

**Test Steps:**
1. Navigate to login page
2. Enter valid email and password
3. Click login
4. Verify dashboard loads
5. Check that product titles are displayed in the card bodies

**Expected Results:**
- Successful login
- Product list visible

## Test Case 3: Header Navigation (BrightChamps Site)

**Objective:** Verify header elements are visible and clickable on desktop and mobile.

**Preconditions:**
- Access to https://learn-staging.brightchamps.com/book-trial-class?courseId=1&fmt=51
- Test on both desktop and mobile viewports

**Test Steps (Desktop):**
1. Navigate to the URL
2. Verify "Curriculum" link is visible
3. Verify "Community" link is visible
4. Verify "Educators" link is visible
5. Verify "FAQs" link is visible
6. Verify "Book Now" button is visible
7. Click "Curriculum" and verify page changes
8. Click "Community" and verify "BrightCHAMPS Parents Speak Up" heading appears
9. Click "Educators" and verify "Meet the team of global" heading appears
10. Click "FAQs" and verify "Explore more of BrightCHAMPS" heading appears
11. Click "Book Now" and verify page changes

**Test Steps (Mobile):**
1. Navigate to the URL with mobile viewport
2. Verify top company logo is visible
3. Click the logo
4. Verify navigation works

**Additional Verifications:**
- Verify various text elements like "Code Fun, Code Future", "Coding for Kids", etc. are visible
- Verify Trustpilot text is visible

**Expected Results:**
- All header elements visible and functional
- Clicking links navigates to correct sections/pages

## Test Case 4: Complete Purchase Flow (Based on ClientAppP1.spec.js)

**Objective:** Verify the end-to-end purchase process from login to order verification, mirroring the automated test in ClientAppP1.spec.js.

**Preconditions:**
- User has valid login credentials (email: ykaudki777@gmail.com, password: Yogesh@123)
- The website https://rahulshettyacademy.com/client is accessible
- Product "Automation 8" is available in the product catalog
- Browser is set to allow pop-ups and cookies if necessary

**Test Steps:**
1. Open a web browser (preferably Chrome or Edge for consistency with automated tests)
2. Navigate to https://rahulshettyacademy.com/client/#/auth/login
3. Verify the page title contains "Let's Shop" or similar
4. Locate the email input field (id: userEmail)
5. Enter "ykaudki777@gmail.com" in the email field
6. Locate the password input field (id: userPassword)
7. Enter "Yogesh@123" in the password field
8. Locate and click the login button (id: login)
9. Wait for the page to load completely (dashboard should appear)
10. Verify that product cards are displayed on the page
11. Look for product cards and identify the titles (should be in bold text within .card-body)
12. Scan the product list to find "Automation 8"
13. Once found, click the "Add To Cart" button associated with "Automation 8"
14. Click on the cart icon or the cart link (routerlink='/dashboard/cart') to navigate to cart
15. Wait for the cart page to load
16. Verify that "Automation 8" appears in the cart items list
17. Click the "Checkout" button
18. On the checkout page, locate the country selection field (placeholder: "Select Country")
19. Type "ind" into the country field to filter options
20. Wait for the dropdown list to appear (.ta-results.list-group.ng-star-inserted)
21. Scan the dropdown options for "india"
22. Click on "india" from the dropdown
23. Verify that the email field on the checkout page shows "ykaudki777@gmail.com"
24. Click the "Place Order" button (.btnn.action__submit.ng-star-inserted)
25. Verify that a success message appears: "Thankyou for the order."
26. Note down the Order ID displayed on the page (should be in a label with class 'ng-star-inserted')
27. Click on the "My Orders" button or link (button[routerlink="/dashboard/myorders"])
28. Wait for the orders page to load
29. Look at the orders table (tbody)
30. Scan through the table rows to find the row containing the noted Order ID
31. In that row, click the first button (likely "View Details")
32. On the order details page, verify that the Order ID matches the one from step 26

**Expected Results:**
- Login succeeds and redirects to dashboard
- Product "Automation 8" is found and added to cart successfully
- Cart page shows the product correctly
- Checkout process allows country selection
- Order placement succeeds with thank you message
- Order ID is generated and displayed
- Order appears in the My Orders list
- Order details page shows correct information

**Test Data:**
- Email: ykaudki777@gmail.com
- Password: Yogesh@123
- Product: Automation 8
- Country: india

**Post-conditions:**
- Log out from the application if possible
- Clear browser cache/cookies if needed for subsequent tests

**Notes:**
- This test case mirrors the automated test in ClientAppP1.spec.js
- If any step fails, note the exact error message and page state
- Test on different browsers if possible (Chrome, Edge, Firefox)
- Test on different screen sizes (desktop, mobile)

## Test Case 4: Landing Page Interactions (BrightChamps)

**Objective:** Test interactive elements on the landing page.

**Preconditions:**
- Access to https://learn-staging.brightchamps.com/book-trial-class?courseId=1

**Test Steps:**
1. Navigate to the URL
2. Click "Coding for Kids" text
3. Click the star image
4. Click the copa image
5. Click the harvard image
6. Click "View Curriculum" button
7. Click "X" to close modal
8. Click "Schedule a Free Class" button
9. Click "Financial Literacy" image
10. Verify "Book Now & Get Certified" heading is visible
11. Verify submit button contains "Book a Free Trial Class"

**Expected Results:**
- All clicks work without errors
- Correct headings and buttons appear