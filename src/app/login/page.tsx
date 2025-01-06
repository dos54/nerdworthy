import '@/styles/module.form.css';
import {login, signup} from './actions';

export default function LoginPage() {

    return (
        <form action="" className="web-form">
            <label><span>Username</span><input type="email" name="email" id="email" required placeholder="email123@google.com"/></label>
            <label><span>Password</span><input type="password" name="password" id="password" required placeholder="password456"/></label>
            <button type='submit' formAction={login}>Log In</button>
            <button type='submit' formAction={signup}>Sign Up</button>
        </form>
    );
}