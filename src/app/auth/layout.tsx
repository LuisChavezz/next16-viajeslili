


export default async function AuthLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <div className="">
        { children } 
      </div>
    </main>
  );
}