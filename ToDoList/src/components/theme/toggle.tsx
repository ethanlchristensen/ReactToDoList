import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from '@radix-ui/themes'

export default function DarkModeToggle() {
    const [currentTheme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        applyTheme();
    }, [currentTheme])

    function getInitialTheme() {
        let userTheme = null;
        let systemTheme = true;
        if (typeof window !== 'undefined' && window.localStorage) {
            userTheme = localStorage.getItem('theme');
            systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        return userTheme || (systemTheme ? 'dark' : 'light');
    }

    function toggleTheme() {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    function applyTheme() {
        if (currentTheme === 'dark') {
            document.getElementById('body')!.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.getElementById('body')!.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <div>
            {
                currentTheme === 'dark' ? (
                    <Button variant='surface' onClick={toggleTheme}>
                        <SunIcon strokeWidth={1.5} />
                    </Button>
                ) : (
                    <Button variant='surface' onClick={toggleTheme}>
                        <MoonIcon strokeWidth={1.5} />
                    </Button>
                )

            }
        </div>
    );
}