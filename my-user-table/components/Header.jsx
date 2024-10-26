import Link from "next/link";
import { nav } from '@/styles/Header.module.css';

const
    pages = [
        { href: '/', name: 'GetUser' },
        { href: '/table', name: 'Table Users' },
        
    ]

export function Header() {
    return <header>
        
        <nav className={nav}>
            <ul>
                {pages.map(page =>
                    <Link href={page.href} key={page.href}>{page.name}</Link>
                )}
            </ul>
        </nav>
        <br/>
    </header>
}