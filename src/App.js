import "./App.css";
import Carousel from "./components/GalleryFlickity";
import { Navbar } from "./components/Navbar";
import { Promo } from "./components/Promo";
import { Separator } from "./components/Separator";
// import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
// import { Layout } from "./components/Layout";
// import RameLogo from "./rame-logo.png";

function App() {
    const collapseItems = ["Home", "Men", "Women", "Jewelery", "Electronics"];

    return (
        // <Layout>
        //     <Navbar isBordered variant="sticky">
        //         <Navbar.Toggle showIn="xs" />
        //         <Navbar.Brand
        //             css={{
        //                 "@xs": {
        //                     w: "12%",
        //                 },
        //             }}
        //         >
        //             <img
        //                 src={ITILogo}
        //                 width={45}
        //                 height={35}
        //                 alt="Ramé Logo"
        //             ></img>
        //             <Text b color="black" hideIn="xs">- Store</Text>
        //         </Navbar.Brand>
        //         <Navbar.Content
        //             enableCursorHighlight
        //             activeColor="error"
        //             hideIn="xs"
        //             variant="highlight-rounded"
        //         >
        //             <Navbar.Link isActive href="#">Home</Navbar.Link>
        //             <Navbar.Link href="#">
        //                 Men
        //             </Navbar.Link>
        //             <Navbar.Link href="#">Women</Navbar.Link>
        //             <Navbar.Link href="#">Jewelery</Navbar.Link>
        //             <Navbar.Link href="#">Electronics</Navbar.Link>
        //         </Navbar.Content>
        //         <Navbar.Content
        //             css={{
        //                 "@xs": {
        //                     w: "12%",
        //                     jc: "flex-end",
        //                 },
        //             }}
        //         >
        //             <Dropdown placement="bottom-right">
        //                 <Navbar.Item>
        //                     <Dropdown.Trigger>
        //                         <Avatar
        //                             bordered
        //                             as="button"
        //                             color="error"
        //                             size="md"
        //                             src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        //                         />
        //                     </Dropdown.Trigger>
        //                 </Navbar.Item>
        //                 <Dropdown.Menu
        //                     aria-label="User menu actions"
        //                     color="primary"
        //                     onAction={(actionKey) => console.log({ actionKey })}
        //                 >
        //                     <Dropdown.Item
        //                         key="profile"
        //                         css={{ height: "$18" }}
        //                     >
        //                         <Text b color="inherit" css={{ d: "flex" }}>
        //                             Signed in as
        //                         </Text>
        //                         <Text b color="inherit" css={{ d: "flex" }}>
        //                             zoey@example.com
        //                         </Text>
        //                     </Dropdown.Item>
        //                     <Dropdown.Item key="settings" withDivider>
        //                         Profile
        //                     </Dropdown.Item>
        //                     <Dropdown.Item key="team_settings">
        //                         My Settings
        //                     </Dropdown.Item>
        //                     <Dropdown.Item key="analytics" withDivider>
        //                         Analytics
        //                     </Dropdown.Item>
        //                     <Dropdown.Item key="system">System</Dropdown.Item>
        //                     <Dropdown.Item key="configurations">
        //                         Configurations
        //                     </Dropdown.Item>
        //                     <Dropdown.Item key="help_and_feedback" withDivider>
        //                         Help & Feedback
        //                     </Dropdown.Item>
        //                     <Dropdown.Item
        //                         key="logout"
        //                         withDivider
        //                         color="error"
        //                     >
        //                         Log Out
        //                     </Dropdown.Item>
        //                 </Dropdown.Menu>
        //             </Dropdown>
        //         </Navbar.Content>
        //         <Navbar.Collapse>
        //             {collapseItems.map((item, index) => (
        //                 <Navbar.CollapseItem
        //                     key={item}
        //                     activeColor="neutral"
        //                     isActive={index === 0}
        //                 >
        //                     <Link
        //                         color="inherit"
        //                         css={{
        //                             minWidth: "100%",
        //                         }}
        //                         href="#"
        //                     >
        //                         {item}
        //                     </Link>
        //                 </Navbar.CollapseItem>
        //             ))}
        //         </Navbar.Collapse>
        //     </Navbar>
        // </Layout>
        <div className="body">
            <Promo />
            <Navbar />
            <Separator />
            {/* <Carousel /> */}
        </div>
    );
}

export default App;
