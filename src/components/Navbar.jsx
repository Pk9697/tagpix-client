import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

function NavbarContainer() {
  const isLoggedin = false

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
        {isLoggedin ? (
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
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
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
        <Navbar.Link as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/admin">
          Admin
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarContainer
