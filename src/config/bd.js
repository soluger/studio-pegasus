import app from './firebase';

export function login(email, password){
    return app.auth().signInWithEmailAndPassword(email,password)
    
}

export function MudarSenha(email){
    return app.auth().sendPasswordResetEmail(email)
    
}

export function getCurrentUsername() {
    return app.auth().currentUser && app.auth().currentUser.displayName
}

export function logout() {
    return app.auth().signOut()
}