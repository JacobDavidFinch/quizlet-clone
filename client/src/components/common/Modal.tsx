import React from 'react';
import { v4 as uuidv4 } from 'uuid';

type ModalProps = {
    children: React.ReactNode;
    active: boolean;
    type: string;
};

export function Modal({ children, active, type }: ModalProps) {
    return (
        <div className={`modal ${active}`} id={`modal-${uuidv4}`}>
            {children}
            {type === 'login' && <LoginContent />}
            {type === 'signUp' && <SignUpContent />}
        </div>
    );
}

function LoginContent() {
    return (
        <>
            <div>
                <div>Log in</div>
                <div>X</div>
            </div>
            <div>
                <div>
                    <div>Log In with Google</div>
                    <div>Log In with Facebook</div>
                    <div>Log In with Apple</div>
                </div>
            </div>
            <div>
                <form>
                    <div>
                        <label>USERNAME</label>
                        <input></input>
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input></input>
                    </div>
                </form>
                <button>Forgot?</button>
            </div>
            <div>
                <button>Log In</button>
                <div>
                    <p>Rembmer to log out on shared devices</p>
                    <a>Use magic link instead</a>
                </div>
            </div>
        </>
    );
}

function SignUpContent() {
    return (
        <>
            <div>X</div>
            <div>
                <div>Continue with Google</div>
                <div>Continue with Facebook</div>
            </div>
            <div>OR EMAIL</div>
            <form>
                <div>
                    <label>BIRTHDAY</label>
                    <select></select>
                    <select></select>
                    <select></select>
                </div>
            <div>
                <label>USERNAME</label>
                <textarea></textarea>
            </div>
                <label>EMAIL</label>
                <textarea></textarea>
            </div>
                <label>PASSWORD</label>
                <textarea></textarea>
            </div>
            <div>
                <p>By click Sign up, you accept Quizlet's Terms of Service and Pricacy Policy</p>
                <button>Sign up</button>
                <button>Already have an account? <em>Log in</em></button>
                <p>Quizlet will never sell your email information to any third parties. we hate spam jsut as much as you do.</p>
            </div>
        </>
    );
}
