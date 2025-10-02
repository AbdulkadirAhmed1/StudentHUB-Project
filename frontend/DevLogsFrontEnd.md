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

### Log 1.12 – 8/25/2025

This entry represents several weeks of progress across the frontend. Since the previous log (1.11), we have moved from feature prototyping into a phase of **refinement, modularization, and design polish**. This is the longest entry so far because it consolidates multiple iterations: the deep restructuring of the Calendar feature, persistent data storage per user, and the complete design and implementation of the Profile page. It’s equivalent to multiple dev logs merged into one.

---

- **Calendar Modularization & Enhancements (Post-Log 1.11)**
  - After scheduling, prerequisite checking, and duplicate detection were introduced in **Log 1.11**, it became clear that `calendar.tsx` was doing far too much. All logic — header, date grid, modals, course rendering, prereq handling — lived in one file. This made iteration slow and error-prone.
  - We decided to **modularize**. Every responsibility was broken into its own dedicated component. This was one of the most important structural changes in the frontend to date.
  - **Component Breakdown**
    - `CalendarHeader.tsx` → Displays the current month and year with left/right arrows. Now it only worries about navigation (prev/next month). Nothing else.
    - `CalendarGrid.tsx` → Responsible for laying out weeks and days. It knows about selection states, out-of-month cells, and whether a date should have an “event dot”. It doesn’t touch modals or course logic.
    - `ScheduledCoursesCard.tsx` → Shows the list of courses for the currently selected day. Independent scrolling, empty state messaging, “+ Add Course” button. Clean separation of the presentation layer.
    - `AddCourseModal.tsx` → Handles course fetching and filtering. It talks to the backend for departments and courses, applies search filters, and lets the user pick. Then it returns the selected course upward. Isolated, so it could be reused in Advising or Group Chat in the future.
    - `PrereqModal.tsx` → Dedicated UI for prerequisites. Formats AND/OR prereqs into human-readable bullet points. Clean and simple.
  - **Why Modularization Matters**
    - Before: `calendar.tsx` was 500+ lines of mixed logic.  
      After: a set of smaller, testable, swappable components.
    - Each component is single-purpose, making testing, debugging, and future enhancements much easier.
    - Clear separation of concerns means design changes (like styling the header differently) no longer risk breaking scheduling logic.
    - Scalability is now built-in: future features like exporting schedules, reminders, or switching to weekly view will be additions, not rewrites.
  - **UX & Feature Refinements**
    - Improved sorting: Courses are automatically ordered by time.
    - Duplicate prevention: Users cannot add the same course twice.
    - Time conflict detection: Friendly alerts prevent double-booking.
    - Per-user persistence: Courses are stored under `calendar_<username>` in AsyncStorage. Logging in as another student loads a completely separate schedule.
    - Visual polish: Event dots beneath day numbers give students quick awareness of busy days.
  - **Design & Philosophy**
    - The calendar now feels like an actual “student planner,” not just a prototype. Its dark theme matches the rest of the app, with layered grays for depth.
    - Empty states guide the user: instead of showing nothing, the card explains that courses will appear once added.
    - Every step is student-centered: feedback is immediate, data is consistent, and UI flows naturally.

---

