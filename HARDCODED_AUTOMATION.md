# 🔧 Hardcoded Attendance Automation System

## Overview
This system creates a synchronized attendance tracking experience across three roles using **hardcoded shared case data** - no backend required!

## ✨ Key Features

### 1. **Shared Case Data**
A single case (`CR/001/2025`) is shared across all three user roles:
- **Liaison Officer** - Creates and displays QR code
- **Investigating Officer (IO)** - Marks their own attendance  
- **Witness** - Marks their attendance

### 2. **Synchronized Attendance**
- Attendance status stored in `localStorage`
- Updates instantly across all pages
- Separate tracking for witness and IO attendance

### 3. **Dual Verification Methods**
- **QR Code Scanning** - Simulated QR verification
- **Manual Code Entry** - Text-based verification

---

## 📊 Shared Case Details

```typescript
Case Number: CR/001/2025
Case Type: Theft
Hearing Date: 2025-11-12
Hearing Time: 10:00 AM
Court Room: Court Room 1
QR Code: HS-CR001-2025-11-12-ABC123
Manual Code: CR001-XY89
IO: Suresh Dash
Witness: Rahul Mishra
Liaison Officer: Amit Mahapatra
```

---

## 🎯 How It Works

### For Liaison Officer:

**Page**: Today's Hearings / Generate QR Code

1. Navigate to **Today's Hearings** or **Generate QR Code**
2. See the shared case (`CR/001/2025`) in the list
3. Click to generate QR code
4. QR code displays: `HS-CR001-2025-11-12-ABC123`
5. Manual code shows: `CR001-XY89`
6. Share these codes with witness and IO

### For Witness:

**Page**: My Attendance

1. Navigate to **My Attendance**
2. See pending hearing for `CR/001/2025`
3. **Option A - QR Code:**
   - Click "Scan QR Code"
   - Select case `CR/001/2025`
   - Click "Simulate QR Scan"
   - ✅ Attendance marked!

4. **Option B - Manual Code:**
   - Click "Enter Code"
   - Select case `CR/001/2025`
   - Enter code: `CR001-XY89`
   - Click "Mark Present"
   - ✅ Attendance marked!

5. Status updates from "Pending" → "Present"
6. Record shows timestamp and method used

### For Investigating Officer (IO):

**Page**: My Attendance

1. Navigate to **My Attendance** (IO Dashboard)
2. See pending hearing for `CR/001/2025`
3. **Option A - QR Code:**
   - Click "Scan QR Code"
   - Select case `CR/001/2025`
   - Click "Simulate QR Scan"
   - ✅ Attendance marked!

4. **Option B - Manual Code:**
   - Click "Enter Code"
   - Select case `CR/001/2025`
   - Enter code: `CR001-XY89`
   - Click "Submit Attendance"
   - ✅ Attendance marked!

5. Status updates from "Pending" → "Present"
6. Record shows timestamp and method used

---

## 🔐 Verification Logic

### QR Code Verification:
```typescript
if (selectedCase === "CR/001/2025" && qrCode === "HS-CR001-2025-11-12-ABC123") {
  // Mark attendance as Present
  // Update localStorage
  // Show success toast
}
```

### Manual Code Verification:
```typescript
if (selectedCase === "CR/001/2025" && manualCode === "CR001-XY89") {
  // Mark attendance as Present
  // Update localStorage
  // Show success toast
}
```

---

## 💾 Data Storage

### localStorage Structure:
```json
{
  "sharedCaseAttendance": {
    "witness": "Present" | "Pending",
    "io": "Present" | "Pending",
    "markedAt": "2025-11-09 10:30:00",
    "markedMethod": "QR Code" | "Manual Code"
  }
}
```

### Attendance Records:
Each role has their own attendance record with:
- Case number
- Hearing date and time
- Court room
- Attendance status
- Marked timestamp
- Verification method

---

## 🧪 Testing the System

### Test Scenario 1: Witness Marks Attendance
1. **Login as Witness** (or navigate to witness attendance page)
2. Go to **My Attendance**
3. See `CR/001/2025` with status "Pending"
4. Click "Enter Code" → Select case → Enter `CR001-XY89`
5. Click "Mark Present"
6. ✅ Status changes to "Present" with timestamp
7. **Verification**: IO still shows "Pending" (independent tracking)

### Test Scenario 2: IO Marks Attendance
1. **Login as IO** (or navigate to IO attendance page)
2. Go to **My Attendance**
3. See `CR/001/2025` with status "Pending"
4. Click "Scan QR Code" → Select case → Click "Simulate QR Scan"
5. ✅ Status changes to "Present" with timestamp
6. **Verification**: Witness status remains unchanged

