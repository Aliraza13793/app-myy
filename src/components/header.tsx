import Link from "next/link";
import React from "react";
function Header(){
    return ( <div className="flex bg-red-500 p-3 gap-5">
    <Link href="/" className="text-blue-500">
      Home
    </Link>
    <Link href="/dashboard" className="text-yellow-300">Dashboard</Link>
    <Link href="/dashboard/settings" className="text-green-600">Setting</Link>
    <Link href="/blog">Blog</Link>
    </div>
    )
}
export default Header;