# 🚀 Quick Reference - Hardcoded Attendance System

## 📋 Shared Case Details

```
Case Number: CR/001/2025
Manual Code: CR001-XY89
QR Code: HS-CR001-2025-11-12-ABC123
Hearing Date: November 12, 2025
Hearing Time: 10:00 AM
Court Room: Court Room 1
```

---

## 👥 Test by Role

### 🔵 Liaison Officer
1. Navigate to: **Today's Hearings** or **Generate QR Code**
2. See case `CR/001/2025` in the list
3. Select it to generate/view QR code
4. Share code with witness and IO: `CR001-XY89`

### 🟢 Witness  
1. Navigate to: **My Attendance**
2. See pending case `CR/001/2025`
3. **Method 1**: Click "Enter Code" → Select case → Type `CR001-XY89` → Submit
4. **Method 2**: Click "Scan QR Code" → Select case → Click "Simulate QR Scan"
5. ✅ Status changes to "Present"

### 🟡 Investigating Officer (IO)
1. Navigate to: **My Attendance** (from IO dashboard)
2. See pending case `CR/001/2025`
3. **Method 1**: Click "Enter Code" → Select case → Type `CR001-XY89` → Submit
4. **Method 2**: Click "Scan QR Code" → Select case → Click "Simulate QR Scan"
5. ✅ Status changes to "Present"

---

## 🔑 Key Features

✅ **Shared Case** - Same case visible across all 3 roles  
✅ **Dual Verification** - QR Code OR Manual Code  
✅ **Independent Tracking** - Witness and IO tracked separately  
✅ **Instant Sync** - Updates via localStorage  
✅ **No Backend** - Everything hardcoded in frontend  
✅ **Helpful Hints** - Blue info box shows the code on each page  

---

## 🧪 Testing Steps

### End-to-End Test:
```
1. Liaison → Generate QR Code for CR/001/2025 ✓
2. Witness → Mark attendance with code CR001-XY89 ✓
3. IO → Mark attendance with QR simulation ✓
4. Check both → Both show "Present" independently ✓
```

### Reset Test Data:
```javascript
// Open browser console (F12)
localStorage.removeItem('sharedCaseAttendance');
location.reload();
// All attendance resets to "Pending"
```

---

## 📊 What You'll See

### Before Marking:
- Status: 🟠 **Pending** (orange badge with clock icon)
- No timestamp
- No method

### After Marking:
- Status: 🟢 **Present** (green badge with check icon)  
- Timestamp: "2025-11-09 10:30:15"
- Method: "QR Code" or "Manual Code"

---

## 💡 Tips

1. **Code is case-insensitive** - `cr001-xy89` works same as `CR001-XY89`
2. **Must select case first** - Dropdown shows only pending cases
3. **Each role independent** - Marking witness doesn't affect IO
4. **Persistent storage** - Attendance persists across page refreshes
5. **Info box shows code** - Look for blue box in manual entry section

---

## 🐛 Troubleshooting

**Problem**: "Invalid code or case number"  
**Solution**: Make sure you selected `CR/001/2025` and entered `CR001-XY89` exactly

**Problem**: Case not showing in dropdown  
**Solution**: Case already marked - check attendance records table below

**Problem**: Attendance not persisting  
**Solution**: Check if localStorage is enabled in browser settings

**Problem**: Want to test again  
**Solution**: Run `localStorage.removeItem('sharedCaseAttendance')` in console

---

## 📁 Files Modified

- ✅ `frontend/src/utils/sharedCaseData.ts` - Shared data store
- ✅ `frontend/src/pages/WitnessAttendance.tsx` - Witness page
- ✅ `frontend/src/pages/IOAttendanceMarking.tsx` - IO page  
- ✅ `frontend/src/pages/TodayHearings.tsx` - Liaison hearings
- ✅ `frontend/src/pages/GenerateQRCode.tsx` - Liaison QR generation

---

## 🎯 Expected Behavior

| Action | Result |
|--------|--------|
| Liaison views hearings | Shows CR/001/2025 with manual code |
| Witness enters correct code | Attendance marked, toast shows success |
| IO scans QR (simulated) | Attendance marked, toast shows success |
| Wrong code entered | Error toast, status unchanged |
| Refresh page | Attendance status persists |
| Mark again | Error: case not in pending list |

---

## 🎉 Success Indicators

✅ Blue info box visible in manual entry sections  
✅ Case CR/001/2025 shows in all three roles  
✅ Can mark attendance with code CR001-XY89  
✅ Status changes from Pending → Present  
✅ Timestamp appears after marking  
✅ Method (QR Code/Manual Code) displayed  
✅ Success toast notification appears  

---

**Ready to test? Start with the Liaison Officer to see the case, then mark attendance as Witness and IO!** 🚀
