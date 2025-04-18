import React from 'react';
import ReactMarkdown from 'react-markdown';
import Privacy from '@/static/privacy';

interface PrivacyAndTosProps {
    content?: string;
}

export function PrivacyPolicy({content}: PrivacyAndTosProps) {
    return (
        <section className='container prose mx-auto text-white p-6'>
            <ReactMarkdown>{content || Privacy}</ReactMarkdown>
        </section>
    )
}