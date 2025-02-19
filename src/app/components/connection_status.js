"use client";
import { useState, useEffect } from 'react';

export default function ConnectionStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        setIsOnline(navigator.onLine);

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!isOnline) {
        return (
            <div className="fixed top-0 w-full bg-red-500 text-white p-2 text-center z-50">
                Vous êtes actuellement hors ligne
            </div>
        );
    }

    return null;
}