"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectionManager() {
    const router = useRouter();

    useEffect(() => {
        const handleOffline = () => {
            router.push('/offline');
        };

        const handleOnline = () => {
            router.push('/'); 
        };

       
        if (!navigator.onLine) {
            handleOffline();
        }

        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);

        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, [router]);

    return null;
}