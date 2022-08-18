export default function Navbar() {
    return (
        <nav className="flex py-8">
            <div className="flex-initial w-64">
                Logo
            </div>
            <div className="flex-auto">
                <ul className="flex">
                    <li className="flex-auto">Blog</li>
                    <li className="flex-auto">Courses</li>
                    <li className="flex-auto">Discord</li>
                    <li className="flex-auto">Chats</li>
                    <li className="flex-auto">Calls</li>
                    <li className="flex-auto">Workshops</li>
                    <li className="flex-auto">About</li>
                </ul>
            </div>
            <div className="flex-initial w-64">
                <ul className="flex justify-center">
                    <li className="flex-initial w-24">dark</li>
                    <li className="flex-initial w-24">setting</li>
                </ul>
            </div>
        </nav>
    )
}