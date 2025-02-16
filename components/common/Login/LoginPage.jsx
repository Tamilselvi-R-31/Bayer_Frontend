import React, { useState } from "react";
import '../../../styles/globals.css';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior

        // Validate if both email and password are provided
        if (!email || !password) {
            setError("Both email and password are required.");
            return;
        }

        // Validate email format using a regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Validate password length (must be at least 8 characters)
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        // Strong password validation using a regular expression
        const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!strongPasswordPattern.test(password)) {
            setError("Password must include one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        // Add your login logic here (e.g., API call)
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="login-container"> {/* Wrap in login-container */}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}> {/* Added form tag */}
                <div>
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error">{error}</div>} {/* Apply the error class */}
                <button type="submit">Login</button> {/* Changed onClick to type="submit" */}
                <div className="links-container">
                    <a href="">Forget Password?</a>
                    <a href="">New User? Register here</a>
                </div>

            </form>
        </div>
    );
}

export default LoginPage;