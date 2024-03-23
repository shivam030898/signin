import { UserButton } from "@clerk/nextjs";

function page() {
  return (
    <div className="flex items-center justify-center h-screen mt-2">
      <UserButton afterSignOutUrl="/sign-in" />
      <div>
        <h1 className="flex text-6xl font-semibold">You are signned in</h1>
      </div>
    </div>
  );
}

export default page;
