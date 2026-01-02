# health_bot_c
Beginner-friendly health chatbot written in C

# 🩺 "Is It Normal?" – Student Health AI Bot 🇮🇳

An India-focused Health AI Bot designed for school and college students
to safely ask health-related questions and understand what is normal
during adolescence — without fear or judgment.


## ❓ Problem We Are Solving

Students often hesitate to ask health-related questions due to:
- Fear of judgment
- Lack of access to trusted information
- Social stigma around mental, sexual, and pubertal health

Our solution provides a safe, anonymous, and student-friendly
Health AI Bot that helps students understand:
👉 what is normal  
👉 when to seek medical help


## 👥 Target Users

- School students (10–17 years)
- College students (18–25 years)

Special focus on:
- Adolescent health awareness
- Mental health safety
- Indian cultural sensitivity


## 🖥️ Login & Registration UI (Conceptual Wireframe)

Below is a conceptual wireframe representing the login and registration
experience designed for students.

┌────────────────────────────────────────────────────────────┐
│                                                             │
│         "IS IT NORMAL?" HEALTH BOT                          │
│              Welcome, Student! 🎓                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [ LOGIN ]  [ REGISTER ]  [ ABOUT ]                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CREATE YOUR ACCOUNT                                       │
│  ═══════════════════════════════════════════════════       │
│                                                             │
│  Full Name *                                               │
│  ┌────────────────────────────────────────┐               │
│  │ Ananya Sharma                          │               │
│  └────────────────────────────────────────┘               │
│  Helps us personalize your experience                     │
│                                                             │
│  Age * (10-25 years)                                      │
│  ┌─────┬─ 16 ─┬─────┐                                    │
│  │◄────■──────────►│                                      │
│  10    18    25                                            │
│  Also as number: [ 16 ]                                   │
│  📢 You are under 18. Talk to a parent about concerns.    │
│                                                             │
│  Blood Group *                                            │
│  ┌────────────────────────────────────────┐               │
│  │ ▼ Select Blood Group...                │               │
│  └────────────────────────────────────────┘               │
│                                                             │
│  Medical Conditions (Optional)                            │
│  ┌────────────────────────────────────────┐               │
│  │ Asthma, None, or leave blank           │               │
│  │                                        │               │
│  │                                        │               │
│  └────────────────────────────────────────┘               │
│  12/200 characters                                        │
│                                                             │
│  Email Address *                                          │
│  ┌────────────────────────────────────────┐               │
│  │ student@example.com            ✓       │               │
│  └────────────────────────────────────────┘               │
│  We'll use this for login and health reminders            │
│                                                             │
│  ┌────────────────────────────────────────────┐           │
│  │ 🔒 PRIVACY PROMISE                         │           │
│  │                                            │           │
│  │ Your health information is confidential   │           │
│  │ and used only to personalize guidance.   │           │
│  │ We never share your data.                │           │
│  └────────────────────────────────────────────┘           │
│                                                             │
│  ☐ I agree to Terms & Privacy Policy *                   │
│                                                             │
│                                                             │
│         ┌─────────────────────────────┐                   │
│         │  CREATE MY ACCOUNT →        │                   │
│         └─────────────────────────────┘                   │
│                                                             │
│  Already have an account? Login here                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  NEED HELP? Contact: support@healthbot.in                 │
│  CRISIS: 9442986556 | iCall: 1800-1200-1200              │
│                                                             │
└────────────────────────────────────────────────────────────┘


## 🔄 User Journey & Flow

This section explains how a first-time user interacts with the system,
from landing on the page to long-term usage.

