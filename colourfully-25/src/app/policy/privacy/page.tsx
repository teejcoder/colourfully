import React from 'react';
import ReactMarkdown from 'react-markdown';
import Privacy from '@/static/privacy';

interface PrivacyAndTosProps {
    content: any;
}

export default function PrivacyPolicy({content}: PrivacyAndTosProps) {
    return (
        <section className='prose mx-auto text-white p-6'>
            <ReactMarkdown>{content || Privacy}</ReactMarkdown>
        </section>
    )
}