import React from 'react';
import ReactMarkdown from 'react-markdown';
import Tos from '@/static/tos';

interface PrivacyAndTosProps {
    content: any;
}

export default function TermsOfService({content}: PrivacyAndTosProps) {
    return (
        <section className='container prose mx-auto text-white p-6'>
            <ReactMarkdown>{content || Tos}</ReactMarkdown>
        </section>
    )
}