FIRST-TIME VISITOR
├─ Lands on page
├─ Sees: "Is It Normal? Health Bot - Welcome, Student!"
├─ Sees three tabs: LOGIN | REGISTER | ABOUT
├─ Clicks REGISTER tab
│
REGISTRATION JOURNEY
├─ 1. Enter Full Name
│   └─ Real-time feedback: "Name looks good ✓"
│
├─ 2. Selects/slides Age
│   ├─ If Age < 18 → Shows disclaimer
│   └─ Real-time feedback: "Age confirmed ✓"
│
├─ 3. Selects Blood Group
│   └─ Dropdown easy to use
│
├─ 4. Adds Medical Conditions (optional)
│   └─ Character counter shows: "45/200"
│
├─ 5. Enters Email
│   ├─ Real-time check: "Email available ✓"
│   └─ If email exists: "Email already registered. Try logging in →"
│
├─ 6. Reviews Privacy Statement
│   └─ Reads: "Your information is confidential..."
│
├─ 7. Checks Terms & Conditions
│   └─ Clicks through to terms
│
├─ 8. Clicks "Register Now"
│   ├─ Page shows loading spinner
│   └─ Backend processes registration
│
REGISTRATION SUCCESS
├─ Page shows: "✓ Registration Successful!"
├─ Displays generated password
│   ├─ Shows as: ••••••••••••
│   ├─ "Show" button reveals it once
│   └─ "Copy" button copies to clipboard
│
├─ Warning: "⚠️ Save this password securely"
├─ Message: "We sent your password to your email"
├─ Option: "📥 Download Credentials (PDF)"
├─ Button: "Complete & Go to Dashboard"
│
│ OR
│ 
├─ Clicks "Back to Login"
│
FIRST LOGIN
├─ Clicks LOGIN tab
├─ Enters email
├─ Enters password (from email or notes)
├─ Checks "Remember me" (optional)
├─ Clicks "Login"
│   ├─ Backend verifies email + password
│   └─ Creates session
│
├─ Redirected to Health AI Bot Dashboard
├─ Dashboard shows:
│   ├─ "Welcome back, [First Name]!"
│   ├─ Quick links: "Ask a symptom", "View resources"
│   └─ Privacy message: "Your health data is confidential"
│
ONGOING USAGE
├─ User asks: "Is it normal to have acne?"
├─ Bot responds with:
│   ├─ "87% of teenagers develop acne"
│   ├─ Explanation of hormones
│   ├─ What's normal
│   ├─ When to see a doctor
│   └─ Management strategies
│
├─ User feels reassured
├─ Returns for more questions
└─ Data personalizes over time

RETURNS DAYS LATER
├─ Clicks "Login"
├─ Email auto-fills (from browser)
├─ Enters password
├─ "Remember me" checkbox keeps them logged in
├─ Seamless dashboard access
└─ Continues using bot for health guidance

🔄 User Journey & Flow
### First-Time Visitor Flow
- Lands on homepage
- Sees Login | Register | About
- Chooses Register




## 🔐 Privacy, Safety & Ethics (India-Specific)

- No medical diagnosis is provided
- Data used only for personalization
- Passwords are securely generated and hashed
- Special disclaimers for users under 18
- Crisis helplines shown clearly

Aligned with ethical standards followed by Indian public health platforms
(MoHFW-style safety behavior).


## 🚨 Emergency Handling

If users express self-harm or crisis intent:
- Immediate helpline numbers are shown
- User is encouraged to seek trusted adult or professional help
- Bot does NOT continue casual conversation

This ensures student safety is always prioritized.


## 🧠 Health AI Bot Capabilities

- Explains common adolescent health concerns
- Normalizes puberty-related changes
- Flags red-flag symptoms
- Encourages professional care when needed
- Uses India-specific health statistics


## 🛠️ Tech Stack

- Frontend: HTML / CSS / React (planned)
- Backend: Node.js / Firebase (planned)
- Authentication: Email + generated password
- AI Logic: Rule-based + AI responses


## ⭐ Why This Project Stands Out

- Designed specifically for Indian students
- Focuses on safety, privacy, and ethics
- Addresses taboo health topics responsibly
- Shows clear UX and system thinking
- Can scale into real-world health platforms
