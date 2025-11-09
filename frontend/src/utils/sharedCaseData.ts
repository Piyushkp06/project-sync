// Shared hardcoded case data across Liaison, IO, and Witness
// This ensures the same case appears in all three dashboards

export const SHARED_CASE = {
  id: "CASE001",
  case_number: "CR/001/2025",
  case_type: "Theft",
  case_title: "Theft case - Main Street robbery",
  fir_number: "FIR/2024/12345",
  hearing_date: "2025-11-12",
  hearing_time: "10:00 AM",
  court_room: "Court Room 1",
  location: "Court Room 1",
  courtName: "District Court, Bhubaneswar",
  qrCode: "HS-CR001-2025-11-12-ABC123",
  manualCode: "CR001-XY89",
  status: "scheduled",
  io_name: "IO Suresh Dash",
  liaison_officer: "Amit Mahapatra",
  witness_name: "Rahul Mishra",
};

// Initial attendance status (will be updated when marked)
export const getInitialAttendanceStatus = () => {
  const stored = localStorage.getItem("sharedCaseAttendance");
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    witness: "Pending",
    io: "Pending",
    markedAt: null,
    markedMethod: null,
  };
};

// Update attendance status
export const updateAttendanceStatus = (
  role: "witness" | "io",
  status: "Present" | "Absent",
  method: "QR Code" | "Manual Code"
) => {
  const current = getInitialAttendanceStatus();
  current[role] = status;
  current.markedAt = new Date().toLocaleString();
  current.markedMethod = method;
  localStorage.setItem("sharedCaseAttendance", JSON.stringify(current));
  return current;
};

// Reset attendance (for testing)
export const resetAttendance = () => {
  localStorage.removeItem("sharedCaseAttendance");
};
