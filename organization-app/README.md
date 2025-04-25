# Organization App

This is an all-in-one organization and productivity app built with React Native and Expo for Android.

## Features Implemented So Far
- Task Manager (Add, list, delete tasks)
- Project Organizer (Add, list, delete projects)

## How to Run Locally

1. Make sure you have Node.js and npm installed.
2. Navigate to the project directory:
   ```
   cd organization-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the Expo development server:
   ```
   npm start
   ```
5. To run on Android device or emulator:
   ```
   npm run android
   ```
6. To run on iOS (requires macOS):
   ```
   npm run ios
   ```
7. To run in a web browser:
   ```
   npm run web
   ```

## How to Publish to Google Play Store

1. Create a Google Play Developer account at https://play.google.com/console/signup
2. Follow the Expo guide to build a release APK or AAB:
   - Run:
     ```
     eas build --platform android
     ```
   - This requires setting up Expo Application Services (EAS).
3. Download the built APK or AAB from Expo.
4. Prepare your app listing, screenshots, and other assets in the Google Play Console.
5. Upload the APK/AAB and submit your app for review.
6. Once approved, your app will be available on the Google Play Store.

For detailed instructions, refer to the official Expo publishing guide:
https://docs.expo.dev/distribution/uploading-apps/

## Next Steps

I will continue implementing the remaining features step-by-step. Please let me know if you want me to proceed or if you have any questions.