### Test Scenario 3: Liaison Creates QR Code
1. **Login as Liaison Officer**
2. Go to **Today's Hearings** or **Generate QR Code**
3. See `CR/001/2025` in hearing list
4. Select the hearing
5. QR code image displayed
6. Manual code shows: `CR001-XY89`
7. Share these with witness and IO to mark attendance

### Test Scenario 4: Reset Attendance
Open browser console and run:
```javascript
localStorage.removeItem('sharedCaseAttendance');
location.reload();
```
All attendance resets to "Pending"

---

## 📁 Files Involved

### Core Data File:
- `frontend/src/utils/sharedCaseData.ts` - Shared case data and localStorage functions

### Updated Pages:
1. **Witness**: `frontend/src/pages/WitnessAttendance.tsx`
2. **IO**: `frontend/src/pages/IOAttendanceMarking.tsx`
3. **Liaison**: `frontend/src/pages/TodayHearings.tsx`
4. **Liaison**: `frontend/src/pages/GenerateQRCode.tsx`

---

## 🎨 User Experience

### Visual Feedback:
- ✅ **Success Toast**: "Attendance marked successfully for CR/001/2025!"
- ❌ **Error Toast**: "Invalid code or case number"
- ⏳ **Loading State**: "Marking..." button text

### Status Badges:
- 🟠 **Pending** - Orange badge with clock icon
- 🟢 **Present** - Green badge with check icon
- 🔴 **Absent** - Red badge with X icon

### Information Cards:
Both witness and IO pages show helpful info:
```
📝 Testing Information:
Case: CR/001/2025
Manual Code: CR001-XY89
💡 Select the case above and enter this code to mark attendance
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────┐
│               Liaison Officer                        │
│  Creates hearing session with QR code               │
│  Case: CR/001/2025                                  │
│  QR: HS-CR001-2025-11-12-ABC123                    │
│  Manual: CR001-XY89                                 │
└─────────────────┬───────────────────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
┌────────▼────────┐ ┌─────▼──────────┐
│    Witness      │ │   IO Officer   │
│  Scans QR or    │ │  Scans QR or   │
│  Enters Manual  │ │  Enters Manual │
│     Code        │ │     Code       │
└────────┬────────┘ └─────┬──────────┘
         │                 │
         │                 │
┌────────▼─────────────────▼──────────┐
│        localStorage Update           │
│  witness: "Present"                  │
│  io: "Present"                       │
│  markedAt: timestamp                 │
│  markedMethod: "QR Code"/"Manual"    │
└──────────────────────────────────────┘
```

---

## 🚀 Benefits

1. **No Backend Required** - Everything runs in the browser
2. **Instant Updates** - localStorage syncs immediately
3. **Realistic Simulation** - Mimics real attendance workflow
4. **Easy Testing** - Predictable codes for reliable testing
5. **Independent Tracking** - Witness and IO attendance tracked separately
6. **Cross-Page Sync** - Attendance updates visible across all pages

---

## 🛠️ Customization

### Add More Cases:
Edit `sharedCaseData.ts` and add more case objects:
```typescript
export const SHARED_CASE_2 = {
  id: "CASE002",
  case_number: "CR/002/2025",
  manualCode: "CR002-AB34",
  // ... other fields
};
```

### Change Verification Codes:
Modify the `SHARED_CASE` object in `sharedCaseData.ts`:
```typescript
qrCode: "HS-CR001-2025-11-12-XYZ789",
manualCode: "CR001-TEST",
```

### Add More Attendance States:
Extend the `updateAttendanceStatus` function:
```typescript
export const updateAttendanceStatus = (
  role: "witness" | "io",
  status: "Present" | "Absent" | "Late",
  method: "QR Code" | "Manual Code"
) => {
  // ... implementation
};
```

---

## 🎓 Learning Points

This hardcoded system demonstrates:
- ✅ localStorage for state management
- ✅ Data synchronization across components
- ✅ Simulated verification logic
- ✅ User feedback with toast notifications
- ✅ Conditional rendering based on state
- ✅ Form validation and error handling

---

## 📝 Summary

- **1 Shared Case**: `CR/001/2025` visible to all roles
- **2 Verification Methods**: QR Code + Manual Code
- **3 User Roles**: Liaison, Witness, IO
- **0 Backend Calls**: Everything is hardcoded and stored in localStorage

**Perfect for**: Demo, Testing, Development, Understanding the workflow!

---

## 🎉 Quick Test

1. Open **Liaison** → Generate QR Code → See case CR/001/2025
2. Open **Witness** → My Attendance → Enter code `CR001-XY89` → Mark Present ✅
3. Open **IO** → My Attendance → Simulate QR Scan → Mark Present ✅
4. Check both pages → Both show "Present" status independently!

**It works! 🚀**
