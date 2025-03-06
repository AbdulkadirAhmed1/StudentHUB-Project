# **🛠️ StudentHUB Installation Guide**  

## **Authored by The Architect (Abdulkadir Ahmed)**  

## **📌 Overview**  
This guide provides a high-level overview of how to set up and test the **StudentHUB** app.  

For **testing purposes**, only the **frontend** needs to be downloaded and set up. The **backend is already hosted remotely**, so API requests will function automatically.  

Additionally, an **APK file** is released for every version, allowing **manual installation for Android testing** if preferred.  

---

## **🚀 How to Set Up the Frontend**  
For detailed setup and step-by-step instructions, refer to the **Frontend Setup Guide**:  

📌 **[Frontend Setup Guide](frontend/FRONTEND_SETUP.md)**  

This guide contains:  
- How to install dependencies  
- How to start the Expo server  
- How to run the app on a device, emulator, or browser  

The **StudentHUB frontend** is built with **React Native & Expo**, ensuring cross-platform compatibility.  

---

## **📱 Android APK for Testing (Planned for 2nd Generation)**  
In **Version 2.0 (2nd Generation)**, an **APK file** will be provided for **Android testing**, allowing users to install and test the app **without needing Expo or a development environment**.  

- Once available, the **latest release** can be found in the **"Releases" section** of this repository.  
- This option is **not available in Version 1.x** but will be introduced in **Version 2.0**.  

### **🔹 Beta APK (Version 1.3 Pre-Release)**  
- **Version 1.3 included an APK file**, but this was a **pre-release (Beta version)** for testing purposes.  
- The **APK for v1.3 is compatible with Android devices only** and can be found in the **"Pre-releases" section** of this repository.  
- This version was primarily used for **early testing** and is **not the final stable release**.  

For now, **testing requires running the frontend locally** using Expo. Follow the **Frontend Setup Guide** for detailed installation steps.

---

## **📜 Developer Logs & Versioning**  

### **📝 DevLogsFrontEnd.md**  
📌 **Location:** `StudentHUB-Project/frontend/DevLogsFrontEnd.md` [DevLogsFrontEnd](frontend/DevLogsFrontEnd.md)

- Contains a **detailed walkthrough** of all frontend changes from **Log 1.1 to Log 1.6**.  
- Tracks UI updates, feature additions, and any modifications made to the frontend.  
- Changes in the frontend are referred to as **"Logs"** (e.g., Log 1.1, Log 1.2, etc.).  

---

### **🛠️ DevLogsBackEnd.md**  
📌 **Location:** `StudentHUB-Project/backend/DevLogsBackEnd.md` [DevLogsBackEnd](backend/DevLogsBackEnd.md)

- Documents backend updates, API changes, database modifications, and optimizations.  
- Backend changes are named **"Versions"** (e.g., `back v1.0`, `back v2.0`).  
- These backend versions do not follow a **linear** relationship with frontend logs but exist separately.  

---

### **🔖 Project Versioning (Tags)**  
- The **entire project** follows a versioning system (e.g., `v1.1.0` - `v1.7.0`).  
- Some **tags correspond to specific Logs/Back Versions**, but it is **not a linear progression**.  
- When reviewing changes, **Logs (frontend)** and **Back Versions (backend)** should be seen as **separate entities**, rather than being directly tied to overall project versions.  

---

## **💡 Additional Notes for TAs**  
- The **backend is already deployed**, so **no local setup is required**.  
- The **APK file** is a **convenient alternative** for testing on Android.  
- If running locally, follow the **Frontend Setup Guide** for step-by-step installation.  
- Developer logs (`DevLogsFrontEnd.md` and `DevLogsBackEnd.md`) provide **detailed change tracking** per component.

For any issues, please refer to the **StudentHUB documentation** and setup files or contact me directly (sovxy@my.yorku.ca). 🚀  
