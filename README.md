# Automated-Parking-Lot-availability-system-
A model developed using HTML-CSS, JavaScript and Computer vision to swiftly inform customers about available parking spots, minimizing congestion and enhancing overall customer experience.

We are trying to combine three pieces:

1. A computer vision model to detect empty vs occupied parking spots
2. A backend to serve results
3. A frontend (HTML/CSS/JS) accessible via QR
________________________________________________________________________________________________________________________

1. Pre-defining the parking layout
Before any detection happens, we manually mark all parking spaces using your second script.

Each spot is stored as coordinates (pos_list)
This acts like a map of the parking lot
The system now knows exactly where to look in every frame
This is what makes the system structured and reliable — it doesn’t need to detect parking slots every time.

2. Continuous monitoring using video
Our main script reads frames from a video (or camera feed).

Each frame = current state of the parking lot
This makes the system automatic and near real-time
Instead of checking manually, the system constantly watches the parking area.

3. Converting the image into a simplified form
The raw image is processed to make detection easier:
Removes color → keeps only intensity
Removes noise → smoothens the image
Converts to binary → separates objects from background
Expands shapes → makes cars more solid
The goal is to make cars stand out clearly from empty spaces.

4. Checking each parking spot individually
For every predefined parking slot:

The system extracts that region
It measures how much “object presence” exists using white pixels
Essentially asking whether something is there inside this box

5. Deciding: Occupied vs Empty
More pixels → car present → Occupied
Fewer pixels → no car → Empty
This is the core decision-making step.

6. Aggregating results
After checking all spots:
Counts total free spaces
Labels each spot (green/red in OpenCV window)
Converts detection into usable information.

7. Continuous updating
Since this runs frame-by-frame:
Car enters → becomes occupied
Car leaves → becomes empty
This makes the system fully automated and dynamic

8. Backend Integration (Bridge to Web)
Now we connect your OpenCV system to users.
What happens:
A backend (Flask) runs your detection code
It converts results into JSON
Example:
  {"slot": 0, "status": "Empty"},
  {"slot": 1, "status": "Occupied"}
This allows your system to communicate with a website

9. Frontend (HTML, CSS, JavaScript)
This is what users see after scanning the QR code.
HTML — Structure
Purpose:
Defines the layout of the webpage
Role:
Displays title
Creates container for parking slots
Adds refresh button
Acts as the skeleton of the interface

CSS — Visualization
Purpose:
Makes the system user-friendly and intuitive
Role:
Green → Empty
Red → Occupied
Organizes layout neatly
Converts raw data into visual understanding

JavaScript — Live Data Handling
Purpose:
Connects frontend to backend
Role:
Calls backend API
Receives parking data
Updates UI dynamically
Makes the system interactive and real-time

10. QR Code Integration
Purpose:
Provide instant access to users
How it works:
You deploy your website online
Generate a QR code for the URL using tools like
QR Code Generator
Users scan QR → webpage opens
No app required — simple and accessible
_______________________________________________________________________________________________________________

COMPLETE USER FLOW
1. Camera monitors parking lot
2. OpenCV detects occupancy
3. Backend converts results to JSON
4. Website is hosted online
5. QR code contains website link
6. User scans QR
7. HTML loads structure
8. JavaScript fetches live data
9. CSS displays:
     🟩 Empty spots
     🟥 Occupied spots
10. User parks in available space


---------------------------------------------------------------------------------------------------------------
WHY THIS IS A SMART SYSTEM

Fully automated detection
Real-time updates
Accessible via QR
No human intervention needed
