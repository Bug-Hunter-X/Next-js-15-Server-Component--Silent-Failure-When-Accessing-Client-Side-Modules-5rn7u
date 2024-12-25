The solution is to refactor your code so that client-side modules and browser-specific logic are exclusively used within client components. Server components should focus on data fetching and preparation.  If you need to pass data from a server component to a client component, use props:

```javascript
// pages/api/route.js (server component)
export default async function MyServerComponent() {
  const data = await fetchData(); // Fetch data using server-side capabilities
  return (
    <ClientComponent data={data} />
  );
}

// components/ClientComponent.js (client component)
export default function ClientComponent({ data }) {
  // Use data and other client-side features here
  return <div>Client Component with data: {JSON.stringify(data)}</div>;
}

// Helper function (can be in utils folder)
async function fetchData() {
  // Perform data fetching
  const res = await fetch('https://api.example.com/data');
  return res.json();
}
```
By separating concerns and only using client-side features in client components, you avoid the silent failure issue in Next.js 15's app directory.