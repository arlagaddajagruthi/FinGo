// this creates a wrap around auth folder

const AuthLayout = ({children}) => {
  return (
    <div className="flex justify-center pt-40">
        {/* children will wrap both the routers */}
      {children}
    </div>
  )
}

export default AuthLayout
