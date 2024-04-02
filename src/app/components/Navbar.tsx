import Link from "next/link";
import Container from "./Container";
import { Button } from "./Button";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-body-light">
      <Container asChild>
        <div className="flex items-center justify-between space-x-5 py-1">
          <Link href="/" className="relative top-1.5">
            <Logo src={""} alt={"logo"} />
          </Link>

          <ul className="flex items-center">
            <li>
              <Button padding="5" variant="ghost">
                <a href="#">Home</a>
              </Button>
            </li>
            <li>
              <Button padding="5" variant="ghost">
                <a href="#">Service</a>
              </Button>
            </li>
            <li>
              <Button padding="5" variant="ghost">
                <a href="#">About Us</a>
              </Button>
            </li>
            <li>
              <Button padding="5" variant="ghost">
                <a href="#">Portfolio</a>
              </Button>
            </li>
            <li>
              <Button className="uppercase">Begin</Button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
