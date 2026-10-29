// Put images in /public/certs/<file>. Update `date` values as needed.
const c = (title, issuer, img, date = "Add date", tag, details) => ({ title, issuer, date, tag, details, image: `/certs/${img}` });
export const certifications = [
  c("Dream Destination", "Microsoft", "microsoft-dream-destination.png","Jan 2025"),
  c("MERN Stack Development", "Rays IT and Design", "rays-it-mern-2025.png", "July 2025", "Vocational Training", "MongoDB, Express.js, React and Node.js full-stack training."),
  c("Build With Gemini", "Google Developer Groups", "build-with-gemini.jpg","Nov 2025","Hackathon", "Learn to build applications with Gemini AI."),
  c("NTPC Electron Quiz", "NTPC", "NTPC Electron Quiz Participation Certificate.png","Dec 2025","Quiz"),
  c("Certificate of Participation", "IBM", "csrbox.png","Dec 2025"),
  c("Codefest", "Unstop / NIT Durgapur", "codefest.png","Feb 2026"),
  c("Agentic AI", "CSRBOX", "ibm-agentic-ai.png","Jun 2026"),
  c("Challenging gameplay meets sharp problem-solving!", "Google", "google-game-night.png","July 2026"),
  c("AI/ML Training", "Rays IT and Design", "rays-it-aiml-2026.jpg", "July 2026", "Vocational Training", "Hands-on training in AI and machine learning."),
  c("Digital Marketing", "Google", "google-digital-marketing.png","July 2026"),
  c("Copilot", "Microsoft", "microsoft-copilot.png","July 2026"),
  c("Eureka! PitchFest", "GEC Bilaspur", "pitchfest.png","Aug 2026","Ideathon"),
  c("NTPC Electron Quiz", "NTPC", "NTPC Electron Quiz Participation Certificate (1).png","Sep 2026","Quiz"),
  c("Lenovo Leap", "BharatCares", "lenovo-leap.png","Oct 2026","Hackathon"),
];
