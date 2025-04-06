# Project: StudentHUB

## Author of Logs

✨ Documented and Verified with Excellence ✨
### Author: Abdulkadir Ahmed (henceforth referred to as The Architect)

📜 Every log, update, and piece of documentation in this project has been meticulously crafted, rigorously reviewed, and proudly maintained by The Architect. These logs are more than just records—they symbolize countless hours of innovation, dedication, and refinement.

🌟 Acknowledgments:

🛠️ The Architect has devoted significant time and energy to ensure each detail is precise, clear, and impactful.

🤝 Team Collaboration: While The Architect oversees and verifies all entries, contributions from team members are always acknowledged with gratitude.

🔍 Commitment to Quality: Behind every log is a commitment to achieving the highest standards of quality and professionalism.

📌 Contributor Recognition: For collaborative efforts, the name(s) of the contributor(s) are explicitly mentioned in the relevant log entries.

📖 A Living Document: This documentation isn’t merely a summary—it’s a testament to the relentless hard work and passion poured into every phase of this project.

⚖️ Copyright and Ownership:

🚨 This documentation is the exclusive intellectual property of The Architect. Unauthorized copying, redistribution, or misrepresentation of this work as your own is both unethical and a disservice to the immense dedication that brought it to life.

🙏 Please respect the effort, the time, and the ingenuity behind this work. Every keystroke tells a story of perseverance and creativity. 🚀

## Logs (Log = Version i.e Log 1.2 = v1.2) 

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

### Log 1.4 2/8/2025

