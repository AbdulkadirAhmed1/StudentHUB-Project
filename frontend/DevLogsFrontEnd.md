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

### Log 1.9 4/6/2025

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

### Log 1.10 – 4/28/2025

- **Calendar Page Revamp**  
  - **New Header Layout**: “March 2024” (or current month/year) centered, with circular “<” and “>” navigation buttons.  
  - **Month Grid**: Days now arranged Monday–Sunday with clean spacing and subtle dividers.  
  - **Bottom Card**: Immediately under the calendar grid, a rounded-corner card shows the selected date (or “Select a date” placeholder).  
  - **Screenshot**:  
    ![Calendar Look](https://i.imgur.com/HgCeium.png)

- **“+Add Course” Modal**  
  - **Slide-up Overlay**: Tapping “+Add Course” opens a full-screen transparent overlay with a centered card.  
  - **Department Picker**: Top drop-down lets you choose from fetched department names.  
  - **Search Bar**: Live-filter text input—only shows courses whose code contains your query.  
  - **Course List**: Scrollable list of “DEPT1234 – Course Description…” entries; empty-state placeholder when no match.  
  - **Close Button**: Dismisses the modal.  
  - **Screenshot**:  
    ![Add Course Modal](https://i.imgur.com/oVBWWxC.png)

- **Registration Form Enhancements**  
  - **Undergraduate Only Picker**: Replaced free-text “Year of Study” with a picker limited to 1–4 (with note “Undergraduate only”).  
  - **Department Picker**: Fetches “EECS” (and future departments) from backend, replacing free-text.  
  - **Major Field**: Temporary text input defaulting to “N/A” (placeholder until majors list is populated).  
  - **Validation**: Enforces non-empty, correct numeric range for year and pre-selected department.  
  - **Screenshot**:  
    ![Registration Look](https://i.imgur.com/K8WkOmP.png)

- **Data-driven Dropdowns**  
  - **Fetch on Mount**: `/api/departments` populates the department picker.  
  - **Dynamic Course List**: `/api/departments/:dept/courses` updates course list when department changes.  

- **Design Notes**  
  - **Dark Theme**: Consistent `#181818` background, `#1E1E1E` cards, white text, subtle grays.  
  - **Rounded Corners**: Inputs, cards, modals all use 8–20 px radii for a modern, friendly feel.  
  - **Minimal Animations**: Slide-up modal and smooth picker transitions for polished UX.  

*This release lays the groundwork for the Advising and Group Chat features by introducing data-driven pickers, modal-based workflows, and a unified dark-mode UI.*  

---

### Log 1.11 – 5/15/2025

- **Empty Calendar State**  
  - When the screen first loads, no date is highlighted and the bottom card shows a large “Select a date” placeholder in gray italic text.  
  - The “+ Add Course” button is visible but adding is disabled until a date is chosen.  
  - This ensures users understand they must pick a date before scheduling classes.  
  - ![No Date Selected](https://i.imgur.com/vGvf4FV.png)

- **Empty Date State**  
  - Tapping any calendar cell updates the card header to the chosen date (e.g. “8 March 2024”).  
  - If that date has no courses, the card shows a centered “No courses scheduled” message in the same gray italic style.  
  - The “+ Add Course” button remains active, guiding the next action.  
  - ![Date Selected, No Courses](https://i.imgur.com/l8oi9im.png)

- **Add Course Interaction**  
  - Pressing “+ Add Course” slides up a translucent modal overlay.  
  - The top row includes a department picker (fetched from `/api/departments`) and a live‐filter search bar.  
  - Typing into the search field filters the course list in real time, matching course codes (case-insensitive).  
  - Selecting a course closes the modal and schedules it on the current date.  
  - ![Add Course Button View](https://i.imgur.com/XdaCwQc.png)

- **Single Course Scheduled**  
  - After scheduling one course (e.g. EECS1010 at 9:00 AM), the bottom card displays a single rounded badge.  
  - Badge styling: dark gray background (`#2C2C2C`), white text, borderRadius 12px, padding 6px vertical.  
  - The card remains scrollable but does not scroll for a single item.  
  - ![One Course Added](https://i.imgur.com/MTE3iwV.png)

- **Multiple Courses Scheduled**  
  - Scheduling additional courses (e.g. EECS1045 at 10:30 AM, EECS1720 at 2:30 PM) adds more badges in chronological order by time.  
  - The card’s ScrollView becomes active, allowing vertical scrolling when badges exceed available space.  
  - Each badge now includes three lines:  
    1. **Course:** `<code>`  
    2. **Time:** `<formatted time>` (e.g. 2:30 PM)  
    3. **Prof:** `<name or N/A>`  
    4. A **View Pre-Reqs** button opens the prerequisites modal.  
  - ![Three Courses Added](https://i.imgur.com/jhCvpHR.png)

- **Dot Indicator on Calendar**  
  - Dates with at least one scheduled course display a small blue dot under the day number (`#00A3FF`, 6×6px circle).  
  - This gives a quick visual cue for which days have events.  
  - ![Dot Indicator](https://i.imgur.com/HgCeium.png)

- **Prerequisite Modal**  
  - Tapping **View Pre-Reqs** opens a separate modal showing nested OR/AND chains as bullet lists.  
  - Example rendering for EECS2030:  
    - • EECS1021 OR EECS1020 OR EECS1022 OR EECS1720  
    - AND • EECS1045  
  - This helps students verify eligibility before enrolling.  
  - ![Pre-Req Button](https://i.imgur.com/6D4ePuT.png)

- **Design & Layout Notes**  
  - **Bottom Card** uses a `flex-start` layout with a header row (`date` centered, button right-aligned via `marginLeft: 'auto'`).  
  - Card height grows to fit content up to 50% of screen height, then scrolls.  
  - Badges are centered (`alignItems: 'center'`), fixed at 90% of card width, and stacked with vertical margin.  
  - Calendar grid removed selection when navigating months to avoid carrying over the same day into new month.  
  - Consistent dark theme (`#181818` background, `#1E1E1E` cards), white text, subtle gray accents, and rounded corners (8–20px) deliver a modern, accessible UI.

*This release completes the Calendar’s scheduling flow, from empty states through multi-course management and prerequisite inspection.*  

---

## Reproduction Steps:

### **Log 1.11  - Reproduction Steps**  

1. **Clone the Repository**:  
   - Clone the project using Git:  
     ```bash
     git clone https://github.com/AbdulkadirAhmed1/StudentHUB-Project.git
     cd mainApp
     ```

2. **Select a Date with No Courses**  
   - Tap on any day cell (e.g. 8 March 2024).  
   - **Expected**: Bottom card header updates to “8 March 2024” and shows “No courses scheduled” placeholder.  
   - **Screenshot**: ![Date Selected, No Courses](https://i.imgur.com/l8oi9im.png)

3. **Open “Add Course” Modal**  
   - With a date selected, tap **+ Add Course**.  
   - **Expected**: A slide-up modal appears with:  
     - A department picker populated from `/api/departments`  
     - A live-filter search bar  
     - A scrollable list of courses  
     - A **Close** button  
   - **Screenshot**: ![Add Course Button View](https://i.imgur.com/XdaCwQc.png)

4. **Schedule a Single Course**  
   - In the modal, choose “EECS” then type “1010” → select **EECS1010**.  
   - **Expected**: Modal closes, bottom card shows one badge for **EECS1010** at its scheduled time, no scrollbar.  
   - **Screenshot**: ![One Course Added](https://i.imgur.com/MTE3iwV.png)

5. **Schedule Multiple Courses & Scroll**  
   - Repeat to add **EECS1045** (10:30 AM) and **EECS1720** (2:30 PM).  
   - **Expected**: Badges appear in chronological order, card becomes scrollable if they exceed available height.  
   - **Screenshot**: ![Three Courses Added](https://i.imgur.com/jhCvpHR.png)

6. **Dot Indicator on Calendar**  
   - Return to the calendar grid.  
   - **Expected**: The date you scheduled courses on (e.g. 8 March) shows a small blue dot beneath the day number.  
   - **Screenshot**: ![Dot Indicator](https://i.imgur.com/HgCeium.png)

7. **View Prerequisites**  
   - In the bottom card, tap **View Pre-Reqs** on one of the badges.  
   - **Expected**: A modal lists each prereq group, with “OR” chains on one line and additional groups below.  
   - **Screenshot**: ![Pre-Req Button](https://i.imgur.com/6D4ePuT.png)

8. **Month Navigation Resets Selection**  
   - While a date is selected, tap “>” to go to the next month.  
   - **Expected**: Selected date is cleared (no day highlighted) but the dot indicators remain on their original dates.  

9. **Empty-State Return**  
   - Navigate back to the month with scheduled courses and tap that day again.  
   - **Expected**: Badges reappear for that date, confirming in-memory persistence.  

10. **Initial Empty State**  
   - Launch the app and navigate to the Calendar tab.  
   - **Expected**: No date is selected, bottom card shows “Select a date” in gray italic text.  
   - **Screenshot**: ![No Date Selected](https://i.imgur.com/vGvf4FV.png)

11. **Run Jest Unit Tests** (Ensure test cases pass in components>tests):  
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

### Log 1.10 4/28/2025

- **UI/UX Refinements:**  
  - Polish the slide-up “Add Course” modal’s styling: adjust overlay opacity, padding, and rounding for a more cohesive look.  
  - Center the “Select a date” placeholder text in the bottom card and ensure it stays vertically centered as the card expands.  
  - Harmonize the department picker and search input appearance: consistent corner radii, placeholder text color, and spacing.  
  - Add subtle touch-feedback (ripple or opacity change) on pressable elements within modal and calendar cells.

- **Functionality Enhancements:**  
  - Wire up the course selection callback: when a course is tapped in the modal, add it to the selected date’s event list in the bottom card.  
  - Persist added courses per date in local state (and later to backend) so they remain visible when reopening the app.  
  - Implement the “Close” button to reset searchQuery and unmount the modal cleanly.

- **Performance & Compatibility:**  
  - Audit FlatList performance for large course lists: implement `initialNumToRender`, `windowSize`, and `keyExtractor` optimizations.  
  - Validate that the modal’s slide animation and transparency layer perform smoothly on low-end Android and iOS devices.  
  - Update `@react-native-picker/picker` to the latest stable release and confirm no regressions.

- **Backend Integration:**  
  - Create and deploy the `/api/departments/:deptName/courses` endpoint to production.  
  - Add a new `/api/calendar/:date/courses` GET/POST route to fetch and save the courses mapped to each date.  
  - Secure all API routes with middleware to verify user authentication token before allowing data access.

- **Future Features:**  
  - Build out the Advising tab: display user’s planned courses, show prerequisite checks (using the `preReq` arrays), and allow term filtering.  
  - Enhance the Profile page with editable fields (department, year, major) and avatar upload.  
  - Lay groundwork for Group Chat: integrate real-time messaging and channel management once backend schema for messages is finalized.  

### Log 1.11 5/15/2025

- **UI/UX Tweaks**  
  - Center the “No courses scheduled” text vertically when a date is selected but empty.  
  - Refine badge styling: increase minimum height (e.g. `minHeight: 40`) and consistent vertical spacing.  
  - Adjust bottom card max height to 50% of screen, then enable scrolling—ensure scroll-thumb is hidden on Android.  
  - Add subtle press feedback (opacity change) on badges and calendar cells.

- **Data & Sorting**  
  - Sort scheduled courses by their `hour`/`minute` before rendering badges to guarantee chronological order.  
  - On month change, reset `selectedDate` state to `null` to avoid phantom selection carry-over.

- **Performance Optimizations**  
  - Replace ScrollView for badges with FlatList when items > 5 for better virtualization.  
  - Memoize `getCalendarMatrix` and badge list rendering with `React.memo` or `useMemo` to reduce re-renders.

- **Backend & Persistence**  
  - Implement `/api/calendar/:date/courses` GET/POST endpoints to load and save a user’s calendar events.  
  - Integrate AsyncStorage fallback for offline mode—sync to backend when connectivity is restored.

- **Future Features**  
  - Add push notifications for upcoming scheduled courses (e.g. 15 minutes prior).  
  - Build the Advising tab to surface conflicts, prerequisite checks, and exportable schedule.  
  - Kick off Group Chat integration with real-time course discussion channels.