- **Profile Page Implementation & Enhancements**
  - The Profile Page was created from scratch to give StudentHub users a sense of identity within the app. Instead of dumping user data inside the tabs (previously just `index.tsx`), we built a **dedicated route** and **modular components**. 
  
  ![Early Profile Look](https://i.imgur.com/6Oiiycz.png)
  
  - **Component Breakdown**
    - `ProfileHeader.tsx` → A custom header where the focus is on the “Profile” title. The back arrow and settings icon are intentionally smaller and lighter gray to reduce visual dominance. Both are animated with Reanimated spring effects, providing tactile bounce feedback.
    - `ProfileAvatar.tsx` → A circular avatar with a default person icon and a pencil overlay for editing. Pressing it triggers a spring bounce animation, making it feel like a real interactive control. The yellow accent ties into the app’s branding.
    - `ProfileInfo.tsx` → Loads actual student data from AsyncStorage (`username`, `department`, `major`, `year of study`). Redirects to login if missing. Typography hierarchy: big bold username, small gray details. Matches modern mobile UI standards.
  - **Styling Enhancements**
    - Background: gradient from `#2C2C2C` to `#000000`, matching the login screen for visual consistency.
    - Spacing: rebalanced so that header, avatar, and info feel aligned and centered, not cramped or pushed down.
    - Typography: cleaner fonts, bigger profile title, lighter details. A clear visual hierarchy where the most important data pops first.
  - **Animations**
    - Avatar bounce → immediate feedback when touched.
    - Back arrow and settings → smaller but consistent bounce animation.
    - Planned: fade-in or slide animations for the profile title itself.
  - **Impact**
    - The profile page now feels like a real app feature, not an afterthought. It demonstrates how modularization plus animation plus styling can elevate a screen from basic to polished.
    - Sets the groundwork for next steps: Edit Profile, Reset Password, Logout, and Settings, all of which will plug into the modular system easily.

---

- **Previous Commits**
  - **Aug 19, 2025**: `feat(calendar): save and load courses with AsyncStorage, linked to logged-in user`  
    - A crucial step in persistence. Each user now has a personal calendar state. This required restructuring AsyncStorage keys and ensuring the calendar loads correctly on mount. Without this, the calendar would be generic across all logins.
    - This commit bridged authentication with scheduling, creating a truly personalized planner.
  - **Aug 18, 2025**: `Added courses ordered by date and duplicate validation`  
    - Critical for UX. Before this, courses could appear unordered, or worse, duplicated. Students might have thought the app was buggy or unreliable.
    - By enforcing order and preventing duplicates, the calendar became reliable. Students trust that what they see is accurate.
    - Marked the shift from prototype features to production-quality constraints.

---

- **Overall Progress**
  - **Cohesive Flow**: Students now experience a connected journey: Login → Calendar → Profile. Each screen uses gradients, dark mode, yellow accents, and interactive feedback.
  - **Consistency Across Modules**
    - Calendar: modular, persistent, and student-focused.
    - Profile: modular, animated, and identity-focused.
    - Login: already gradient-based, now visually matched by Profile.
  - **Scalability**
    - Calendar: ready for filters, exports, reminders, multi-view layouts.
    - Profile: ready for editing, settings, logout, even profile pictures in the future.
  - **Design Language**
    - Unified dark aesthetic with layered contrasts.
    - Yellow as the accent color (edit icons, highlights).
    - Animation as a standard: every important control responds.
  - **Philosophy**
    - Build modularly, so nothing is stuck as “just one big file.”
    - Build with the student in mind: clarity, feedback, persistence.
    - Build for tomorrow: these components are not one-offs; they are designed to evolve.

- **Planned Work**
  - Upcoming improvements will focus on **dynamic animations** across the app to make navigation feel smoother and more immersive.  
  - The bottom navigation bar is planned to get animated feedback when switching tabs, reinforcing interactivity.  
  - The calendar will also receive animated transitions between months and days, helping students visually track changes instead of abrupt jumps.

---

*This log consolidates several weeks of work since Log 1.11. It documents the transformation of the Calendar into a modular, persistent, and user-friendly planner, alongside the creation of a polished, animated Profile Page. Together, these changes push StudentHub closer to a production-ready app. This entry is intentionally long — three logs’ worth of updates — to reflect the depth and breadth of the progress made during this period.*

--- 

### Log 1.13 – 8/30/2025  

- **New Login Page (Unfilled State)**  
  - Modernized input fields with rounded pill design, icons for username/password, and gradient register button.  
  - Default placeholders are subtle gray, user input is highlighted in yellow for clarity.  
  - Cancel button remains minimalist beneath Register.  
  - ![New Login Page Unfilled](https://i.imgur.com/wOag27c.png)  

- **New Login Page (Filled State)**  
  - Entered text displays in strong yellow against dark gray background.  
  - Inputs align consistently, icons remain subdued gray to avoid distraction.  
  - Ensures users immediately see what fields are active.  
  - ![New Login Page Filled](https://i.imgur.com/ctupp1r.png)  

- **New Register Page (Unfilled State)**  
  - Modularized register form into its own components (`UsernameInput`, `PasswordInput`, `YearDropdown`, `DepartmentDropdown`, `MajorInput`, `CancelModal`, `RegisterButtons`).  
  - Dropdowns now show clean placeholder text ("Select Year", "Select Department") until a value is chosen.  
  - Cancel button triggers confirmation modal only if form data has been modified.  
  - ![New Register Page Unfilled](https://i.imgur.com/bQpq4bl.png)  

- **New Register Page (Filled State)**  
  - Yellow input highlights for typed/selected values; placeholders remain gray.  
  - Dropdowns behave consistently with login inputs and support reset back to placeholders.  
  - Cancel modal warning is subtle and modern, using black/yellow theme.  
  - ![New Register Page Filled](https://i.imgur.com/lVQPY0f.png)  

- **Register Cancel Confirmation**  
  - When cancel is pressed and fields are dirty, modal appears asking: *“Are you sure you want to cancel? All entered data will be cleared.”*  
  - Options: **Keep Editing** (gray button) or **Yes, Clear** (yellow button).  
  - Prevents accidental data loss while maintaining subtle design.  
  - ![Cancel Registration](https://i.imgur.com/MrK1q40.png)  

- **Register Page with New Dropdowns**  
  - Both Year and Department dropdowns default to placeholder values.  
  - User can unselect back to placeholder, keeping state clean.  
  - Text styles: yellow for selected values, gray italic for placeholder.  
  - ![Register Dropdowns](https://i.imgur.com/bIaYFX2.png)  

- **Course Page: Add Course Modal (No Department Selected)**  
  - Modal shows “Select Department” dropdown only.  
  - Search bar and courses list remain hidden until a department is selected.  
  - Below, a centered italic message reads: *“Select a department.”*  
  - ![Add Course No Department](https://i.imgur.com/fLYcU5v.png)  

- **Course Page: Add Course Modal (Department Selected – Unfiltered)**  
  - After choosing a department, all courses from that department are listed (max 20 at once).  
  - Search bar appears above the list for quick filtering.  
  - Shows all relevant courses by default, making browsing possible while keeping search optional.  
  - ![Add Course Unfiltered](https://i.imgur.com/OgKSLYO.png)  

- **Course Page: Add Course Modal (Department Selected – Filtered)**  
  - Searching filters the list live by course code (case-insensitive).  
  - If no matches are found, modal displays *“No courses found.”*  
  - Smooth experience balancing browsing and targeted searching.  
  - ![Add Course Filtered](https://i.imgur.com/POrhYHf.png)  

- **Course Page New Color Visuals**  
  - Cards use consistent dark background (`#2C2C2C`) with subtle borders and purple highlights.  
  - Add Course and Pre-Req modals align visually with same style guide.  
  - ![Course Color Visuals](https://i.imgur.com/W3p1fvh.png)  

- **Course Card with Delete Option**  
  - Each scheduled course card now includes a delete button (UI visible, backend not yet implemented).  
  - Delete button matches purple accent theme, sitting alongside “View Pre-Reqs”.  
  - Future implementation will confirm deletion before removing from schedule.  
  - ![Course Delete](https://i.imgur.com/P2na1HH.png)  

- **Prerequisite Modal (Modernized)**  
  - Pre-Req groups now displayed in card-like containers similar to course cards.  
  - Rounded corners, padding, subtle shadows for depth.  
  - Course codes inside groups highlighted in purple (`#bb86fc`).  
  - Empty state: *“No prerequisites for this course.”*  
  - ![Prereq Modal](https://i.imgur.com/ezoVRc9.png)  

---

**Summary:**  
Log 1.13 represents a full **UI/UX overhaul** across Login, Register, and Calendar/Course flows:  
- Modularized both login and register forms components for maintainability.  
- Added cancel warning modal with intelligent dirty-checking.  
- Unified dropdown placeholders and input highlight system.  
- Improved course add modal with conditional states and capped results.  
- Modernized prerequisite modal to match overall card style.  

*This log establishes a **consistent design language** (dark theme, yellow/purple highlights, modular cards) across all major flows, creating a polished and professional user experience.*

### Log 1.13.1 – 9/8/2025  

- **Modernized Error Alerts**  
  - Replaced all default `alert()` calls in login and register flows with **custom modal alerts** that match the app’s black/yellow theme.  
  - These alerts now appear centered with rounded dark backgrounds, yellow titles, and clear action buttons.  
  - ![Missing Username or Password](https://i.imgur.com/jgMkZoO.png)  
  - ![All Fields Required](https://i.imgur.com/mY5tQi8.png)  

- **Error Types Covered**  
  - **Login**: Missing username or password → shows custom modal.  
  - **Register**: Missing fields, invalid year range, or backend failure → all show consistent modal UI.  
  - **General Errors**: “Something went wrong” now also uses this unified style.  

- **Design Consistency**  
  - Subtle animations and consistent typography unify error handling with other app modals (like Cancel Registration).  
  - Buttons follow the same scheme: gray for dismiss, yellow for confirm/action.  

--- 

**Summary:**  
This was a **small refinement update**, but important for UX consistency. Instead of jarring system alerts, all error handling now uses **modern, branded modals**. It ensures that even validation failures feel polished and cohesive with the rest of StudentHUB’s design language.   

### Log 1.14 – 10/3/2025  

- **New Profile Page Redesign**  
  - Profile page fully restructured with modular components (`ProfileHeader`, `ProfileAvatar`, `ProfileOptions`, `ProfileOptionItem`).  
  - Unified purple theme across icons, text, and animations for consistency with app-wide design.  
  - Clean spacing ensures options fill the screen naturally without feeling cluttered.  
  - ![New Profile Look](https://i.imgur.com/fddqhY8.png)  

- **Profile Option Hover & Press Animations**  
  - Each option row now animates with 3 synchronized effects:  
    1. **Divider Line Fill** – top line expands smoothly with accent color.  
    2. **Arrow Fill** – right-side arrow circle fills from bottom to top with accent color.  
    3. **Text Fill** – option label fills from right → left, character by character.  
  - Ensures each interaction feels dynamic and “alive” without overwhelming the user.  
  - ![Profile Settings Animation](https://i.imgur.com/WAoyzS8.png)  

- **Logout Option (Special Red Animations)**  
  - Logout retains unique identity with **red animations** instead of purple:  
    - Red line fill.  
    - Red arrow circle fill.  
    - Red text fill (right → left).  
  - Creates a visual distinction for destructive action, while maintaining consistency with the animation style.  
  - ![Profile Logout Animation](https://i.imgur.com/DH2JIZY.png)  

---

**Summary:**  
Log 1.14 introduces a **modernized interactive profile screen** with coordinated hover/press animations.  
- Modularized profile options into reusable components with smooth reanimated transitions.  
- Unified purple accent for all items except logout, which uses a distinct red theme.  
- Enhanced user experience by combining **line, arrow, and text animations** into a cohesive feedback system.  
- Logout now clearly communicates its destructive nature while fitting into the overall design system.  

*This log establishes the profile page as a centerpiece of the app’s new animation-driven UX, combining elegance with clear user feedback.*  
