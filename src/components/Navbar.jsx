import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react'

function NavbarContainer() {
  const isLoggedin = true

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
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
            <Button color="gray">Login</Button>
            <Button color="gray">Register</Button>
          </Button.Group>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Admin</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarContainer
