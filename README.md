# Next.js 15 Server Component Bug: Silent Failure with Client-Side Modules

This repository demonstrates a subtle bug in Next.js 15's app directory when using server components.  The issue occurs when a server component attempts to directly import and use a client-side module.  This often results in silent failure or unexpected behavior, making debugging difficult.

## Reproduction Steps

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the unexpected behavior or lack of error messages.

## Solution

The solution involves restructuring the code to ensure that client-side modules are only accessed within client components.  This usually involves refactoring to separate data fetching and rendering logic.

## Contributing

Contributions are welcome!