# Automated-Parking-Lot-availability-system-
A model developed using HTML-CSS, JavaScript and Computer vision to swiftly inform customers about available parking spots, minimizing congestion and enhancing overall customer experience.

We are trying to combine three pieces:

1. A computer vision model to detect empty vs occupied parking spots
2. A backend to serve results
3. A frontend (HTML/CSS/JS) accessible via QR

PART 1 — Computer Vision (Python + OpenCV)
We’ll use a basic approach:

Compare each parking spot region with a reference “empty” image
If difference is high → occupied
If difference is low → empty

PART 2 — Backend (Flask API)
This will:

Run detection
Send JSON to frontend

PART 4 — QR Code Access
To allow users to scan and open webpage

Deploy backend (Flask) online

🚗 How It Works (Flow)
User scans QR
Webpage opens
JS calls backend
Backend runs OpenCV detection
Results displayed (green = empty, red = occupied)

⚠️ Important Limitations (Be aware)
This simple version:

Needs fixed camera angle
Needs manual marking of parking spots
Sensitive to lighting changes

🚀 If You Want to Improve
You can upgrade later to:

Deep learning (YOLO / TensorFlow)
Real-time video detection
Auto-detect parking spaces
Navigation to nearest empty spot
