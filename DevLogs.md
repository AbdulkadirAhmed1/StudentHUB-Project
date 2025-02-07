# Project: StudentHUB

## Author of Logs

✨ Documented and Verified with Excellence ✨
### Author: Abdulkadir Ahmed (henceforth referred to as The Architect)

📜 Every log, update, and piece of documentation in this project has been meticulously crafted, rigorously reviewed, and proudly maintained by The Architect. These logs are more than just records—they symbolize countless hours of innovation, dedication, and refinement.

🌟 Acknowledgments:

🛠️ The Architect has devoted significant time and energy to ensure each detail is precise, clear, and impactful.
🔍 Behind every log is a commitment to achieving the highest standards of quality and professionalism.
💡 This documentation isn’t merely a summary—it’s a testament to the relentless hard work and passion poured into every phase of this project.
⚖️ Copyright and Ownership:

🚨 This documentation is the exclusive intellectual property of The Architect. Unauthorized copying, redistribution, or misrepresentation of this work as your own is both unethical and a disservice to the immense dedication that brought it to life.

🙏 Please respect the effort, the time, and the ingenuity behind this work. Every keystroke tells a story of perseverance and creativity. 🚀

## Logs 

### Log 1.1 1/31/2025

- **Home Page**:
  - Created the Home page with the text:  
    "Welcome to STUDENT-HUB App!"
  - **Screenshot**:  
    ![Home Page](https://i.imgur.com/buYiSAt.jpeg)

- **Calendar Page**:
  - Added a page called **Calendar** with the text:  
    "Welcome to the Calendar!"
  - **Screenshot**:  
    ![Calendar Page](https://i.imgur.com/rvEU32U.jpeg)

- **App Navigation**:
  - Used **Expo Router** to handle navigation between pages.
  - Added **tabs** for Home and Calendar.
  - Clicking the **Home** tab displays the "Welcome to STUDENT-HUB App!" page.
  - Clicking the **Calendar** tab displays the "Welcome to the Calendar!" page.

---

### Log 1.2 2/3/2025

- **New Pages and Buttons**:
  - Added two new pages and buttons for **Advising** and **Group Chat**.
    - **Advising Page** (`advising.tsx`): Displays the text: "Welcome to the Academic Advising!"
    - **Group Chat Page** (`groupchat.tsx`): Displays the text: "Welcome to the Student Group Chat!"
    
  - **Screenshot** of **Group Chat Page**:  
    ![Group Chat Page](https://i.imgur.com/aIFErUD.jpeg)

  - **Screenshot** of **Advising Page**:  
    ![Advising Page](https://i.imgur.com/qOgUtI5.jpeg)
  
  - **App Navigation**:
    - Added new buttons for **Advising** and **Group Chat** tabs in the app.
    - Clicking **Advising** tab displays the "Welcome to the Academic Advising!" page.
    - Clicking **Group Chat** tab displays the "Welcome to the Student Group Chat!" page.

---

### Log 1.3 2/5/2025

- **Website Navigation Bar**:
  - Designed and implemented a custom **Navigation Bar** for the website (web platform only).
  - Added a **logo** to the left of the navigation bar.
  - Styled **tabs** for Home, Calendar, Advising, Group Chat, and Login on the right side.
  - Verified proper navigation using `expo-router` with `Link`.

  - **Website Screenshot**:  
    ![Website Navigation Bar](https://i.imgur.com/Q7FEQmU.png)

- **Mobile Navigation Bar**:
  - Kept the navigation tabs at the bottom for mobile apps.
  - Verified the tab functionality for Home, Calendar, Advising, Group Chat, and Login.
  - Verified icons display correctly in the tab navigation.

  - **Mobile App Screenshot**:  
    ![Mobile Navigation Bar](https://i.imgur.com/uO2fC85.jpeg)

- **New Page Added**:
  - Added the **Login Page** (`signup.tsx`): Displays the text: "Redirecting..."
  - Integrated the Login tab into both the website and mobile app.

- **APK Addition**:
  - Added an `.apk` file for v1.3 to the project directory.  
  - **Note**: The APK is compatible with **Android devices only** and downloading it on other platforms will not launch the app.
  
---

### Log 1.3.1 2/7/2025

- **Mobile Navigation Enhancements**:
  - Added **icons** for the following tabs in the mobile app (Android):
    - **Calendar**
    - **Advising**
    - **Group Chat**
    - **Login**
  - Ensured icons render properly on Android devices.  
    - **Screenshot**:  
      ![Updated Mobile Navigation](https://i.imgur.com/l8cXLsn.png)

---

## Reproduction Steps:

### Log 1.3.1 2/7/2025

1. **Clone the Repository**:
   - Clone the project using Git:  
     ```bash
     git clone https://github.com/AbdulkadirAhmed1/StudentHUB-Project.git
     cd mainApp
     ```

2. **Start the Project**:
   - Run the following command to start the Expo development server:
     ```bash
     npx expo start
     ```
   - Scan the QR code with the **Expo Go** app on your mobile device or open the app in the browser.

3. **Changes Made**:
   - **Home Page** (`index.tsx`):  
     - Text: "Welcome to STUDENT-HUB App!"
   - **Calendar Page** (`calendar.tsx`):  
     - Text: "Welcome to the Calendar!"
   - **Advising Page** (`advising.tsx`):  
     - Text: "Welcome to the Academic Advising!"
   - **Group Chat Page** (`groupchat.tsx`):  
     - Text: "Welcome to the Student Group Chat!"
   - **Login Page** (`signup.tsx`):  
     - Text: "Redirecting..."

4. **Tab Setup**:
   - Created tabs using **expo-router**: Home, Calendar, Advising, Group Chat, and Login.
     - **Home** tab shows "Welcome to STUDENT-HUB App!"
     - **Calendar** tab shows "Welcome to the Calendar!"
     - **Advising** tab shows "Welcome to the Academic Advising!"
     - **Group Chat** tab shows "Welcome to the Student Group Chat!"
     - **Login** tab shows "Redirecting..."

5. **Navigation Bar**:
   - Custom **NavigationBar.tsx** added for the web platform.
   - Tabs are functional and route to their respective pages.

--

## Next Steps:

- **Styling Enhancements**:
  - Ensure consistency in styles across both mobile and web platforms.
  - Improve the visual design of the navigation bar for a cleaner and more professional look.
  - Verify that icons and text are correctly aligned across devices.

- **Testing**:
  - Verify navigation works seamlessly on all platforms.
  - Conduct UI tests for both web and mobile platforms.
  - Ensure that tab icons render correctly across different devices.

- **APK Distribution**:
  - Test the `.apk` on various Android devices to confirm stability.
  - Optimize the APK size for better performance.
  - Plan for future deployments and app store submission.
