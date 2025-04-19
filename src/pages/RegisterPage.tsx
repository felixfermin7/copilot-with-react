export default function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}