- **Calendar Frontend Update**:
  - Added significant enhancements to the **Calendar** tab:
    - Designed a new time-slot system for better schedule visualization.
    - Introduced a "+ Add Course" button at the bottom for ease of use.
    - Improved header design with day labels: **Mon**, **Tue**, **Wed**, **Thu**, and **Fri**.
    - Styled the calendar for a clean, user-friendly interface.
  - Verified functionality and design consistency across devices.
  - **Contribution Note**: This update was implemented by **Daksh Patel**, with verification and documentation by The Architect.

  - **Screenshot of Updated Calendar**:  
    ![Calendar Tab Update](https://i.imgur.com/8mX192c.png)

---

### **Log 1.5 2/12/2025**  

- **Academic Advising Feature Update**:  
  - Enhanced the **Advising** tab with a structured prompt-based interaction system.  
  - Users can now select from three advising prompts:  
    - *"What courses should I take?"*  
    - *"How do I drop a course?"*  
    - *"When is the last day to enroll?"*  
  - **Before (Blank Advising Page)**:  
    ![Blank Advising Page](https://i.imgur.com/h0BfTLI.png)  
  - **After (3 Prompts Added)**:  
    ![Advising Page with Prompts](https://i.imgur.com/aETdVKa.png)  

- **UI & UX Enhancements**:  
  - Implemented **structured layout** for advising prompts.  
  - Improved the user experience for smoother interactions.  

- **Contribution Note**:  
  - **Developed by**: Sandeepon Saha & Fardad Rashidian.  
  - **Credits**: All implementation and logic handled by them.
  - **Verification and documentation**: Handled by The Architect.

- **Verified across devices for functionality and design consistency.**  

---

### **Log 1.6 2/14/2025**  

- **Updated Login Page**:  
  - Implemented a **basic UI** for the login page.  
  - Includes fields for:  
    - **Username**  
    - **Password**  
  - **Screenshot of Login Page**:  
    ![Login Page](https://i.imgur.com/flTNih1.png)  

- **Expanded Advising Chatbot Responses**:  
  - The chatbot now recognizes additional advising-related queries:  
    - **"How do I change my major?"**  
    - **"What are different offered Engineerings?"**  
    - **"What are some courses taken for Electrical Engineering?"**  
  - **Screenshot of Updated Chatbot**:  
    ![Updated Chatbot](https://i.imgur.com/iGYG21O.png)  

- **Contribution Note**:  
  - This update was implemented by **Daksh Patel**, with verification and documentation by **The Architect**.  

---

### **Log 1.7 3/7/2025**  

- **Massive Calendar Tab Overhaul**:
  - The entire **Calendar tab** received a **major visual and functional revamp**.
  - Implemented a **scrolling UI** that **automatically lists** all courses added.
  - Enhanced **UI/UX** to ensure smooth and intuitive navigation.

  - **Calendar Page (No Courses Added)**:
    ![Calendar Page (No Courses)](https://i.imgur.com/QgkAdEt.png)

- **New "+ Add Course" Feature**:
  - A **new modal** now appears upon clicking **"+ Add Course"**.
  - Allows users to **enter course details**, including:
    - **Course Name**
    - **Day** (Mon, Tue, Wen, Thur, Fri)
    - **Time** (24-hour format)
  - **Strict validation rules** enforced:
    - Prevents **duplicate course times**.
    - Ensures **valid day and time formats**.
    - Requires a **minimum of 3 characters** for the course name.

  - **"+ Add Course" Pop-up**:
    ![+ Add Course Modal](https://i.imgur.com/5UoqzR1.png)

- **Dynamic Course Addition**:
  - Once added, **courses instantly appear** in the **scrollable list**.
  - **Courses persist**, ensuring seamless experience.
  - Verified smooth UI updates.

  - **Calendar Page (With Courses Added)**:
    ![Calendar Page (Courses Added)](https://i.imgur.com/aImbgJU.png)

- **New "+ Plot Calendar" Feature**:
  - Clicking **"📅 Plot Calendar"** generates a **dynamic calendar**.
  - Courses **auto-populate their respective time slots**.
  - Supports **scrolling up/down & left/right** to navigate all time slots.
  - **24-hour format** used for accuracy.
  - (Potential future update: Change to **7:00 - 24:00** instead of **0:00 - 24:00**)

  - **Plot Calendar Pop-up**:
    ![Plot Calendar View](https://i.imgur.com/itCcivb.png)

  - **Scrollable View Example**:
    ![Scrollable Calendar](https://i.imgur.com/8bKPXkU.png)

- **Implemented Full Jest Unit Tests** 🧪:
  - Ensured **full coverage for core functionalities**, including:
    - **Adding Courses**
    - **Duplicate Course Prevention**
    - **Invalid Input Handling**
    - **Plot Calendar Rendering**
  - This marks a **major milestone** for **project test coverage**.

- **Technical Enhancements**:
  - Implemented **state updates** to track course changes dynamically.
  - Optimized **performance** when handling **multiple courses**.
  - Verified **backend compatibility** (planned backend expansion for future iterations).

---

### Log 1.8 4/3/2025

- **New Register/Login Feature Implementation**:
  - **Login Page**:
    - Implemented a simple login page with fields for **Username** and **Password**.
    - A **Register** button is available at the bottom for navigation to the registration page.
    - **Screenshot**:  
      ![Login Page](https://i.imgur.com/zZQzXgA.png)
      
  - **Register Page**:
    - Provides four input fields: **Username**, **Password**, **Year of Study**, and **Field of Study**.
    - **Validation Rules**:
      - **Username**: Must be more than 6 characters and less than 14 characters.
      - **Password**: Must be greater than 6 characters and less than 14 characters.
      - **Year of Study**: Must be a number between 1 and 20.
      - **Field of Study**: Currently free-form, but will be refined in future updates (e.g., scrollable UI for undergraduates).
    - **Screenshots**:
      - **Unfilled Register Page**:  
        ![Register Page Unfilled](https://i.imgur.com/ySWacqH.png)
      - **Filled Register Page**:  
        ![Register Page Filled](https://i.imgur.com/qKKQPbD.png)
        
  - **User Profile Page**:
    - Upon successful registration or login, the user is taken to a profile page.
    - This page displays the user's **Username**, **Year of Study**, and **Field of Study**.
    - It includes options for **Logout** and **Delete Account**.
    - **Screenshot**:  
      ![User Profile Page](https://i.imgur.com/hxMherx.png)
      
- **Functionality Details**:
  - **Login Process**:
    - Simple authentication using the provided Username and Password.
    - On successful login, user data is stored in AsyncStorage for auto-login persistence.
  - **Registration Process**:
    - Enforces strict validations: if any field is empty, or if inputs do not meet the length or numeric criteria, appropriate error messages are shown.
    - Successful registration automatically logs the user in and displays the user profile.
  - **User Profile**:
    - Displays user details with options to **Logout** or **Delete Account**.
    - Future updates will further refine the profile interface and add more functionalities.

- **Testing and Verification**:
  - Manual tests confirmed that:
    - Users receive correct error messages when invalid data is entered.
    - Successful registration and login lead to correct display of user profile information.
    - Logout and Delete Account functionalities work as expected.

--- 

### Log 1.9 4/4/2025

- **UI/UX Major Redesign**:
  - **Login/Register Screens**:
    - **Updated Look**: Redesigned with a modern dark gradient background and refined spacing.
    - **Rounded Elements**: Inputs and buttons now have circular (rounded) edges.
    - **Icon-enhanced Inputs**: Each input field features a small icon to improve usability.
    - **Gradient Buttons**: The primary action buttons (Login and Register) now use a yellow gradient (reflecting the logo’s accent color).
    - **Sign up Button**: Replaced the text link with a transparent, outlined "Sign up" button.
    - **Screenshots**:
      - **Login Screen**: ![Login Look](https://i.imgur.com/W2nM8NQ.png)
      - **Register Screen**: ![Register Look](https://i.imgur.com/0AKllp2.png)

  - **Profile Page**:
    - **Home Removed**: The Home page is now replaced with a Profile page, which serves as the default landing page after authentication.
    - **User Information**: Displays the user’s details (username, year of study, and field of study) in a clean, modern layout.
    - **Screenshot**: ![Profile Look](https://i.imgur.com/nKL9X4m.png)

  - **Calendar Page**:
    - **Updated Design**: Features a darker, cleaner interface that aligns with the new overall aesthetic.
    - **Screenshot**: ![Calendar Look](https://i.imgur.com/nXIR4te.png)

- **Routing and Functionality**:
  - **Secure Routing**: Users must log in or register before accessing features like Calendar and Advising.
  - **Seamless Experience**: Auto-login via AsyncStorage and intuitive navigation ensure a smooth user journey.

- **Design Philosophy**:
  - **Color Scheme**: The new design is anchored by a dark background with yellow gradient accents (inspired by the logo), white text, and subtle grays.
  - **Modern Aesthetic**: Rounded inputs, transparent elements, and gradient buttons contribute to a contemporary, user-friendly interface.
  - **Consistent UI**: Uniform spacing and styling across screens create a cohesive look throughout the app.

*This update marks a significant step forward in refining the user interface and experience for StudentHUB, transitioning to a more modern and streamlined design approach.*

---

## Reproduction Steps:

### **Log 1.9  - Reproduction Steps**  

1. **Clone the Repository**:  
   - Clone the project using Git:  
     ```bash
     git clone https://github.com/AbdulkadirAhmed1/StudentHUB-Project.git
     cd mainApp
     ```

2. **Start the Project**:  
   - Run the following command to start the **Expo development server**:  
     ```bash
     npx expo start
     ```
   - Scan the **QR code** with the **Expo Go** app or open the app in the browser.

3. **Login Screen:**
   - The login screen now uses a modern design with rounded, circular input fields and icon-enhanced TextInputs.
   - The "Login" button features a yellow gradient (from gold to light goldenrod yellow) that echoes the logo’s accent.
   - A "Forgot Password?" link is displayed immediately under the password field.
   - A transparent "Sign up" button (outlined) is placed right below the Login button with reduced spacing.
   - **Reproduction:**
     - Enter valid credentials in the input fields.
     - Tap "Login" and confirm you are redirected to the Calendar/Profile screen.
     - Tap "Forgot Password?" and verify the link is responsive (even if the action isn’t implemented yet).
     - If you tap the "Sign up" button instead, it should switch the view to the Registration screen.

4. **Registration Screen:**
   - The Registration screen follows a similar design: gradient buttons, circular inputs with icons, and a clean layout.
   - Fields include Username, Password, Year of Study, and Program.
   - **Reproduction:**
     - First, try leaving fields empty to trigger validation errors.
     - Then, fill in valid details (e.g., Username: 6–10 characters, Password: 5–15 characters, Year of Study: 1–10, Program: 6–10 characters).
     - Tap "Register" (using the yellow gradient button) and ensure you are automatically logged in (redirected to Calendar/Profile).
     - Tap "Cancel" to return to the Login screen if needed.

5. **Profile/Calendar View:**
   - Upon successful login or registration, verify that the app routes to the Profile (formerly Home) page.
   - Confirm that the Profile page shows a dark, modern look consistent with the gradient background and clean typography.

6. **General UI/UX Checks:**
   - All input fields and buttons should be clearly spaced with the updated margins:
     - Increased spacing between inputs and between the "Forgot Password?", Login, and Sign up buttons.
   - The overall color scheme is unified with the dark background and yellow gradient accents (reflecting the logo’s colors).
   - Ensure that the icons, text, and gradients render correctly across devices.
  
7. **Run Jest Unit Tests** (Ensure test cases pass in components>tests):  
     ```bash
     npx expo start
     ```
---

## Next Steps:

### Log 1.1 1/31/2025

- **To Test**: 
   - Open the app on Expo Go or in a browser.
   - Confirm both tabs (Home and Calendar) load correctly.
   - Verify that the text matches the updates mentioned above.

### Log 1.2 2/3/2025

- **To Test**:
   - Open the app on Expo Go or in a browser.
   - Confirm all tabs (Home, Calendar, Advising, and Group Chat) load correctly.
   - Verify that the text matches the updates mentioned above.
   - Ensure the buttons for **Advising** and **Group Chat** work and display the correct pages.

### Log 1.3 2/3/2025

- **Styling Enhancements**:
  - Ensure consistency in styles across both mobile and web platforms.
  - Add icons for all tabs on mobile for better UX.

- **To Test**:
   - Open the app on Expo Go or in a browser.
   - Confirm all tabs (Home, Calendar, Advising, Group Chat and Login) load correctly.
   - Verify that the text matches the updates mentioned above.
   - Ensure the button for **Login** work and display the correct pages.

- **Testing**:
  - Verify navigation works seamlessly on all platforms.
  - Conduct UI tests for both web and mobile platforms.

### Log 1.3.1 2/7/2025

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

### Log 1.4 2/8/2025

- **Backend Integration**:
  - Begin setting up the backend for the calendar feature using **Node.js** and **Express.js**.
  - Host the backend on **Render** and connect it to the frontend.git

- **Database Setup**:
  - Collaboratively design and implement the **PostgreSQL/MongoDB** database schema with the team.
  - Ensure seamless integration of backend APIs with the database and frontend.

- **Testing**:
  - Verify the "Add Course" button functionality after backend integration.
  - Conduct UI and functionality tests for the updated calendar tab.
  - Ensure cross-platform compatibility and performance.

- **Future Releases**:
  - Plan for the next pre-release with backend and database functionalities integrated.
  - Finalize and optimize features for production readiness.

### Log 1.5 2/12/2025

- **To Test**:  
  - Open the app on **Expo Go** or in a web browser.  
  - Navigate to the **Advising tab** and confirm the new advising prompts appear.  
  - Select each prompt and verify that they return the expected response.  
  - Ensure that UI elements display correctly across different screen sizes and devices.  

- **Styling & UX Enhancements**:  
  - Further refine the advising layout for better readability.  
  - Improve button styling and alignment for a **seamless user experience**.  

- **Testing**:  
  - Verify navigation between prompts works **without errors**.  
  - Ensure all advising prompts function as expected.  
  - Conduct UI tests to **verify mobile and tablet responsiveness**.  

- **Database Integration**:  
  - Begin integrating **PostgreSQL/MongoDB** for managing advising data.  
  - Store student queries and responses for **better advising insights**.  
  - Enable adding courses dynamically in the **Calendar tab**.  
  - Allow students to **book advising sessions** directly from the app.  

- **Future Features**:  
  - Expand advising prompts to include **more academic-related queries**.  
  - Implement **dynamic response handling** for advising questions.  
  - Introduce **personalized advising recommendations** based on user input.  
  - Ensure seamless backend integration with frontend for **real-time course updates**.  

### Log 1.6 2/12/2025

- **User Authentication Implementation**:  
  - Begin setting up **user authentication** for login functionality.  
  - Secure login credentials using **backend authentication & database storage**.  

- **Database Expansion (PostgreSQL)**:  
  - Store **user credentials** for secure login.  
  - Expand the **chatbot database** to allow a wider range of advising responses.  

- **Testing & Enhancements**:  
  - Conduct **UI tests** for the login page.  
  - Ensure **seamless integration** of chatbot updates across all devices.  
  - Verify that new advising chatbot responses work as expected. 

### Log 1.7 3/7/2025

- **Backend API Development (Node.js & Express)**:
  - Ensure seamless **backend integration** with the **frontend UI**.

- **Optimize Calendar Layout**:
  - Adjust time range from **0:00-24:00** to **7:00-24:00**.
  - Improve spacing and readability for better usability.

- **Enhance Course Input Validations**:
  - Add **professor names & room numbers** (Optional fields currently, but UI will show them).
  - Implement **better error handling messages** for user clarity.

  ### Log 1.8 4/3/2025

- **Refine User Profile UI**:
  - Enhance clarity and usability with a redesigned layout.
  - Ensure that user details (Username, Year of Study, Field of Study) are displayed in a clear and accessible manner.

- **Implement Scrollable UI for Year Selection**:
  - Develop a scrollable picker component for selecting the Year of Study (for undergraduates).
  - Prevent invalid inputs by limiting selectable options appropriately.

- **Enhance Error Messaging and Validation**:
  - Improve error messages to provide detailed and user-friendly feedback.
  - Refine input validation logic based on user testing to ensure consistency and clarity.

- **Integrate Additional Security Improvements**:
  - Incorporate password hashing (e.g., using bcrypt) to secure login credentials.
  - Review and enhance overall security measures in the registration and login processes.

- **Collect User Feedback and Plan Updates**:
  - Gather further feedback from users regarding the new register/login feature.
  - Use this feedback to plan and implement subsequent updates and improvements. 

  ### Log 1.9 4/6/2025

- **UI/UX Refinements:**
  - Conduct cross-platform testing on iOS, Android, and web to ensure the gradient backgrounds, rounded inputs, and buttons render consistently.
  - Gather user feedback on the new dark theme and modern look to fine-tune the spacing, font sizes, and overall visual hierarchy.
  - Refine the gradient settings (colors, direction, and intensity) for both the background and the primary action buttons based on feedback.

- **Functionality Enhancements:**
  - Implement the "Forgot Password?" functionality.
  - Optimize input validation and error messaging for a smoother user experience.

- **Performance & Compatibility:**
  - Test the performance of the gradient components (using expo-linear-gradient) and ensure they do not negatively affect app responsiveness.
  - Review and update any dependencies if needed to maintain compatibility with the latest Expo SDK.

- **Future Features:**
  - Plan integration of advanced user profile features (such as editing profile information and dynamic theme settings).
  - Expand the calendar and advising functionalities with richer interactions.
  - Prepare for further backend integration to support dynamic content updates.
