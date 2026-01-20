import { createHighlighter } from 'shiki';

export const highlighterPromise = createHighlighter({
    langs: ['jsx', 'js', 'ts', 'typescript', 'html', 'css', 'json', 'markdown'],
    themes: ['min-dark']
});
