## Getting the Firebase token

To test the protected routes at `api/documentation`, you will need to provide a valid authorization token.

Follow these steps to obtain it:

1. Go to MySQL workbench and select all rows from the `users` table. Choose a user to login in as. You can see each user's role in `user_roles` table. User actions depend on the role assigned (see the spreadsheet [here](https://github.com/HackYourFuture-CPH/FP-class11/blob/develop/firebase-middlewares.md)). Roles go as follows: `1`: super admin, `2`: admin, `3` regular user.
   - Tip: Save this email so you can skip the first step in later sign-ins.
2. Open the app and enter the user's email and a password (currently "123456" for all users)
3. Depending on the browser you're using:
   - **Chrome**: Before clicking "Login", open the Network tab. Once you click "Login", you should see two requests appear. Click on the one called `verifyPassword?key=...` and open its Response tab. You will see an `idToken` in the response object. Select the entire line by triple-clicking it, then copy/paste it into a text editor. You'll need to clean it up so that only the long string of random characters is left. 
   - **Firefox**: Before clicking "Login", open the Console tab. Once you click "Login" - if it was successful - you will see two POST requests appear in the console. Check their "Response" tabs. The response of one of them will contain a long string of random characters called `idToken`. Copy it and you're ready to go.

Note: this token is valid for 1 hour.
