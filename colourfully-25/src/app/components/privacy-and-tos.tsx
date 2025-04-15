import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PrivacyAndTosProps {
    content: any;
}

export default function PrivacyAndTos({content}: PrivacyAndTosProps) {
    return (
        <section className='prose mx-auto p-6'>
            <ReactMarkdown>{content}</ReactMarkdown>
        </section>
    )
}