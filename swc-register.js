require('@swc/register')({
    jsc: {
        parser: {
            syntax: 'typescript',
            tsx: true,
        },
        transform: {
            decorators: true,
        },
    },
});
