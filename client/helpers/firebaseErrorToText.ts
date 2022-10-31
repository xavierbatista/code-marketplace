export default function firebaseErrorToText(error: any): string {
  if (String(window.location).startsWith('http://localhost:'))
    console.log(String(error.code));

  switch (String(error.code)) {
    case 'auth/user-not-found':
      return 'Email not found';
    case 'auth/missing-email':
      return 'Email required';
    case 'auth/invalid-email':
      return 'Invalid email';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/too-many-requests':
      return 'Too many request';
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters long';
    default:
      return 'Error';
  }
}
