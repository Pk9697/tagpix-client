import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function NavbarContainer() {
  const {
    authState: {
      user: { isAdmin, name, email },
      isLoggedIn,
    },
    logOutUser,
  } = useContext(AuthContext)

  const location = useLocation()

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/">
        <img
          src="/vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TagPix
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isLoggedIn ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{name}</span>
              <span className="block truncate text-sm font-medium">
                {email}
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOutUser}>Log out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Button.Group>
            <Button as={Link} to="/login" color="gray">
              Login
            </Button>
            <Button as={Link} to="/register" color="gray">
              Register
            </Button>
          </Button.Group>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={location.pathname === '/'}>
          Home
        </Navbar.Link>
        {isAdmin && (
          <Navbar.Link
            as={Link}
            to="/admin"
            active={location.pathname === '/admin'}
          >
            Admin
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarContainer
