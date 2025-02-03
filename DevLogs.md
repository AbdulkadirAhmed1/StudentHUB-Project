# Project: StudentHUB

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

## Reproduction Steps:

### Log 1.2 2/3/2025

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

4. **Tab Setup**:
   - Created tabs using **expo-router**: Home, Calendar, Advising, and Group Chat.
     - **Home** tab shows "Welcome to STUDENT-HUB App!"
     - **Calendar** tab shows "Welcome to the Calendar!"
     - **Advising** tab shows "Welcome to the Academic Advising!"
     - **Group Chat** tab shows "Welcome to the Student Group Chat!"

---

## Next Steps:

### Log 1.2 2/3/2025

- **To Test**:
   - Open the app on Expo Go or in a browser.
   - Confirm all tabs (Home, Calendar, Advising, and Group Chat) load correctly.
   - Verify that the text matches the updates mentioned above.
   - Ensure the buttons for **Advising** and **Group Chat** work and display the correct pages.
