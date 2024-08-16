import { SignedIn,SignedOut, SignInButton,SignUpButton, UserButton } from "@clerk/clerk-react"

function Auth() {
  return (
    <div className="auth-container">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}

export default Auth
